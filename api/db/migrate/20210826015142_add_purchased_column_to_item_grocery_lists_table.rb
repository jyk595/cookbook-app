class AddPurchasedColumnToItemGroceryListsTable < ActiveRecord::Migration[6.1]
  def change
    add_column :item_grocery_lists, :purchased, :boolean, default: false, null: false
  end
end
