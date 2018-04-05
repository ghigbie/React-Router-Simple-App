import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './RouterApp.css';

import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
