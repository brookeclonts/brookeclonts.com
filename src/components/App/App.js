import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import Book from '../Book/Book';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default function App(props) {
  const books = props; 
  const mediaQueryBreakpoints = {
    tab: '768px',
    mob: '300px',
    desktop: '1200px',
  }
  const appColors = {
    green: '#B2B8B4',
    blueGray: '#484B5A',
    pink: '#F5D0D7',
    darkPink: '#c4a6ac',
    white: '#FEFFFF',
    medGray: '#5D5C62',
    gold: '#BAA262',
    trueWhite: '#ffffff'
  }
  return (
    <Router>
      <div>
        <Header breakpoints={mediaQueryBreakpoints} colors={appColors}/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/book/:id" render={location => (<Book books={books} location={location}/>)}/>
        </Switch>
        <Footer breakpoints={mediaQueryBreakpoints} colors={appColors}/>
      </div>
    </Router> 
  )
}
