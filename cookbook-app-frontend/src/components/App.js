import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Shopping from './Shopping';
import GroceryList from './GroceryList';

function App() {
  const [currentUser, setCurrentUser] = useState(1);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shopping">
          <Shopping 
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
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
