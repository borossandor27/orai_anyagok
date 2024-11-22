const { json } = require('body-parser');
const express = require('express');
const app = express();
app.use(json());
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',   // password for your MySQL server
    database: 'golfklub'
});
connection.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL server');
        return;
    }
    console.log('Connected to MySQL server');
});
/*
    http://localhost:3000/register be:felhasznalo, jelszo, jelszo2 vissza:true method:post
    http://localhost:3000/login be:felhasznalo, jelszo vissza:true method:post
    http://localhost:3000/befizetesek vissza:befizetesek adattabla method:get
    http://localhost:3000/befizetesek/:uazon vissza: adott azonosito alapjan befizetesek adattabla method:get
    http://localhost:3000/befizetes be:adatok vissza:true method:post
    http://localhost:3000/ugyfelek vissza:befizetesek adattabla method:get
    http://localhost:3000/ugyfelek/:uazon  vissza: adott azonosito alapjan befizetesek adattabla method:get
    http://localhost:3000/tagsagok  vissza:tagok adattabla method:get
    http://localhost:3000/tagsagok/:uazon  vissza: adott azonosito alapjan tagok adattabla method:get
    http://localhost:3000/jelenlet vissza: jelenlet adattabla method:get
    http://localhost:3000/jelenlet be:idopontok method:post
    http://localhost:3000/jelenlet be:idopont modositas method:patch
*/
app.get('/ugyfelek', (req, res) => {
    let sql="SELECT `uazon`,`unev`,`uemail`,`utel`,`ujelszo`,`uszuletett` FROM `ugyfelek`";
    connection.query(sql, (err, rows) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }
        res.status(201).json(rows);
    },);
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000.');
});