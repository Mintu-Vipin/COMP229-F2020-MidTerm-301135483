/*server/models/books.js
Mintu Vipin Joy
301135483
30/10/2020 
My Favourite Books*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('book_store', Book);
