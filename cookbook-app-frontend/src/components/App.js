import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Shopping from './Shopping';
import GroceryList from './GroceryList';

function App() {
  const [currentUser, setCurrentUser] = useState(4);
  const [groceryListData, setGroceryListData] = useState([]);
  const [inventoryListData, setInventoryListData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/all_items`)
    .then(res=>res.json())
    .then(setGroceryListData)
  },[]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/inventory`)
    .then(res=>res.json())
    .then(setInventoryListData)
  },[]);
  
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
            groceryListData={groceryListData}
            setGroceryListData={setGroceryListData}
          />
        </Route>
        <Route path="/grocery-list">
          <GroceryList 
            groceryListData={groceryListData}
            setGroceryListData={setGroceryListData}
            inventoryListData={inventoryListData}
            setInventoryListData={setInventoryListData}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
