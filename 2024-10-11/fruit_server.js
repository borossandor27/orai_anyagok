/*
    Készíts Express alkalmazást gyümölcs adatok karbantartására (CRUD)
    A szolgáltatást a http://localhost:3000/fruit domainre helyezd el.
    A gyümölcsről az alábbi adatokat kell nyilvántartani:
    {
        "id": 1,
        "fruit": "Apple",
        "size": "Large",
        "color": "Red"
    }
        */

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({origin: 'http://localhost:3000'}));
let fruits = [
    { id: 0, fruit: 'Apple', size: 'Large', color: 'Red' }
]
app.get('/fruit', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.status(200);
    res.json(fruits);
});

app.post('/fruit', (req, res) => {
    console.log(req.body);  // a JSON adatokat visszaadja
    let uj = req.body;
    fruits.push(uj);
    res.send(`Az új gyümölcs adatai: n: ${uj.fruit}, s: ${uj.size}, c: ${uj.color}`);
});

app.put('/fruit/:id', (req, res) => {
    console.log(req.body);  // a JSON adatokat visszaadja
    let id = req.params.id;
    let uj = req.body;
    fruits[id] = uj;
    res.send(`A módosított gyümölcs adatai: n: ${uj.fruit}, s: ${uj.size}, c: ${uj.color}`);   
})

app.delete('/fruit/:id', (req, res) => {
    let id = req.params.id;
    fruits.splice(id, 1);
    res.send(`A törölni kívánt gyümölcs adatai: n: ${fruits[id].fruit}, s: ${fruits[id].size}, c: ${fruits[id].color}`);
})  

app.listen(port, () => {
    console.log(`Express szerver indítva. Port: ${port}`);
});
