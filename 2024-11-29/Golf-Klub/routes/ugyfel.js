import express from 'express';
import * as db from '../db.js';
const router = express.Router();

export const routes = express.Router();

router.get('/', async (req, res) => {
    let ugyfelek = await db.getUgyfelek();
    res.header('Content-Type', 'application/json');
    res.status(201).send(ugyfelek);
});

router.get('/:uazon', async (req, res) => {
    let ugyfel = await db.getUgyfel(req.params.uazon);
    res.header('Content-Type', 'application/json');
    res.status(201).send(ugyfel);
});

router.put('/:uazon', (req, res) => {
    const { uazon } = req.params;
    res.send(`Ugyfel adatainak lekérése, azonosító: ${uazon}`);
});

router.delete('/:uazon', (req, res) => {
    const { uazon } = req.params;
    res.send(`Ugyfel adatainak lekérése, azonosító: ${uazon}`);
});

router.post('/register', (req, res) => {
    res.send('Regisztrációs útvonal');
});

router.post('/login', (req, res) => {
    res.send('Bejelentkezési útvonal');
});

export default router;