require('./server/config/config');

// Get dependencies
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// const ExpressReactRouter = require('express-react-router');

// Get our API routes
const api = require('./server/routes/api');

const compression = require('compression')
const app = express();

// compression
// app.use(compression());

// caching
// app.use('production', function(){
//   var oneYear = 31557600000;
//   app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
//   app.use(express.errorHandler());
// });

// Parsers for POST data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// Setup logger
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// // serve static assets normally
// app.use(express.static(__dirname + '/build/static'))

// // handle every other route with index.html, which will contain
// // a script tag to your application's JavaScript file(s).
// app.get('*', function (request, response){
//   response.sendFile(__dirname + '/build/index.html')
// })

// Set our api routes
// app.use('/api', api);

// app.get('/robots.txt', function (req, res) {
//     res.type('text/plain');
//     res.send("User-agent: *\nDisallow: /");
// });
// 
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3001';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
module.exports = app;