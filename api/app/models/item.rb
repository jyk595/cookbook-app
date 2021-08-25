class Item < ActiveRecord::Base
  has_many :item_grocery_lists
  has_many :users, through: :item_grocery_lists
end