const express = require('express');
const request = require('request');
const mongoose = require('../../db/mongoose');
const Project = require('../../models/projects');
const ObjectID = require('mongodb');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

router.get('/', (req, res) => {
    Project.find().then((projects) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(projects);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/', authenticate, (req, res) => {
    let proj = req.body;
    var project = new Project({
        title: proj.title,
        description: proj.description,
        url: proj.url,
        img: proj.img
    });

    project.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.patch('/:id', authenticate, (req, res) => {
    const id = req.params.id;
    const updatedValues = req.body.values;
    Project.findOneAndUpdate({_id: id}, {$set: updatedValues}, {new: true}).then((value) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(value);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/admin', (req, res) => {
    Project.find({}, { title: 1 })
    .then((projects) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(projects);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.delete('/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Project.findByIdAndRemove(id).then((project) => {
        if (!project) {
            return res.status(404).send();
        }
        return res.status(200).send(project);
    }).catch((e) => {
        return res.status(400).send();
    });
});

module.exports = router;