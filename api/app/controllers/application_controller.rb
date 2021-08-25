class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/shopping_items" do
    # Item.all.sort_by(&:product_name).to_json
    Item.all.to_json
  end

  post "/shopping_item_click" do
    shopping_item_create = ItemGroceryList.create(
	    user_id: params[:user_id],
      item_id: params[:item_id]
	  )
	  shopping_item_create.to_json
  end

  get "/grocery_list" do
    # Item.all.sort_by(&:product_name).to_json
    ItemGroceryList.all.map{|a|a.item.product_name}.uniq.to_json
  end

end
