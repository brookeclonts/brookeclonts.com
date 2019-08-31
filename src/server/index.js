'use strict';
import express from "express"
import { renderToString } from "react-dom/server"
import App from '../browser/App'
import React from 'react'
import { StaticRouter } from "react-router-dom"
import "isomorphic-fetch" // gives the ability to use fetch in server-loaded react code
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var env = process.env.NODE_ENV || 'development';
if (env === 'test' || env == 'development') {
  require('./config/config');
}
require('./routes/api/cors');
var books = require('./routes/api/book');
var blogposts = require('./routes/api/post');
var projects = require('./routes/api/project');
var users = require('./routes/api/user');
var external = require('./routes/api/external');

const app = express()
//merge app.js into this file!!!!!!!!!!!!!!!!!!!!!!!!!

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'favicon.ico')));
// app.use(favicon(__dirname + 'src/browser/Icons/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());

app.use('/api/projects', projects);
app.use('/api/books', books);
app.use('/api/blogposts', blogposts);
app.use('/api/users', users);
app.use('/api/external', external);


app.get("*", (req, res, next) => {
    const markup = renderToString(
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    )
  
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
              padding: 50px;
              font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
            }
            
            a {
              color: #00B7FF;
            }
          </style>
        </head>
  
        <body>
          <div id="app">
            ${markup}</div>
        </body>
        <script id="facebook-jssdk" src="//connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v2.8"></script>
      </html>
    `
  )
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})