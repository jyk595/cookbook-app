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

  get "/all_items" do
    Item.all.uniq.to_json
  end

  get "/inventory" do
    ItemGroceryList.all.sort_by(&:item_id).to_json
  end

  delete '/item_grocery_list/:id' do
    list_item = ItemGroceryList.where(item_id: params[:id])
    list_item.destroy_all
    {message: "items deleted"}.to_json
  end
  
  delete '/item_grocery_delete/:id' do
    list_item = ItemGroceryList.find_by(item_id: params[:id])
    list_item.destroy
    {message: "item deleted"}.to_json
  end

  patch "/item_list_patch/:id" do
    shopping_item = ItemGroceryList.where(item_id: params[:id])

    if shopping_item[0].purchased == true
      shopping_item.update(purchased: false)
    else
      shopping_item.update(purchased: true)
    end
    
    ItemGroceryList.all.to_json
  end
end
