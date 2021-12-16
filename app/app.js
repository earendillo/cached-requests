const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/not-cached', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');
    res.send(JSON.stringify({hello: 'world'}));
});

app.get('/cached', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'public, max-age=60');
    res.send(JSON.stringify({hello: 'cached world'}));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
