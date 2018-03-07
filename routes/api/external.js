const express = require('express');
const request = require('request');
const router = express.Router();
const multer = require('multer');
const mime = require('mime');
const fs = require('fs');

const storageBooks = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/images/books')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + mime.getExtension(file.mimetype)) 
    }
});
const storagePosts = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/images/blog')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + mime.getExtension(file.mimetype))
    }
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
    res.send({path: req.file.path, name: req.file.filename})
});

router.post('/post/upload', uploadPosts.single('file'), function(req, res, next) {
    res.send({path: req.file.path, name: req.file.filename})
});

router.post('/project/upload', uploadProjects.single('file'), function(req, res, next) {
    res.send({path: req.file.path, name: req.file.filename})
});

router.patch('/book/upload', uploadBooks.single('file'), function(req, res) {
    let originalPath = req.body.originalPath;
    if (originalPath) {
        deleteFile(originalPath, req, res);
    } else {
        res.status(404).send({'message': 'Please send original file to be replaced.'})
    }
});

router.patch('/post/upload', uploadPosts.single('file'), function(req, res) {
    let originalPath = req.body.originalPath;
    if (originalPath) {
        deleteFile(originalPath, req, res);
    } else {
        res.status(404).send({'message': 'Please send original file to be replaced.'})
    }
});

router.patch('/project/upload', uploadProjects.single('file'), function(req, res) {
    let originalPath = req.body.originalPath;
    if (originalPath) {
        deleteFile(originalPath, req, res);
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