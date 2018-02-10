import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
import Book from './Book/Book';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';
import BlogPost from './BlogPost/BlogPost';
import Projects from './Projects/Projects';
import Sitemap from './Sitemap/Sitemap';
import SubscriptionPage from './SubscriptionPage/SubscriptionPage';
import Message from './Message/Message';
import Draw from './Draw/Draw';
import WrongPage from './404/404';
import Login from './Login/Login';
import AdminPortal from './AdminPortal/AdminPortal';

class App extends Component {

  state = {
    httpMessage : '',
    showMessage: false
  }

  closeMessage = () => {
    this.setState({showMessage: false});
  }

  openMessage = msg => {
    this.setState({
      httpMessage: msg,
      showMessage: true,
    });
  }
  
  render() {

    return (
      <div className="App" style={{'overflow': 'hidden'}}>
        <Header/>
        {this.state.showMessage ? (
          <Message message={this.state.httpMessage} onClose={this.closeMessage}/>
        ) : (
          ''
        )}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/books" exact render={location => (<Home location={location}/>)}/>
          <Route path="/about" exact component={About}/>
          <Route path="/landing" exact render={() => (<SubscriptionPage openMessage={this.openMessage}/>)}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/sitemap" exact component={Sitemap}/>
          <Route path="/draw" exact component={Draw}/>
          <Route path="/post/:title" render={location => (<BlogPost location={location}/>)}/>
          <Route path="/login" exact render={() => (<Login openMessage={this.openMessage}/>)}/>
          <Route path="/admin-portal" component={AdminPortal}/>
          <Route component={WrongPage}/>
        </Switch>
        <Footer openMessage={this.openMessage}/>
      </div>
    );
  }
}

export default App;