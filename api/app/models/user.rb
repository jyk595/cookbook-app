class User < ActiveRecord::Base
  has_many :item_grocery_lists
  has_many :items, through: :item_grocery_lists
end