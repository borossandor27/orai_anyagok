const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config(); //-- környezeti változók beolvasása
const OpenAI = require("openai-api");
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

app.use(express.json());

async function main() {
  const stream = await client.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: 'Say this is a test' }],
    stream: true,
  });
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}

main();
