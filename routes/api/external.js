const express = require('express');
const request = require('request');
const router = express.Router();

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