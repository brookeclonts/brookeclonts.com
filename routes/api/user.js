const express = require('express');
const request = require('request');
const mongoose = require('../../db/mongoose');
const User = require('../../models/user');
const router = express.Router();

router.post('/', function(req, res) {
	const email = req.body.email;
  const password = req.body.password;
  
  User.findOne({ 'email' :  email }, function(err, user) {
    if (err) {
      return res.status(401).send({'message': `Oops! ${err}`});
    }

    // if no user is found, return the message
    if (!user) {
      return res.status(401).send({'message': 'Oops! User not found.'});
    }

    // if the user is found but the password is wrong
    if (!user.validPassword(password)) {
      return res.status(400).send({'message': 'Oops! Wrong password.'});
    }

    res.status(200).send(user);
  });
});

module.exports = router;
