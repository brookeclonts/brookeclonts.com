require('./TwitterScripts');
require('./FacebookScripts');

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
environment.plugins.delete("UglifyJs");
environment.plugins.set("UglifyJs", new UglifyJSPlugin());

import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";

const jsx = (
  <Router><App /></Router>
)

hydrate(
  jsx,
  document.getElementById('app')
);
