class CreateItemsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :product_name
      t.string :category
      t.float :price
      t.integer :quantity
    end
  end
end
