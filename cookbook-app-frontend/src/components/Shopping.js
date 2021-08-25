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
    <div className="section-container">
      <h1>Shopping</h1>
      <p>Add items to your grocery list for your next visit.</p>
      <div className="main-shopping-container">
        <p>{shoppingItemData.length} Results</p>
        {/* <div className="sort-container">
          <span>Sort By:</span>
          <button>Default</button>
          <button>A-Z</button>
        </div> */}
        <h3 className="shopping-category-header">Fruits</h3>
        {renderFruits}

        <h3 className="shopping-category-header">Vegetables</h3>
        {renderVegetables}
        
        <h3 className="shopping-category-header">Spices</h3>
        {renderSpices}
        
        <h3 className="shopping-category-header">Misc</h3>
        {renderMisc}
      </div>
      
    </div>
  )
}

export default Shopping;