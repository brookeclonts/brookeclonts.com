const express = require('express');
const router = express.Router();
const request = require('request');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/mailchimp', function(req, res) {
    var username = 'user'
    var password = 'c8a050996a47d859d87a198db8cb3cba-us14'
    var options = {
        uri: 'https://us14.api.mailchimp.com/3.0/lists/b762b0fa4f/members',
        method: 'POST',
        json: {
            "email_address": req.body.email,
            "status": "subscribed",
            "FNAME": req.body.fName,
            "LNAME": req.body.lName
        },
        headers: {
            'Authorization': username + ' ' + password,
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