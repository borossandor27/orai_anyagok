import express from 'express';

const router = express.Router();

export const routes = express.Router();

router.get('/:uazon/:tszint', (req, res) => {
  const { uazon, tszint } = req.params;
  res.send(`Tagság adatainak lekérése, ügyfél azonosító: ${uazon}, tagság szint: ${tszint}`);
});

router.get('/:uazon', (req, res) => {
  const { uazon } = req.params;
  res.send(`Tagság adatainak lekérése, ügyfél azonosító: ${uazon}`);
});

export default router;