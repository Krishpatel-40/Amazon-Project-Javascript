import {renderOrderSummmary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import '../data/cart-class.js'
// import '../data/backend-practice.js';            //includes backend basics
// import '../data/cart-oop.js'
import {loadProducts} from '../data/products.js';
import {loadCart} from '../data/cart.js'; 

new  Promise((resolve)=>{      // when we cerate a new promise, we need to give it a functiuon and it will be executed immediately
    loadProducts(()=>{
        console.log('Products loaded');            // aa savthi pela execute thase
        resolve('value1');                  // just like jasmine done() function, aane je aapde pass karsu e ena next .then() ma para ma pass thase
    });    
    
}).then((value)=>{
    console.log(value);                // value1
    return new Promise((resolve)=>{             // nested callbacks karta saru
        loadCart(()=>{
            console.log('Cart loaded');         
            resolve();
        });

}).then(()=>{
        renderOrderSummmary();
        renderPaymentSummary();
    })
});
