const express = require('express');
const request = require('request');
const router = express.Router();
const multer = require('multer');
const mime = require('mime');
const fs = require('fs');
var AWS = require('aws-sdk');
const multerS3 = require('multer-s3');

var accessKeyId =  process.env.AWS_ACCESS_KEY || "xxxxxx";
var secretAccessKey = process.env.AWS_SECRET_KEY || "+xxxxxx+B+xxxxxxx";
var awsBucket = process.env.AWS_BUCKET || "brookeclonts";

AWS.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: 'us-west-1',
});

const s3 = new AWS.S3();

const uploadPosts = multer({
    storage: multerS3({
        s3,
        bucket: awsBucket,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, `blog/${Date.now()}.${mime.getExtension(file.mimetype)}`);
        }
    })
});

const uploadBooks = multer({
    storage: multerS3({
        s3,
        bucket: awsBucket,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, `books/${Date.now()}.${mime.getExtension(file.mimetype)}`);
        }
    })
});

const uploadProjects = multer({
    storage: multerS3({
        s3,
        bucket: awsBucket,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, `projects/${Date.now()}.${mime.getExtension(file.mimetype)}`);
        }
    })
});

const deleteFile = (path, req, res) => {
    const params = {  Key: path };
    // TODO: this is not working! breaking here
    s3.deleteObject(params, function(err, data) {
        if (err) { return res.status(404).send({'message': err})}
        console.log('data', data)
    });
}

router.post('/book/upload', uploadBooks.single('file'), function(req, res) {
    res.send({path: req.file.key})
});

router.post('/post/upload', uploadPosts.single('file'), function(req, res, next) {
    res.send({path: req.file.key})
});

router.post('/project/upload', uploadProjects.single('file'), function(req, res, next) {
    res.send({path: req.file.key})
});

router.put('/book/upload', uploadPosts.single('file'), function(req, res) {
    const originalPath = req.body.originalPath;
    if (originalPath) {
        deleteFile(originalPath, req, res);
        // res.send({path: req.file.key})
    } else {
        res.status(404).send({'message': 'Please send original file to be replaced.'})
    }
});

router.put('/post/upload', uploadPosts.single('file'), function(req, res) {
    const originalPath = req.body.originalPath;
    if (originalPath) {
        fs.unlink(originalPath);
        res.send({path: req.file.key})
    } else {
        res.status(404).send({'message': 'Please send original file to be replaced.'})
    }
});

router.put('/project/upload', uploadProjects.single('file'), function(req, res) {
    const originalPath = req.body.originalPath;
    if (originalPath) {
        fs.unlink(originalPath);
        res.send({path: req.file.key})
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