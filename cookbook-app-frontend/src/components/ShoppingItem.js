function ShoppingItem({ shoppingItem, currentUser }) {
  const { id, product_name, category, price, quantity } = shoppingItem;

  function shoppingItemClick(clickData) {
    console.log(clickData.target.value)

    // fetch(`${process.env.REACT_APP_API_URL}/item_grocery_lists`, {
    fetch(`http://localhost:9292/shopping_item_click`, {
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
      <p className="shopping-item-button-name">{product_name}</p>
      <p className={quantity > 0 ? "shopping-item-button-stock stock-green" : "shopping-item-button-stock stock-red"}>{quantity > 0 ? "In Stock" : "Out of Stock"}</p>
    </button>
  )
}

export default ShoppingItem;