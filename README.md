# Cookbook Grocery Store App
Cookbook is a quaint grocery store in Los Angeles. Google labels them as "Locally grown produce, organic meats & prepared foods are on offer at this snug grocery.", but I would consider them so much more. It's a place where I go to get excited about food and explore recipes that I'd never even think of.

I wanted to create an app for the Cookbook shopper. The goal is to help them see the latest inventory of products in stores and use that to create a grocery list for their upcoming visit. 


## Technologies
This project is created with the following:
- Frontend: React
- Backend: Ruby && ActiveRecord

## Launch
Launch backend
```
$ bundle install
$ rake db:migrate
$ rake db:seed
```
Launch frontend
```
$ yarn install
$ yarn start
```
Navigate
```
localhost:9292/
```
## Features

![Image 2021-08-27 at 10 07 04 AM](https://user-images.githubusercontent.com/6384642/131163820-46a5fa61-7516-4830-abb9-e94846b4a7e6.jpg)
### Homepage
A simple homepage shows links to the Shopping Page and Grocery List Page. There's also a location finder for the user to get to the store.
- Navigate to respective pages
- Links to Cookbook locations via Google Maps

![Image 2021-08-27 at 10 12 18 AM](https://user-images.githubusercontent.com/6384642/131164466-fe5945bb-f98c-4099-acab-e051f7bb18d1.jpg)
### Shopping Page
The Shopping Page shows the entire inventory of products that Cookbook sells. The user can add those items to their grocery list. A few additional features:
- Products separated by food category
- Convenient link to the grocery list
- Search products by name
- Product adds to the grocery list instantly

![Image 2021-08-27 at 9 44 41 AM](https://user-images.githubusercontent.com/6384642/131162420-28c5c08b-86dd-41d8-bb5e-9fd65983ea45.jpg)
### Grocery List Page
The user can see their grocery list as they visit the shop. Perfect for a grab-and-go trip.
- Check-off product as you shop in the store
- Delete a product from the grocery list
- Change the quantity of a product
- Tally of the product price and total price

## Model
![Image 2021-08-27 at 10 43 21 AM](https://user-images.githubusercontent.com/6384642/131168016-f386d3ce-228b-4764-9abf-6d3cc2d17c7f.jpg)

## User Stories
- As a user, I would like to see all the products Cookbook offers in store
- As a user, I would like to see if Cookbook items are in-stock
- As a user, I would like to create a grocery list for my future visit
- As a user, I would like to edit my grocery list

## Created By
### John Kim
Github: <a href="https://github.com/jyk595/">jyk595</a>
Email: <a href="mailto: jyk595@gmail.com">jyk595@gmail.com</a>
