import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';

const app = express();
const port = 3000;
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
});

app.use(cors());
app.use(express.json());