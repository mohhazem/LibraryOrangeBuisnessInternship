const express = require('express');

const app = express();

const booksRoute = require('./routes/books');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/books', booksRoute);




module.exports = app;