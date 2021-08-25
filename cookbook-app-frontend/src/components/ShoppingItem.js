function ShoppingItem({ shoppingItem, groceryListData, setGroceryListData, currentUser }) {
  const { id, product_name, quantity } = shoppingItem;

  function shoppingItemClick(clickData) {    
    const groceryListNames = groceryListData.map(item => item.product_name)
    if (groceryListNames.indexOf(clickData.target.value) > -1) {
      console.log("truth")
    } else {
      const newArr = [
        shoppingItem,
        ...groceryListData
      ]
      setGroceryListData(newArr)
    }

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
    <button className="shopping-item-button" value={product_name} onClick={shoppingItemClick}>
      <p className={quantity > 0 ? "shopping-item-button-name" : "shopping-item-button-name stock-out"} name="product_id">{product_name}</p>
      <p className={quantity > 0 ? "shopping-item-button-stock stock-green" : "shopping-item-button-stock stock-red"}>{quantity > 0 ? "In Stock" : "Out of Stock"}</p>
    </button>
  )
}

export default ShoppingItem;