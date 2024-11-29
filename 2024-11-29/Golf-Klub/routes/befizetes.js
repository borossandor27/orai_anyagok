import express from 'express';

const router = express.Router();

export const routes = express.Router();

router.get('/', (req, res) => {
    res.send('Befizetes útvonal');
});

router.get('/:uazon/:bido', (req, res) => {
    const { uazon, bido } = req.params;
    res.send(`Befizetés adatainak lekérése, ügyfél azonosító: ${uazon}, befizetés időpont: ${bido}`);
});

router.get('/:uazon', (req, res) => {
    const { uazon } = req.params;
    res.send(`Befizetés adatainak lekérése, ügyfél azonosító: ${uazon}`);
});

export default router;