const express = require('express');
const router = express.Router();
const request = require('request');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/mailchimp', function(req, res) {
    var username = 'user'
    var password = 'edb30ff6e207bb68b6c25fccca8e723b-us14'
    var options = {
        uri: 'https://us14.api.mailchimp.com/3.0/lists/b762b0fa4f/members',
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
            'Authorization': 'brookeclonts edb30ff6e207bb68b6c25fccca8e723b-us14',
            'Content-Type': 'application/json'
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