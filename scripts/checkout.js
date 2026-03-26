import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import {checkoutHeader} from "./checkout/checkoutHeader.js";
import {getProduct, loadProducts, loadProductsFetch} from "../data/products.js";
import {loadCarts} from "../data/cart.js";
//import '../data/cart-class.js'
//import '../data/backend-practice.js'

// async await, put async before the function name to make the function return promise.
// await can only be use inside async function, await must also close to the async function otherewise it will fail,if you create a function inside a async function and you put await inside that function it will not work, to use an await inside that function you need to put async before the function name.
// try/catch code that handle errors
async function loadPage(){
  try {
    // throw 'error 1'

    await loadProductsFetch()

    // reject() is a function that creates an error in the future
    await new Promise((resolve, reject)=>{
      // throw 'error 2'
      loadCarts(()=>{
        //reject('error 3')
        resolve();
      })
    })
    
  } catch(error){
    console.log('Unexpected error. Please try again later.')
  }

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

