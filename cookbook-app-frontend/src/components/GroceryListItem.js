function GroceryListItem({ checklistItem, listQuantity, groceryListData, setGroceryListData, inventoryListData, setInventoryListData, currentUser }) {   
  const { id, product_name, price } = checklistItem;

  // onClick action to delete grocery list items when trash can icon is clicked
  const clickDeleteGroceryItem = async (itemId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setGroceryListData(groceryListData.filter(listItem => {
        return listItem.id !== itemId
      }))

      const res = await fetch(`${process.env.REACT_APP_API_URL}/item_grocery_list/${id}`, {
        method: 'DELETE'
      })
    }
  }

  // Calculation for inventory count
  const inventoryCount = inventoryListData.map(a=>a.item_id).filter(itemId => itemId === id).length

  // See if checkbox should be checked or not
  let checkboxCheck = inventoryListData.find(item => item.item_id === id).purchased

  // onClick action when the checkbox is checked  
  function checkGroceryItem() {
    const res = fetch(`${process.env.REACT_APP_API_URL}/item_list_patch/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(a=>{
      setInventoryListData(a)
    })
  }

  // onClick for deleting an item on the grocery list
  const inventoryLessClick = async (id) => {
    const removeId = inventoryListData.find(listItem => {
      if (listItem.item_id === id) {
        return listItem.item_id
      } else {
        return null
      }
    });


    const filteredArr = inventoryListData.filter(listItem => {
      if (listItem.id === removeId.id) {
        return false
      } else {
        return true
      }
    })

    setInventoryListData(filteredArr)

    const res = await fetch(`${process.env.REACT_APP_API_URL}/item_grocery_delete/${id}`, {
      method: 'DELETE'
    })
  }

  // onClick for adding an item on the grocery list
  function inventoryMoreClick (clickData) {

    const newGroceryList = {
      user_id: currentUser,
      item_id: id,
      purchased: false 
    }

    const addedGroceryList = [
      newGroceryList,
      ...inventoryListData
    ]

    setInventoryListData(addedGroceryList)

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
    <div className={checkboxCheck ? "checklist-container checklist-checked" : "checklist-container"}>
      <input type="checkbox" id={product_name} value={product_name} name="checklistItem" className="checklist-item-checkbox" checked={checkboxCheck ? "checked" : ""} onChange={checkGroceryItem} />
      <label for={product_name} className="shopping-item-button-name">{product_name}</label>
      <div className="checklist-item-info">
        <button className="checklist-delete-button" onClick={() => clickDeleteGroceryItem(id)}>
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
        </button> 
        <div className="inventory-change-container">
          <button className="inventory-button" onClick={() => inventoryLessClick(id)}>-</button>
          <p>{inventoryCount}</p>
          <button className="inventory-button" onClick={() => inventoryMoreClick(id)}>+</button>
        </div>
        <p className="checklist-item-price">${(Math.round(price*100*inventoryCount)/100).toFixed(2)}</p>
      </div>
    </div>
    
  )
}

export default GroceryListItem;