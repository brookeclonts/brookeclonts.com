const express = require('express');
const router = express.Router();
const request = require('request');
// create local variable from mongoose config
var {mongoose} = require('./../db/mongoose');
var {Project} = require('./../models/projects');
var {Book} = require('./../models/books');
var {BlogPost} = require('./../models/blog-posts');
const {ObjectID} = require('mongodb');
require('dotenv').config();

// CORS
var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    var cors = require('cors');
    // var whitelist = [
    //     'http://localhost:3000', 'http://localhost:4200'
    // ];
    var corsOptions = {
        // exposedHeaders: ['x-auth'],
        // origin: function (origin, callback) {
        //     if (whitelist.indexOf(origin) !== -1) {
        //         callback(null, true)
        //     } else {
        //         callback(new Error('Not allowed by CORS'))
        //     }
        // },
        origin: '*',
        credentials: true
    }
    router.all('*', cors(corsOptions));
}

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/projects', (req, res) => {
    Project.find().then((projects) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(projects);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/blogposts', (req, res) => {
    BlogPost.find().then((posts) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(posts);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/blogposts/:title', (req, res) => {
    var title = req.params.title;
    BlogPost.findOne({title: title}).then((post) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(post);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/projects', (req, res) => {
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

router.delete('/projects/:id', (req, res) => {
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

router.get('/books', (req, res) => {
    Book.find().then((books) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(books);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/books', (req, res) => {
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

router.delete('/books/:id', (req, res) => {
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

router.post('/mailchimp', function(req, res) {
    var username = 'user'
    var password = process.env.MAILCHIMP_KEY;
    var datacenter = password.split('-')[1];
    var options = {
        uri: `https://${datacenter}.api.mailchimp.com/3.0/lists/b762b0fa4f/members`,
        method: 'POST',
        json: {
            "email_address": req.body.email,
            "status": "subscribed",
            "merge_fields": {
                "FNAME": req.body.fName,
                "LNAME": req.body.lName
            }
        },
        headers: {
            'Authorization': `${username} ${password}`,
            'Content-Type': 'application/json; charset=utf-8'
        }
    }

    request(options, function (err, result, body) {
      if (err) {
        res.send(err);
        return
      }
      res.send(result);
    })
});


module.exports = router;