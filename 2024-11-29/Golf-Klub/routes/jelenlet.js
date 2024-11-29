import express from 'express';

const router = express.Router();

export const routes = express.Router();

router.get('/', (req, res) => {
    res.send('Jelenlet útvonal');
});

router.get('/:uazon', (req, res) => {
    const { uazon } = req.params;
    res.send(`Jelenlét adatainak lekérése, ügyfél azonosító: ${uazon}`);
});

export default router;