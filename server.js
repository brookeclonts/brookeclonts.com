// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var request = require('request');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

app.get('/mailchimp',function(res,req){
    let auth = 'Basic ' + btoa('user:edb30ff6e207bb68b6c25fccca8e723b-us14');
    let url = 'https://us14.api.mailchimp.com/3.0/lists/b762b0fa4f/members';

    request(
      {
          url : url,
          headers : {
              "Authorization" : auth,
              'Content-Type' : 'application/json'
          }
      },
      function (error, response, body) {
          if (error) {
            console.log(error);
            return error;
          }
          console.log(response);
          return response;
      }
  );
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));