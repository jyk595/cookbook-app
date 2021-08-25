import React, { useState, useEffect } from 'react';
import GroceryListItem from './GroceryListItem';

function GroceryList() {
  const [groceryListData, setGroceryListData] = useState([]);

  useEffect(() => {
    // fetch(`${process.env.REACT_APP_API_URL}/shopping_items`)
    fetch(`http://localhost:9292/grocery_list`)
    .then(res=>res.json())
    .then(setGroceryListData)
  },[]);

  const renderChecklist = groceryListData.map(checklistItem => {
    return <GroceryListItem checklistItem={checklistItem} key={checklistItem.id} />
  })

  return (
    <div>
      <h1>This is the grocery list page</h1>
      {renderChecklist}  
    </div>
  )
}

export default GroceryList;