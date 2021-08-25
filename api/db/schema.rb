# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_24_234400) do

  create_table "item_grocery_lists", force: :cascade do |t|
    t.integer "user_id"
    t.integer "item_id"
    t.index ["item_id"], name: "index_item_grocery_lists_on_item_id"
    t.index ["user_id"], name: "index_item_grocery_lists_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "product_name"
    t.string "category"
    t.float "price"
    t.integer "quantity"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
  end

  add_foreign_key "item_grocery_lists", "items"
  add_foreign_key "item_grocery_lists", "users"
end
