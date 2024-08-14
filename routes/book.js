const express = require('express');
const router = express.Router();
const db = require('../db');

// View all books
router.get('/', (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        if (err) throw err;
        res.render('books', { books: results });
    });
});

// Add a new book
router.post('/add', (req, res) => {
    const { title, author, genre } = req.body;
    db.query('INSERT INTO books (title, author, genre) VALUES (?, ?, ?)', [title, author, genre], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Update a book
router.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, genre } = req.body;
    db.query('UPDATE books SET title = ?, author = ?, genre = ? WHERE id = ?', [title, author, genre, id], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Delete a book
router.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM books WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

module.exports = router;
