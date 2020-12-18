require('./TwitterScripts');
require('./FacebookScripts');

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import 'rbx/index.css';

function renderApp(AppToRender) {
  render(<Router><AppToRender /></Router>, document.getElementById('app'));
}

// Render App
renderApp(App);
