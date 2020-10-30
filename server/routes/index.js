/*server/routes/index.js
Mintu Vipin Joy
301135483
30/10/2020 
My Favourite Books*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: 'books'
   });
});

module.exports = router;
