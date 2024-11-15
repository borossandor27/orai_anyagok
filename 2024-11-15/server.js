/*
* ciklusok
*/
const express = require('express');
const app = express();
app.use(express.json());

const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); //-- beállítjuk a statikus fájlok mappáját

app.set('view engine', 'ejs'); //-- beállítjuk az ejs nézetmotort

app.get('/', (req, res) => {
    let object = { "a": 1, "b": 2, "c": 3, "d": 4, "e": 5 };
    let title = "Ciklusok";
    res.render('index',{object,title}); //-- rendereljük a views mappában lévö index.ejs fájlt
});

app.listen(3000, () => {
    console.log('A szerver fut a http://localhost:3000-es porton.');
});