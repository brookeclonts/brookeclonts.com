/* global window */
import React, { Component } from 'react';
import { object } from 'prop-types';
import { Route, Switch } from 'react-router-dom'
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
import { BlogPostForm } from './AdminPortal/forms/BlogPostForm';
import { ProjectForm } from './AdminPortal/forms/ProjectForm';
import { BookForm } from './AdminPortal/forms/BookForm';

class App extends Component {
  static contextTypes = {
    router: object
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      httpMessage : '',
      showMessage: false,
      token: ''
    }
  }

  token;

  closeMessage = () => {
    this.setState({showMessage: false});
  }

  openMessage = msg => {
    this.setState({
      httpMessage: msg,
      showMessage: true,
    });
  }

  updateToken = (token) => { 
    this.token = token;
    if (token) {
      localStorage.setItem('brookeclonts-token', token);
    }
  }

  componentDidMount () {
    const token = window.localStorage.getItem('brookeclonts-token');
    if (token) {
      this.token = token;
    }
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
            <Route path="/post/:title" render={location => (<BlogPost location={location} openMessage={this.openMessage}/>)}/>
            <Route path="/login" exact render={() => (<Login openMessage={this.openMessage} updateToken={this.updateToken}/>)}/>
            <Route path="/admin-portal/blog/upload" render={location => (<BlogPostForm token={this.token} openMessage={this.openMessage} location={location}/>)}/>
            <Route path="/admin-portal/blog/edit/:id" render={location => (<BlogPostForm token={this.token} openMessage={this.openMessage} location={location}/>)}/>
            <Route path="/admin-portal/books/upload" render={location => (<BookForm token={this.token} openMessage={this.openMessage} location={location}/>)}/>
            <Route path="/admin-portal/books/edit/:id" render={location => (<BookForm token={this.token} openMessage={this.openMessage} location={location}/>)} />
            <Route path="/admin-portal/projects/upload" render={location => (<ProjectForm token={this.token} openMessage={this.openMessage} location={location}/>)}/>
            <Route path="/admin-portal/projects/edit/:id" render={location => (<ProjectForm token={this.token} openMessage={this.openMessage}/>)} />
            <Route path="/admin-portal" render={location => (<AdminPortal token={this.token} openMessage={this.openMessage}/>)}/>
            <Route component={WrongPage}/>
          </Switch> 
          <Footer openMessage={this.openMessage}/>
        </div>
    );
  }
}

export default App;