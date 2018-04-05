import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './RouterApp.css';

import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';
import PostItem from './components/PostItem/PostItem';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">Home</Link><br/>
            <Link to="/posts">Posts</Link><br/>
            <Link to={{
              pathname: '/profile',
              hash: '#francis',
              search: '?profile=true'}}
              >Profile</Link>
              <br/>
            <hr/>
          </header>
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/:id" component={PostItem} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
