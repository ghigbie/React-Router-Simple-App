import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './RouterApp.css';

import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">Home</Link><br/>
            <Link to="/posts">Posts</Link><br/>
            <Link to="/profile">Profile</Link><br/>
          </header>
          <Route path="/" exact component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
