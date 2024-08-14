const Book = require('../models/bookModel');

const bookController = {
  getAllBooks: (req, res) => {
    Book.getAll((err, books) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.render('books', { books });
    });
  },

  createBook: (req, res) => {
    const { title, author, genre } = req.body;
    Book.create({ title, author, genre }, (err, bookId) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res
        .status(201)
        .redirect('/books');
    });
  },

  deleteBook: (req, res) => {
    const { id } = req.params;
    Book.delete(id, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.redirect('/books');
    });
  },

  updateBook: (req, res) => {
    const { id } = req.params;
    const { title, author, genre } = req.body;
    Book.update(id, { title, author, genre }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.redirect('/books');
    });
  },
};

module.exports = bookController;
