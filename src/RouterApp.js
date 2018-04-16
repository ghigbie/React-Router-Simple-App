import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './RouterApp.css';

import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';
import PostItem from './components/PostItem/PostItem';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <header>
          <nav className="navbar navbar-dark bg-dark">
            <NavLink className="nav-item nav-link"
                     to="/"
                     activeStyle={{color:'red'}}>Home</NavLink><br/>
            <NavLink className="nav-item nav-link"
                     to="/posts"
                     activeStyle={{color:'red'}}>Posts</NavLink><br/>
            <NavLink className="nav-item nav-link"
                     to={{
                        pathname: '/profile',
                        hash: '#francis',
                        search: '?profile=true'}}
                     activeStyle={{color:'red'}}>Profile</NavLink><br/>
            </nav>
            <hr/>
          </header>
            <Switch>
              <Route path="/posts/:id/:username" component={PostItem} /> 
              <Route path="/posts" exact component={Posts} />
              <Route path="/profile" component={Profile} />
              <Route path="/" exact component={Home} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
