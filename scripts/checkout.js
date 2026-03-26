import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import {checkoutHeader} from "./checkout/checkoutHeader.js";
import {getProduct, loadProducts, loadProductsFetch} from "../data/products.js";
import {loadCarts} from "../data/cart.js";
//import '../data/cart-class.js'
//import '../data/backend-practice.js'

// async await, put async before the function name to make the function return promise.
// await can only use inside async function
async function loadPage(){

  await loadProductsFetch()

  await new Promise((resolve)=>{
    loadCarts(()=>{
      resolve();
    })
  })

  checkoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

}

loadPage()

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve)=>{
//     loadCarts(()=>{
//       resolve();
//     })
//   })

// ]).then((value)=>{
//   checkoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// new Promise((resolve)=>{
//     loadProducts(()=>{
//       resolve('value1');
//     })
//   }
  
// ).then((value)=>{
//   console.log(value)

//     return new Promise((resolve)=>{
//       loadCarts(()=>{
//         resolve();
//       })
//     })
//   }

// ).then(() =>{
//     checkoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   }
// );


// callback for the loadProducts, it is the same as the new Promise

// loadProducts(()=>{
//   loadCarts(()=>{

//     checkoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
 
// });

