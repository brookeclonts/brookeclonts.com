import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';


render((
  <Router>
    <App info={window.__preloadedState__}/>
  </Router>
), document.getElementById('root')); 