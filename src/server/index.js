'use strict';
import express from "express"
import "isomorphic-fetch" // gives the ability to use fetch in server-loaded react code
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var env = process.env.NODE_ENV || 'development';
if (env === 'test' || env == 'development') {
  import('./config/config');
}
require('./routes/api/cors');
var books = require('./routes/api/book');
var blogposts = require('./routes/api/post');
var projects = require('./routes/api/project');
var users = require('./routes/api/user');
var external = require('./routes/api/external');
var port = process.env.PORT || 3000;

const app = express()

app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use('/api/users', users);
app.use('/api/books', books);
app.use('/api/projects', projects);
app.use('/api/blogposts', blogposts);
app.use('/api/external', external);
app.use('/favicon.ico', express.static('src/browser/Icons/favicon.ico'));

app.use(express.static("public"))
app.get("*", (req, res, next) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans|Medula+One">
          <title>Brooke Clonts Author Website</title>
            <script src="/bundle.js" defer></script>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: sans-serif;
            }
            </style>
        </head>
  
        <body>
          <div id="app"/>
        </body>
      </html>
    `
  )
});

app.listen(port, () => {
  console.log(`Server is listening on port: 3000`)
})