class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/shopping_items" do
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
    ItemGroceryList.all.map{|a|a.item}.uniq.to_json
  end

  delete '/item_grocery_list/:id' do
    list_item = ItemGroceryList.where(item_id: params[:id])
    list_item.destroy_all
    {message: "items deleted"}.to_json
  end

end
