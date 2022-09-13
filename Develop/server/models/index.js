const { model } = require('mongoose');
const bookSchema = require('./Book');
const User = require('./User');

const Book = model('Book', bookSchema);

module.exports = { User, Book };
