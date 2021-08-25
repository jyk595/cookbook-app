function GroceryListItem({ checklistItem }) {  
  return (
    <div className="checklist-container">
      <input type="checkbox" id={checklistItem} value={checklistItem} name="checklistItem" />
      <label for={checklistItem}>{checklistItem}</label>
    </div>
    
  )
}

export default GroceryListItem;