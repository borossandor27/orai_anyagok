/*
    A kérés (URL routing) alapján 
    vagy registrációs vagy belépési oldalt ad vissza
*/

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({origin: 'http://localhost:3000'}));
const fs = require('fs'); //-- lehetővé teszi a képek betöltése
const path = require('path'); //- lehetővé teszi a könyvtár betöltése
app.use(express.static(path.join(__dirname, 'public'))); //-- statikus fájlok betöltése

app.get('/', (req, res) => {
    //-- index.html visszakülése
    console.log(__dirname);
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.status(201).sendFile(__dirname + '/public/index.html');
});


app.get('/login', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.status(201).sendFile(__dirname + '/public/login.html');
});

app.get('/regisztralas', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.status(201).sendFile(__dirname + '/public/regisztralas.html');
});

app.listen(port, () => {
    console.log(`Express szerver indítva. Port: ${port}`);
});