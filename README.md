# Ecommerce Product & Order Managment System
<b>Introduction</b>: This is a simple api server to handle request and response of products and orders. I have used moduler patterns to make my code reuseble and clean. Using this api you can create product, update & delete product. During the time of creating product if you give wrong or invalid information it won't be uploaded. Actually, I have handled the validation system using 'Joi' Npm Package. Besides, you can create, check order and check order using email address.

## All you need to do to run the server
Step 1: Create a .env file
Step 2: Declare PORT=your_port there
step 3: Declare DATABASE_URL=your_mongodb_url
Finally, Run Your Server

## Application Routes & Methods for Products
<b>(Method: GET & Route: "/")</b>: You will get 404 page nothing. <br/>
<b>(Method: GET & Route: "/api/products"</b>: you will get all the products. <br/>
<b>(Method: GET & Route: "/api/products/?searchTerm=''"</b>: you will get the matched products according to the searchTerm <br/>
<b>(Method: GET & Route: "api/products/:productId</b>:": you will get the product of the id. <br/>
<b>Method: POST & Route: "api/products"</b>: It will create data on the basis of given input.<br/>
<b>Method: PUT & Route: "api/products/:productId</b>: It will update data accoring the condition and information given in the request body. <br/>
<b>Method: DELETE & Route: "api/products/:productId</b>: It will delete data accoring to the id given in the request params. <br/>

## Application Routes & Methods for Orders
<b>(Method: GET & Route: "/api/orders"</b>: you will get all the products. <br/>
<b>(Method: GET & Route: "/api/orders?email=''"</b>: You will get the orders according to the email address given upon <br/>
<b>(Method: POST & Route: "/api/orders"</b>: It will create a order according the information given in the body.. <br/>

