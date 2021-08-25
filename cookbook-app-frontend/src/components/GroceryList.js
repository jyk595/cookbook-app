import React, { useState } from 'react';
import GroceryListItem from './GroceryListItem';

function GroceryList({ groceryListData, setGroceryListData }) {
  const [totalTracker, setTotalTracker] = useState(0);

  function listQuantity (item) {
    return groceryListData.filter(groceryItem => groceryItem.product_name === item).length
  }

  const renderChecklist = groceryListData.map(checklistItem => {
    // setTotalTracker(()=>totalTracker + checklistItem.price);
    
    return <GroceryListItem 
      checklistItem={checklistItem} 
      listQuantity={listQuantity}
      groceryListData={groceryListData}
      setGroceryListData={setGroceryListData}
      totalTracker={totalTracker}
      setTotalTracker={setTotalTracker}
      key={checklistItem.id} 
    />    
  })

  return (
    <div className="shopping-grocery-list-container">
      <h1>Grocery List</h1>
      {renderChecklist}
      <div className="total-p">
        <p>Total: ${totalTracker}</p>
      </div>
    </div>
  )
}

export default GroceryList;