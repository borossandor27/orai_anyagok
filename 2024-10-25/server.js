const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
const cors = require('cors');
app.use(cors());  //-- böngésző CORS védelem kikapcsolás
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('Helló Express!');
});
app.post('/fruit', (req, res) => {
    console.log(req.body);
    res.send('Az új gyümölcs adatai: ' + JSON.stringify(req.body));
});
app.listen(PORT, () => {
    console.log(`Express szerver indítva. Port: ${PORT}`);
});