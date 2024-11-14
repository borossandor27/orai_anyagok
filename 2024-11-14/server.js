const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const connect = require(path.join(__dirname , 'db.js')); // Kapcsolódás az adatbázishoz
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

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000.');
});
