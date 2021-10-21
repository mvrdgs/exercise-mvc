const express = require('express');
const categoriesController = require('./controllers/categoriesController');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', categoriesController.listCategories);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
