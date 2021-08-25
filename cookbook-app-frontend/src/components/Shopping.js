import ShoppingItem from './ShoppingItem';
import React, { useState, useEffect } from 'react';

function Shopping({ currentUser, setCurrentUser }) {
  const[shoppingItemData, setShoppingItemData] = useState([]);

  useEffect(() => {
    // fetch(`${process.env.REACT_APP_API_URL}/shopping_items`)
    fetch(`http://localhost:9292/shopping_items`)
    .then(res=>res.json())
    .then(setShoppingItemData)
  },[]);

  const renderFruits = shoppingItemData.map(shoppingItem => {
    if (shoppingItem.category === 'fruit') {
      return <ShoppingItem 
      shoppingItem={shoppingItem}
      key={shoppingItem.id}
      currentUser={currentUser}
    />
    }
  });

  const renderVegetables = shoppingItemData.map(shoppingItem => {
    if (shoppingItem.category === 'vegetable') {
      return <ShoppingItem 
      shoppingItem={shoppingItem}
      key={shoppingItem.id}
      currentUser={currentUser}
    />
    }
  });

  const renderSpices = shoppingItemData.map(shoppingItem => {
    if (shoppingItem.category === 'spice') {
      return <ShoppingItem 
      shoppingItem={shoppingItem}
      key={shoppingItem.id}
      currentUser={currentUser}
    />
    }
  });

  const renderMisc = shoppingItemData.map(shoppingItem => {
    if (shoppingItem.category === 'misc') {
      return <ShoppingItem 
      shoppingItem={shoppingItem}
      key={shoppingItem.id}
      currentUser={currentUser}
    />
    }
  });

  return (
    <div>
      <h1>Shopping</h1>
      <p>{shoppingItemData.length} Results</p>
      {/* <div className="sort-container">
        <span>Sort By:</span>
        <button>Default</button>
        <button>A-Z</button>
      </div> */}
      <h3>Fruits</h3>
      {renderFruits}

      <h3>Vegetables</h3>
      {renderVegetables}
      
      <h3>Spices</h3>
      {renderSpices}
      
      <h3>Misc</h3>
      {renderMisc}
    </div>
  )
}

export default Shopping;