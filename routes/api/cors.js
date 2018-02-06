const express = require('express');
const router = express.Router();

// CORS
var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    var cors = require('cors');
    var corsOptions = {
        origin: '*',
        credentials: true
    }
    router.all('*', cors(corsOptions));
}