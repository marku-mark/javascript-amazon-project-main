export let cart = JSON.parse(localStorage.getItem('cart'));

 if (!cart) {
  cart =[{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  }];
  
};


function saveToStorage () {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export function addToCart (productId){
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  const quantity = Number(quantitySelector.value);

  (matchingItem) ? matchingItem.quantity += quantity : cart.push({productId,quantity:1});

  saveToStorage();
};

export function updateCartQuantity(selector = '.js-cart-quantity', text = '') {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const element = document.querySelector(selector);

  if (!element) return;

  (text) ? element.innerHTML = `${cartQuantity} ${text}` : element.innerHTML = cartQuantity;
  
}


export function removeFromCart(productId){
  const newCart = [];

  cart.forEach ((cartItem) => {
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  }); 

  cart = newCart;

  saveToStorage();
};