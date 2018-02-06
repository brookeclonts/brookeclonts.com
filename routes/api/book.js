const express = require('express');
const request = require('request');
const mongoose = require('../../db/mongoose');
const Book = require('../../models/books');
const ObjectID = require('mongodb');
const router = express.Router();

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

router.delete('/:id', (req, res) => {
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

module.exports = router;
