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

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        'SELECT * FROM users WHERE username = ?',
        username,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                bcrypt.compare(password,
                    result[0].password,
                    (error, response) => {
                        if (response) {
                            //-- sikeres azonoítás és token generálás
                            const id = result[0].id;
                            const token = jwt.sign({ id }, 'jwtSecret', {
                                expiresIn: "3 days",
                            });
                            res.json({ auth: true, token: token, result: result });
                        } else {
                            res.json({ auth: false, message: 'wrong username/password combination' });
                        }
                    });
            } else {
                res.json({ auth: false, message: 'No user found' });
            }
        }
    );
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
