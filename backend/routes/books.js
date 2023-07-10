const express= require('express');
const booksController= require('../controllers/books.controller')
const router = express.Router();

router.get("/",booksController.get);

module.exports = router;
