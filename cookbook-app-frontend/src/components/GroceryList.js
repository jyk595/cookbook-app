import GroceryListItem from './GroceryListItem';

function GroceryList({ groceryListData, setGroceryListData, inventoryListData, setInventoryListData, currentUser }) {

  // Track the number of items in the grocery list to display
  function listQuantity (item) {
    return groceryListData.filter(groceryItem => groceryItem.product_name === item).length
  }

  // Track the total amount at the bottom of the grocery list
  let totalTracker = 0;

  groceryListData.map(item=> {
    totalTracker += item.price
  });

  // Takes all the grocery items and filters by what's in the item-grocery-lists
  const filteredTotalList = groceryListData.filter(({ id }) => inventoryListData.map(a => a.item_id).includes(id));

  // Render the items in the checklist
  const renderChecklist = filteredTotalList.map(checklistItem => {
    return <GroceryListItem 
      checklistItem={checklistItem} 
      listQuantity={listQuantity}
      groceryListData={groceryListData}
      setGroceryListData={setGroceryListData}
      inventoryListData={inventoryListData}
      setInventoryListData={setInventoryListData}
      currentUser={currentUser}
      key={checklistItem.id} 
    />    
  })

  return (
    <div className="shopping-grocery-list-container">
      <h1>Grocery List</h1>
      {renderChecklist}
      <div className="total-p">
        <p>Total: ${(Math.round(totalTracker*100)/100).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default GroceryList;