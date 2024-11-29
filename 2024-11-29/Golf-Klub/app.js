import express from 'express';

const app = express();
app.use(express.json());
//-- form adatok feldolgozásához
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }));

import routeBefizetes from './routes/befizetes.js';
app.use("/golf/befizetes", routeBefizetes);

import routeJelenlet from './routes/jelenlet.js';
app.use("/golf/jelenlet", routeJelenlet);

import routeTagsag from './routes/tagsag.js';
app.use("/golf/tagsag", routeTagsag);

import routeUgyfel from './routes/ugyfel.js';
app.use("/golf/ugyfel", routeUgyfel);

app.listen(3000, () => {
    console.log('A szerver elindult a http://localhost:3000 porton.');
});

/*\
http://localhost:3000/golf/register
http://localhost:3000/golf/login
http://localhost:3000/golf/ugyfel
http://localhost:3000/golf/ugyfel/:uazon
http://localhost:3000/golf/ugyfel/:uazon
http://localhost:3000/golf/befizetes
http://localhost:3000/golf/befizetes/:uazon/:bido
http://localhost:3000/golf/befizetes/:uazon
http://localhost:3000/golf/ugyfelek
http://localhost:3000/golf/tagsag/:uazon/:tszint
http://localhost:3000/golf/tagsag/:uazon
http://localhost:3000/golf/jelenlet
http://localhost:3000/golf/jelenlet/:uazon
http://localhost:3000/golf/jelenlet/:uazon
http://localhost:3000/golf/jelenlet/:uazon
\*/