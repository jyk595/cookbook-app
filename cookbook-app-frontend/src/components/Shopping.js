import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingItem from './ShoppingItem';

function Shopping({ currentUser, setCurrentUser, groceryListData, setGroceryListData }) {
  const[shoppingItemData, setShoppingItemData] = useState([]);
  const[searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/shopping_items`)
    .then(res=>res.json())
    .then(setShoppingItemData)
  },[]);

  function handleChange(e) {
    setSearchTerm(()=>e.target.value)
  }

  const searchFilter = shoppingItemData.filter(item => {
    // console.log(item.product_name.toLowerCase())
    if (searchTerm === "") {
      return true
    } else if (searchTerm.toLowerCase().includes(searchTerm.toLowerCase()) === item.product_name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true
    } else {
      return false
    }
  });

  const renderFruits = searchFilter.map(shoppingItem => {
    if (shoppingItem.category === 'fruit') {
      return <ShoppingItem 
      shoppingItem={shoppingItem}
      groceryListData={groceryListData}
      setGroceryListData={setGroceryListData}
      key={shoppingItem.id}
      currentUser={currentUser}
    />
    }
  });

  const renderVegetables = searchFilter.map(shoppingItem => {
    if (shoppingItem.category === 'vegetable') {
      return <ShoppingItem 
      shoppingItem={shoppingItem}
      groceryListData={groceryListData}
      setGroceryListData={setGroceryListData}
      key={shoppingItem.id}
      currentUser={currentUser}
    />
    }
  });

  const renderSpices = searchFilter.map(shoppingItem => {
    if (shoppingItem.category === 'spice') {
      return <ShoppingItem 
      shoppingItem={shoppingItem}
      groceryListData={groceryListData}
      setGroceryListData={setGroceryListData}
      key={shoppingItem.id}
      currentUser={currentUser}
    />
    }
  });

  const renderMisc = searchFilter.map(shoppingItem => {
    if (shoppingItem.category === 'misc') {
      return <ShoppingItem 
      shoppingItem={shoppingItem}
      groceryListData={groceryListData}
      setGroceryListData={setGroceryListData}
      key={shoppingItem.id}
      currentUser={currentUser}
    />
    }
  });

  return (
    <div className="shopping-page-container">
      <form className="search-form-container">
        <span>Search: </span><input type="type" name="search-input" placeholder="ie: Watermelons, cherry tomatoes, ..." onChange = {handleChange} />
      </form>
      <div className="main-shopping-container">
        <p className="results-number">{searchFilter.length} Results</p>
        {/* <div className="sort-container">
          <span>Sort By:</span>
          <button>Default</button>
          <button>A-Z</button>
        </div> */}

        <Link to="/grocery-list">
          <div className="grocery-list-link">
            <span><img src="https://www.pngkit.com/png/full/44-448997_whiotechecklist-icon-checklist-icon-png-list-icon-icon.png" alt="checklist-icon" /></span>Grocery List ({groceryListData.length})
          </div>
        </Link>
        
        <h3 className="shopping-category-header">Fruits</h3>
        <div className="shopping-category-container">
          {renderFruits}
        </div>

        <h3 className="shopping-category-header">Vegetables</h3>
        <div className="shopping-category-container">
          {renderVegetables}
        </div>
        
        <h3 className="shopping-category-header">Spices</h3>
        <div className="shopping-category-container">
          {renderSpices}
        </div>
        
        <h3 className="shopping-category-header">Misc</h3>
        <div className="shopping-category-container">
          {renderMisc}
        </div>
      </div>
    </div>
  )
}

export default Shopping;