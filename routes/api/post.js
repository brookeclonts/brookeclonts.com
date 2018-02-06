const express = require('express');
const request = require('request');
const mongoose = require('../../db/mongoose');
const BlogPost = require('../../models/blog-posts');
const ObjectID = require('mongodb');
const router = express.Router();

router.get('/', (req, res) => {
    BlogPost.find().then((posts) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(posts);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/one', (req, res) => {
    BlogPost.find().sort({_id:-1}).limit(1).then((post) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(post);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/:title', (req, res) => {
    var title = req.params.title;
    BlogPost.findOne({title: title}).then((post) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(post);
    }, (e) => {
        res.status(400).send(e);
    });
});

module.exports = router;