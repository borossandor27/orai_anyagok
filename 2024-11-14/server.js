const express = require('express');
const app = express();
require('dotenv').config();

const path = require('path');
const connect = require(path.join(__dirname, 'db.js')); //-- betöltjük a db.js fájlt, amely tartalmazza az adatbázis kapcsolatot   
const connection = connect(); //-- lefuttatjuk az adatbázis kapcsolatot

app.use(express.json());

app.get('/rendeles/:id', (req, res) => {
    const id = req.params.id;
    let sql = 'SELECT pizza.pnev, pizza.par, tetel.db FROM pizza NATURAL JOIN tetel WHERE tetel.razon = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err.message, err.code);
            res.status(500).send('Database error');
        } else {
            res.status(201).json(results);
        }
    });
});
app.post('/rendeles', (req, res) => {
    const data = req.body;
    let sql = "INSERT INTO `rendeles` (`razon`, `vazon`, `fazon`, `idopont`) VALUES (NULL, ?, ?, current_timestamp());";
    connection.query(sql, [data.vazon, data.fazon], (err, results) => {
        if (err) {
            console.error(err.message, err.code);
            res.status(500).send('Database error');
        } else {
            //-- van rendelés azonosító, rögzíthetjük a tételeket
            const rendelesId = results.insertId;
            for (let index = 0; index < data.items.length; index++) {
                const element = data.items[index]; //-- kiolvassuk az aktuális elemet
                sql = "INSERT INTO `tetel` (`razon`, `pazon`, `db`) VALUES (?, ?, ?);";
                connection.query(sql, [rendelesId, element.pazon, element.db], (err, results) => {
                    if (err) {
                        console.error(err.message, err.code);
                        res.status(500).send('Database error'); //-- hiba esetén visszaküldjük a hibát
                        return;
                    }
                    res.status(201).json(results);
                });
            }
        }
        res.status(201).json(results);
    });
});
app.delete('/rendeles/:id', (req, res) => {
    const id = req.params.id;
    let sql = 'DELETE FROM rendeles WHERE rendeles.razon = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err.message, err.code);
            res.status(500).send('Database error');
        } else {
            res.status(201).json(results);
        }
    });
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000.');
});
