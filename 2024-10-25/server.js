const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");
const cors = require("cors");
app.use(cors()); //-- böngésző CORS védelem kikapcsolás
app.use(express.json());
fruits = [];
const bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Helló Express!");
});
app.get("/fruit", (req, res) => {
  res.send(fruits);
});
app.post("/fruit", (req, res) => {
  let newFruit = req.body;
  newFruit.id = fruits.length + 1;
  fruits.push(newFruit);
  res.send("Az új gyümölcs adatai: " + JSON.stringify(req.body));
});
app.listen(PORT, () => {
  console.log(`Express szerver indítva. http://localhost:${PORT}`);
});
