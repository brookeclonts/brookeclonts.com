const express = require('express');
const request = require('request');
const router = express.Router();
const multer = require('multer');
const mime = require('mime');
const fs = require('fs');
var AWS = require('aws-sdk');
const s3 = require('multer-s3');

var accessKeyId =  process.env.AWS_ACCESS_KEY || "xxxxxx";
var secretAccessKey = process.env.AWS_SECRET_KEY || "+xxxxxx+B+xxxxxxx";
var awsBucket = process.env.AWS_BUCKET || "brookeclonts";

// AWS.config.update({
//     accessKeyId: accessKeyId,
//     secretAccessKey: secretAccessKey
// });

const storageBooks = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/images/books')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + mime.getExtension(file.mimetype)) 
    }
});

// const storagePosts = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/assets/images/blog')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + '.' + mime.getExtension(file.mimetype))
//     }
// });

// const storagePosts = multer({
//     s3: s3,
//     bucket: 'brookeclontsbooks',
//     key: function (req, file, cb) {
//         console.log(file);
//         cb(null, `blog/${file.originalname.replace(/\W+/g, '-').toLowerCase()}-${Date.now()}`);
//     }
// });

const storagePosts = multer({
    storage: s3({
        dirname: '/blog',
        bucket: awsBucket,
        secretAccessKey,
        accessKeyId,
        region: 'us-west-1',
        filename: function (req, file, cb) {
            cb(null, `${file.originalname.replace(/\W+/g, '-').toLowerCase()}-${Date.now()}`); //use Date.now() for unique file keys
        }
    })
});

const storageProjects = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/images/projects')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + mime.getExtension(file.mimetype))
    }
});

const uploadBooks = multer({ storage: storageBooks })
const uploadPosts = multer({ storage: storagePosts })
const uploadProjects = multer({ storage: storageProjects })

const deleteFile = (path, req, res) => {
    fs.unlink(path, (err) => {
        if (err) {
            res.status(404).send({'message': err});
        } else {
            res.send({path: req.file.path, name: req.file.filename})
        }
    });
}

router.post('/book/upload', uploadBooks.single('file'), function(req, res) {
    res.send({path: req.file.path.replace('public',''), name: req.file.filename})
});

router.post('/post/upload', uploadPosts.single('file'), function(req, res, next) {
    // res.send({path: req.file.path.replace('public',''), name: req.file.filename})
    console.log(req.file)
    res.send({})
});

router.post('/project/upload', uploadProjects.single('file'), function(req, res, next) {
    res.send({path: req.file.path.replace('public',''), name: req.file.filename})
});

router.put('/book/upload', uploadPosts.single('file'), function(req, res) {
    const originalPath = req.body.originalPath;
    if (originalPath) {
        fs.unlink(originalPath, () => {});
        res.send({path: req.file.path.replace('public',''), name: req.file.filename})
    } else {
        res.status(404).send({'message': 'Please send original file to be replaced.'})
    }
});

router.put('/post/upload', uploadPosts.single('file'), function(req, res) {
    const originalPath = req.body.originalPath;
    if (originalPath) {
        fs.unlink(originalPath);
        res.send({path: req.file.path.replace('public',''), name: req.file.filename})
    } else {
        res.status(404).send({'message': 'Please send original file to be replaced.'})
    }
});

router.put('/project/upload', uploadProjects.single('file'), function(req, res) {
    const originalPath = req.body.originalPath;
    if (originalPath) {
        fs.unlink(originalPath);
        res.send({path: req.file.path.replace('public',''), name: req.file.filename})
    } else {
        res.status(404).send({'message': 'Please send original file to be replaced.'})
    }
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

router.get('/instagram', function(req, res) {
    var key = process.env.INSTAGRAM_ACCESS;
    var options = {
        uri: `https://api.instagram.com/v1/users/self/media/recent/?access_token=${key}`,
        method: 'GET'
    }

    request(options, function (err, result, body) {
      if (err) {
        res.send(err);
        return
      }
      res.send(result.body);
    })
});

module.exports = router;