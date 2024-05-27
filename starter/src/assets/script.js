/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const product1 = {
    productId: 1,
    name: 'Cherries',
    price: 0.40,
    quantity: 100,
    image: "images\cherry.jpg",
  };

  const product2 = {
    productId: 2,
    name: 'Strawberries',
    price: 0.70,
    quantity: 100,
    image: "images\strawberry.jpg", 
  };

  const product3 = {
    productId: 3,
    name: 'Oranges',
    price: 0.00,
    quantity: 100,
    image: "images\orange.jpg",  
  }; 

products.push(product1, product2, product3);



/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */


const cart = [];

 //call function 
 
 console.log(cart);

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId 
  - addProductToCart should then increase the product's quantity (truthy/falsy)
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  const productToAdd = products.find(product => product.productId === productId);  //Find product within the products array based on productID
  
  if (productToAdd) {
    const cartItemIndex = cart.findIndex(item => item.productId === productId);
    
    if (cartItemIndex !== -1) {
      cart[cartItemIndex].quantity++;
    } else {
      const newCartItem = {
      productId: productToAdd.productId,
      name: productToAdd.name,
      price: productToAdd.price,
      quantity: 1,
      image: productToAdd.image, 
      };

      cart.push(newCartItem);

      console.log(`Product '${productToAdd.name}' added to the cart.`);
    }
  } else {
    console.log("Product not found.");
  }
}

//call function
addProductToCart(1);
addProductToCart(3);
addProductToCart(5);
console.log("Cart:", cart); 

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  const productToIncrease = products.find(product => product.productId === productId);  //Find product within the products array based on productID
  
  if (productToIncrease) {
      productToIncrease.quantity++;
      console.log(`Quantity of '${productToIncrease.name}' increased to ${productToIncrease.quantity}.`);
    }  else {
      console.log("Product not found.");
    }
  }
//call function 
increaseQuantity(1);
increaseQuantity(5);


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const productToDecrease = cart.findIndex(item => item.productId === productId);  //Find product within the products array based on productID
  
  if (productToDecrease !== -1) {
    cart[productToDecreaseIndex].quantity--;

    if (cart[productToDecreaseIndex].quantity === 0) {
        cart.splice(productToDecreaseIndex, 1);
        console.log(`Product removed from cart. Quantity of '${cart[productToDecreaseIndex].name}' is now 0.`);
    } else {
        console.log(`Quantity of '${cart[productToDecreaseIndex].name}' decreased to ${cart[productToDecreaseIndex].quantity}.`);
    }
} else {
    console.log("Product not found in the cart.");
}
}

//call function 
decreaseQuantity(1);
decreaseQuantity(5);


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
/*
function removeProductFromCart(productId) {
  const productToRemoveIndex = cart.findIndex(item => item.productId === productId);  //Find product within the products array based on productID

  if (productToRemoveIndex !== -1 {
    cart[productToRemoveIndex.quantity = 0; 

    cart.splice(productToRemoveIndex, 1);

       console.log(`Product '${products[productId - 1].name}' removed from cart.`);
  } else {
      console.log("Product not found in the cart.");
  }
}*/

//call function 
//removeProductFromCart(1);
//removeProductFromCart(5);
/*
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
/*
function cartTotal() {
  const totalcost = 0;
  
  cart.forEach(item => {
    totalcost += item.price * item.quantity;
  });

  return totalCost;
} 
*/
//call function console.log(cartTotal());

/* Create a function called emptyCart that empties the products from the cart */
/*
function emptyCart(){
  cart = [];
  console.log("Cart Emptied.");
}
*/
/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
/*
function pay(amount){
  const totalCost = cartTotal();
  const balance = amount - totalCost;
  return balance; 
}*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/
/*
module.exports = {
   //products,
   //cart,
   //addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency

