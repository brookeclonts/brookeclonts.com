const express = require('express');
const request = require('request');
const mongoose = require('../../db/mongoose');
const Book = require('../../models/books');
const ObjectID = require('mongodb');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

router.get('/', (req, res) => {
    Book.find().then((books) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(books);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/', (req, res) => {
    let proj = req.body;
    var book = new Book({
        title: proj.title,
        description: proj.description,
        status: proj.status,
        imageUrl: proj.imageUrl
    });

    book.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/admin', (req, res) => {
    Book.find({}, { title: 1 })
    .then((books) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(books);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.delete('/:id', authenticate, (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Book.findByIdAndRemove(id).then((book) => {
        if (!book) {
            return res.status(404).send();
        }
        return res.status(200).send(book);
    }).catch((e) => {
        return res.status(400).send();
    });
});

router.post('/', authenticate, (req, res) => {
    let newBook = req.body;
    var book = new Book({
        title: newBook.title,
        description: newBook.description,
        status: newBook.status,
        imageUrl: newBook.imageUrl,
        platforms: newBook.platforms
    });

    book.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.patch('/:id', authenticate, (req, res) => {
    const id = req.params.id;
    const updatedValues = req.body.values;
    Book.findOneAndUpdate({_id: id}, {$set: updatedValues}, {new: true}).then((doc) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

module.exports = router;
