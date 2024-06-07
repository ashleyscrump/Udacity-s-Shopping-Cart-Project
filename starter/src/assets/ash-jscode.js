const products = [];

const product1 = {
  productId: 1,
  name: "Cherries",
  price: 0.45,
  quantity: 10,
<<<<<<< HEAD
  image: "imagescherry.jpg",
=======
  image: './images/cherry.jpg',
>>>>>>> 620535e130124c8224c19bfa32df53c4c7407737
};

const product2 = {
  productId: 2,
  name: "Strawberries",
  price: 0.75,
  quantity: 10,
<<<<<<< HEAD
  image: "imagesstrawberry.jpg",
=======
  image: './images/strawberry.jpg',
>>>>>>> 620535e130124c8224c19bfa32df53c4c7407737
};

const product3 = {
  productId: 3,
  name: "Oranges",
  price: 1.2,
  quantity: 10,
<<<<<<< HEAD
  image: "imagesorange.jpg",
=======
  image: "./images/orange.jpg",
>>>>>>> 620535e130124c8224c19bfa32df53c4c7407737
};

products.push(product1, product2, product3);

const cart = [];
let totalPaid = 0;

function addProductToCart(productId) {
  const productToAdd = products.find(
    (product) => product.productId === productId
  );

  if (productToAdd) {
    const cartItemIndex = cart.findIndex(
      (item) => item.productId === productId
    );

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
    }
  }
<<<<<<< HEAD
}

function increaseQuantity(productId) {
  const productToIncrease = products.find(
    (product) => product.productId === productId
  );

  if (productToIncrease) {
    productToIncrease.quantity++;
  }
}

function decreaseQuantity(productId) {
  const productToDecreaseIndex = cart.findIndex(
    (item) => item.productId === productId
  );

  if (productToDecreaseIndex !== -1) {
    cart[productToDecreaseIndex].quantity--;

    if (cart[productToDecreaseIndex].quantity === 0) {
      cart.splice(productToDecreaseIndex, 1)[0];
    }
  }
}

function removeProductFromCart(productId) {
  const productToRemoveIndex = cart.findIndex(
    (item) => item.productId === productId
  );

  if (productToRemoveIndex !== -1) {
    cart[productToRemoveIndex].quantity = 0;
    const removedItem = cart.splice(productToRemoveIndex, 1)[0];
  }
}

function cartTotal() {
  let totalCost = 0;

  cart.forEach((item) => {
    totalCost += item.price * item.quantity;
  });

  return totalCost;
}

function emptyCart() {
  while (cart.length > 0) {
    cart.pop();
  }
}

function pay(amount) {
  const totalCost = cartTotal();
  totalPaid += amount;

  if (totalPaid < totalCost) {
    const balanceDue = totalPaid - totalCost;
    return {'Your balance due is $' balanceDue};
  } 
  else if (totalPaid === totalCost) {
    const exactChange = totalPaid === totalCost;
    totalPaid = 0;
    emptyCart();
    return {'You paid the exact amount $' exactChange};
  }
  else {
    const change = totalPaid - totalCost;
    totalPaid = 0;
    emptyCart();
    return {'Your change is $' change};
  }}
=======
}

function increaseQuantity(productId) {
  const productToIncrease = products.find(
    (product) => product.productId === productId
  );

  if (productToIncrease) {
    productToIncrease.quantity++;
  }
}

function decreaseQuantity(productId) {
  const productToDecreaseIndex = cart.findIndex(
    (item) => item.productId === productId
  );

  if (productToDecreaseIndex !== -1) {
    cart[productToDecreaseIndex].quantity--;

    if (cart[productToDecreaseIndex].quantity === 0) {
      cart.splice(productToDecreaseIndex, 1)[0];
    }
  }
}

function removeProductFromCart(productId) {
  const productToRemoveIndex = cart.findIndex(
    (item) => item.productId === productId
  );

  if (productToRemoveIndex !== -1) {
    cart[productToRemoveIndex].quantity = 0;
    const removedItem = cart.splice(productToRemoveIndex, 1)[0];
  }
}

function cartTotal() {
  let totalCost = 0;

  cart.forEach((item) => {
    totalCost += item.price * item.quantity;
  });

  return totalCost;
}
//git config --global user.email "email@example.com"

function emptyCart() {
  while (cart.length > 0) {
    cart.pop();
  }
}

function pay(amount) {
  const totalCost = cartTotal();
  totalPaid += amount;

  if (totalPaid < totalCost) {
    const balanceDue = totalCost - totalPaid;
    return `Your balance due is $${balanceDue}`;
  } else if (totalPaid === totalCost) {
    totalPaid = 0;
    emptyCart();
    return "You paid the exact amount.";
  } else {
    const change = totalPaid - totalCost;
    totalPaid = 0;
    emptyCart();
    return `Your change is $${change}`;
  }
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  
}

