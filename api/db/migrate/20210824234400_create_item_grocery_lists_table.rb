class CreateItemGroceryListsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :item_grocery_lists do |t|
      t.belongs_to :user,foreign_key: :true
      t.belongs_to :item,foreign_key: :true
    end
  end
end
