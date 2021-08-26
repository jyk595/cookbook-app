import React, { useState } from 'react';
import GroceryListItem from './GroceryListItem';

function GroceryList({ groceryListData, setGroceryListData }) {
  let totalTracker = 0;

  function listQuantity (item) {
    return groceryListData.filter(groceryItem => groceryItem.product_name === item).length
  }

  const totalMath = groceryListData.map(item=> {
    totalTracker += item.price
  })


  const renderChecklist = groceryListData.map(checklistItem => {
    return <GroceryListItem 
      checklistItem={checklistItem} 
      listQuantity={listQuantity}
      groceryListData={groceryListData}
      setGroceryListData={setGroceryListData}
      key={checklistItem.id} 
    />    
  })

  return (
    <div className="shopping-grocery-list-container">
      <h1>Grocery List</h1>
      {renderChecklist}
      <div className="total-p">
        <p>Total: ${Math.round(totalTracker*100)/100}</p>
      </div>
    </div>
  )
}

export default GroceryList;