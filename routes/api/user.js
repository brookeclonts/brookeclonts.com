const express = require('express');
const request = require('request');
const mongoose = require('../../db/mongoose');
const User = require('../../models/user');
const router = express.Router();
const bcrypt   = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', function(req, res) {
	const email = req.body.email;
  const password = req.body.password;
  
  if (email && password) {
    User.findOne({ 'email' :  email }, function(err, user) {
      if (err) {
        return res.status(401).send({
          'success': false,
          'message': `Oops! ${err}`
        });
      }

      // if no user is found, return the message
      if (!user) {
        return res.status(401).send({
          'success': false,
          'message': 'Oops! User not found.'
        });
      }

      // if the user is found but the password is wrong
      if (!user.validPassword(password)) {
        return res.status(400).send({
          'success': false,
          'message': 'Oops! Wrong password.'
        });
      }

      const token = jwt.sign({name: user.name}, process.env.SECRET, { expiresIn: 60*60*24});
      res.status(200).send({
        'success': true,
        'message': 'Success!',
        token 
      });
    });
  } else {
    return res.status(401).send({
        'success': false,
        'message': 'Oops! I did not get that.'
      });
  }
});

// router.post('/signup', function(req, res) {
// 	const email = req.body.email;
//   const password = req.body.password;
//   if (email && password ) {
//       bcrypt.hash(password, 8, function(err, hash) {
//         if (err) {
//           return res.status(400).send({'message': err});
//         } else {
//           const user = new User({email: email, password: hash});
//           user.save(function(err) {
//             if (err) {
//               return res.status(400).send({'message': `Sorry! Try again!`});
//             }
//             return res.status(200).send({'message': `Successfully added to database!`});
//           })
//         }
//       });  
//   } else {
//     res.status(400).send({'message': `Sorry! Your email and password appear to be invalid!`});
//   }
// });

module.exports = router;
