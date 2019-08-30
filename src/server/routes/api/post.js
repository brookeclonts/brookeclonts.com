const express = require('express');
const request = require('request');
const mongoose = require('../../db/mongoose');
const BlogPost = require('../../models/blog-posts');
const ObjectID = require('mongodb');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

router.get('/', (req, res) => {
    BlogPost.find()
    .then((posts) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(posts);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/admin', (req, res) => {
    BlogPost.find({}, { title: 1 })
    .then((posts) => {
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

router.get('/title/:title', (req, res) => {
    var title = req.params.title;
    BlogPost.findOne({title: title}).then((post) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(post);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    var title = req.params.title;
    BlogPost.findOne({_id: id}).then((post) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(post);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.patch('/:id', authenticate, (req, res) => {
    const id = req.params.id;
    const updatedValues = req.body;
    BlogPost.findOneAndUpdate({_id: id}, {$set: updatedValues}, {new: true}).then((post) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(post);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/', authenticate, (req, res) => {
    let newPost = req.body;
    var post = new BlogPost({
        title: newPost.title,
        description: newPost.description,
        body: newPost.body,
        imageUrl: newPost.imageUrl
    });

    post.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.delete('/:id', authenticate, (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    BlogPost.findByIdAndRemove(id).then((value) => {
        if (!value) {
            return res.status(404).send();
        }
        return res.status(200).send(value);
    }).catch((e) => {
        return res.status(400).send();
    });
});

module.exports = router;