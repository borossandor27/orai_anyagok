const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config(); //-- környezeti változók beolvasása
let OpenAI = require("openai-api"); //-- https://www.npmjs.com/package/openai
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

app.use(express.json());

app.get("/", (req, res) => {
  
});

