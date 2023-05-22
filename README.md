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
