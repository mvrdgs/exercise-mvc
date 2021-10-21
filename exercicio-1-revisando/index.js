const express = require('express');
const jokeController = require('./controllers/jokeController');

const app = express();

const PORT = 3000;

app.set('views', './views');

app.get('/', jokeController.listJokes);

app.listen(PORT, () => console.log(`Listen to port ${PORT}`));
