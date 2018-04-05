import React, { Component } from 'react';
import {} from 'react-router-dom';
import './RouterApp.css';

import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="RouterApp">
        <Home />
        <Posts />
        <Profile />
      </div>
    );
  }
}

export default App;
