var express = require('express');
var path = require('path');
const http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var env = process.env.NODE_ENV || 'development';
if (env === 'test' || env == 'development') {
  require('./config/config');
}

var index = require('./routes/index');
require('./routes/api/cors');
var books = require('./routes/api/book');
var blogposts = require('./routes/api/post');
var projects = require('./routes/api/project');
var users = require('./routes/api/user');
var external = require('./routes/api/external');

var app = express();

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static('public'));

app.use('/api/projects', projects);
app.use('/api/books', books);
app.use('/api/blogposts', blogposts);
app.use('/api/users', users);
app.use('/api/external', external);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
