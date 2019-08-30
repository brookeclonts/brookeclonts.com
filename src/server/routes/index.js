var express = require('express');
var router = express.Router();

function RemoveLastDirectoryPartOf(the_url)
{
    var the_arr = the_url.split('/');
    the_arr.pop();
    return( the_arr.join('/') );
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(RemoveLastDirectoryPartOf(__dirname) + '/client/build/index.html');
});

module.exports = router;
