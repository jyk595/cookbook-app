import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Shopping from './Shopping';
import GroceryList from './GroceryList';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shopping">
          <Shopping />
        </Route>
        <Route path="/grocery-list">
          <GroceryList />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
