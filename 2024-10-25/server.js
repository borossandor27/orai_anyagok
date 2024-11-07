const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");
const cors = require("cors");
app.use(cors()); //-- böngésző CORS védelem kikapcsolás
app.use(express.json());
fruits = require("./fruits.json");
//console.log(fruits);
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
function lastid() {
  if (fruits.length == 0) return 0;
  return fruits[fruits.length - 1].id;
}
app.get("/", (req, res) => {
  res.send("Helló Express!");
});
app.get("/fruit", (req, res) => {
  res.status(200).send(fruits);
});
app.get("/fruit/:id", (req, res) => {
  let id = req.params.id;
  res.status(200).send(fruits[id - 1]);
})
app.post("/fruit", (req, res) => {
  let newFruit = req.body;
  newFruit.id = lastid() + 1;
  fruits.push(newFruit);
  res.status(201).send(JSON.stringify(newFruit));
});
app.put("/fruit/:id", (req, res) => {
  let id = req.params.id;
  let modifiedFruit = req.body;
  fruits[id - 1] = modifiedFruit;
  res.status(201).send(JSON.stringify(modifiedFruit));
});
app.delete("/fruit/:id", (req, res) => {
  let id = req.params.id;
  fruits.splice(id - 1, 1);
  res.status(201).send();
});
app.get("fruit", (req, res) => {
  res.header("Content-Type", "text/html; charset=utf-8");
  res.status(404).send("<h1>404 HIBA</h1>");
});
app.listen(PORT, () => {
  console.log(`Express szerver indítva. http://localhost:${PORT}`);
});
