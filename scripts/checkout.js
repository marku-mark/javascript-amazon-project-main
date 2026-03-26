import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import {checkoutHeader} from "./checkout/checkoutHeader.js";
import {getProduct, loadProducts} from "../data/products.js";
import {loadCarts} from "../data/cart.js";
//import '../data/cart-class.js'
//import '../data/backend-practice.js'

Promise.all([
  new Promise((resolve)=>{
    loadProducts(()=>{
      resolve('value1');
    })
  }
  
),
  new Promise((resolve)=>{
    loadCarts(()=>{
      resolve();
    })
  })

]).then((value)=>{
  checkoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

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

// callback for the loadProducts, it is the same as the new Promise or Promise

// loadProducts(()=>{
//   loadCarts(()=>{

//     checkoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
 
// });

