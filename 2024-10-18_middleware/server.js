/*
    A kérés (URL routing) alapján 
    vagy registrációs vagy belépési oldalt ad vissza
*/

const express = require('express'); //-- synchronus csatlakozás
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));
const fs = require('fs'); //-- lehetővé teszi a képek betöltése
const path = require('path'); //- lehetővé teszi a könyvtár betöltése
app.use(express.static(path.join(__dirname, 'public'))); //-- statikus fájlok betöltése
app.use(express.json()); //-- a törzsben lévő adatokat json formátumban visszakuldunk
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
let errors = [];
let data = [];
let success = true;

app.use((req, res, next) => {
    console.log('4. middleware');
    next();
});
app.use((req, res, next) => {
    console.log('2. middleware');
    next();
});
app.use((req, res, next) => {
    console.log('3. middleware');
    next();
});
app.get('*', (req, res, next) => {
    console.log('GET-re lefut middleware');
    console.log(req.ip);
    next();
});

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
app.post('/regisztralas', (req, res) => {
    res.header('Content-Type', 'application/json'); //-- nested json visszakülése
    let user = req.body; //-- a JSON adatokat visszaadja
    console.log(req.body);
    if(user.password != user.password2) {
        success = false;
        errors.push('A jelszavak nem egyeznek');
    }
    if(user.password.length < 5) {
        success = false;
        errors.push('A jelszavak hosszak 5-nél nagyobbnek kell lennie');
    }
    if(success) {
        data.push(user);
        res.status(201).send({success: true, data: data, errors: errors});
    } else {
        res.status(201).send({success: false, data: data, errors: errors});
    }
    
})
app.listen(port, () => {
    console.log(`Express szerver indítva. Port: ${port}`);
});