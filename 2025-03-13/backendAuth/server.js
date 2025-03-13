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

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            console.log(err);
        } else {    
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    console.log(err);
                } else {
                    db.query(
                        'INSERT INTO users (username, password) VALUES (?, ?)',
                        [username, hash],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                res.send('Values Inserted');
                            }
                        }
                    );
                }
            });

        }
    }
    );
}
);

