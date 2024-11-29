import mysql from 'mysql2/promise'; //-- await használata miatt kell a promise

import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the MySQL server: ' + err.stack);
        return;
    }
    console.log('Connected to the MySQL server.');
});

export async function getUgyfelek() {
    let sql = 'SELECT * FROM ugyfelek';
    const [result] = await connection.execute(sql); //-- a body-ben lévő adatokat a result-ba másolja
    return result;
}

export async function getUgyfel(id) {
    let sql = 'SELECT * FROM ugyfelek WHERE uazon = ?';
    const [result] = await connection.execute(sql, [id]); //-- a body-ben lévő adatokat a result-ba másolja
    return result;
}

export async function insertUgyfel(ugyfel) {
    let sql = 'INSERT INTO ugyfelek (uazon, unev, uemail, utel, ujelszo, uszuletett) VALUES (NULL, ?, ?, ?, ?, ?)';
    const [result] = await connection.execute(sql, [ugyfel.unev, ugyfel.uemail, ugyfel.utel, ugyfel.ujelszo, ugyfel.uszuletett]);
    return result;
}