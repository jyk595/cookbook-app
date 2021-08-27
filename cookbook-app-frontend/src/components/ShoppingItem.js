function ShoppingItem({ shoppingItem, groceryListData, setGroceryListData, currentUser, inventoryListData, setInventoryListData }) {
  const { id, product_name, price, quantity } = shoppingItem;

  // onClick when user clicks the item from the shopping list, it adds to the grocery list
  function shoppingItemClick(clickData) {    
    const newGroceryList = {
      user_id: currentUser,
      item_id: id,
      purchased: false 
    }

    const addedGroceryList = [
      newGroceryList,
      ...groceryListData
    ]

    setGroceryListData(addedGroceryList)

    const newInventoryList = {
      user_id: currentUser,
      item_id: id,
      purchased: false 
    }

    const addedInventoryList = [
      newInventoryList,
      ...inventoryListData
    ]

    setInventoryListData(addedInventoryList)

    fetch(`${process.env.REACT_APP_API_URL}/shopping_item_click`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: currentUser,
        item_id: id
      })
    })
  }

  return (
    <button className={quantity > 0 ? "shopping-item-button" : "shopping-item-button stock-out"} value={product_name} onClick={shoppingItemClick}>
      <p className="shopping-item-button-name" name="product_id">{product_name}</p>
      <p className="shopping-item-button-price">${(Math.round(price*100)/100).toFixed(2)}</p>
      <p className={quantity > 0 ? "shopping-item-button-stock stock-green" : "shopping-item-button-stock stock-red"}>{quantity > 0 ? "In Stock" : "Out of Stock"}</p>
    </button>
  )
}

export default ShoppingItem;