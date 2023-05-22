# ECommerce Website : with Nextjs, MU css and CMS Sanity🌟

<br />

<h3 align="left">▶ Steps to Create</h3><br />

1. Create Next App

   1. npx create-next-app
   2. add @mui library

2. Create Website Layout

   1. Add header
   2. Add main
   3. Add footer

3. Connect to Sanity.io

   1. install sanity
   2. initialize sanity
   3. create product model
   4. insert sample data to product model

      in this step i get 3 problem to install sanity solution
      -1. versine node did not agree with sanity , so i used it sanity @sanity/cli@2.29.3
      -2. problem number two :file found in plugin "@sanity/base" solution: add "@sanity/base" in env sanity.json

   5. to run sanity => cd file and run (sanity start)

4. List Products

   1. add localhost:3000 to the CORS origins in sanity
   2. fetch products from sanity
   3. render them in the screen

5. Create Product Details Screen

   1. add [slug].js to product folder
   2. create component
   3. get slug from the url
   4. fetch product from sanity client
   5. render product image, info
   6. show add to cart button

6. Create React Context use ( package js-cookie to save the selected option of the user)

   1. define Context, Store and reducer
   2. set darkMode flag
   3. use it on layout

7. Implement Add to cart

   1. define cart in context
   2. dispatch add to cart action
   3. set click event handler for button

8. Create Cart Screen

   1. get cart items from context
   2. render in the screen
   3. show cart items in the header menu
   4. implement add to cart in home page

9. Display Cart Badge In Header Menu

   1. add cart link to header
   2. show cart items badge in header
   3. implement add to cart in home page

10. Create Login and Register Screen use ( package react-hook-form)
    1. create login form
    2. create register for
