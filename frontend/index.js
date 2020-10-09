require('./TwitterScripts');
require('./FacebookScripts');

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
