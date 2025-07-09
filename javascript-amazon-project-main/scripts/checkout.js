import {renderOrderSummmary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import '../data/cart-class.js'
// import '../data/backend-practice.js';            //includes backend basics
// import '../data/cart-oop.js'
import {loadProducts , loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js'; 



/*
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
*/

/*
//we can run multiple promises in parallel using Promise.all
Promise.all([                   // an array of promises
    new  Promise((resolve)=>{      
    loadProducts(()=>{
        console.log('Products loaded');       
        resolve('value1');
    });
}),
    new Promise((resolve)=>{            
        loadCart(()=>{
            console.log('Cart loaded');         
            resolve();
        });
    }),
]).then((value)=>{
    console.log("returns an array of values of all promises:",value);
    renderOrderSummmary();
    renderPaymentSummary();
})
*/


/*
Promise.all([                   // an array of promises
   loadProductsFetch(),         // this is also a promise
    new Promise((resolve)=>{            
        loadCart(()=>{
            console.log('Cart loaded');         
            resolve('value2');
        });
    }),
]).then((value)=>{
    console.log("returns an array of values of all promises:",value);
    renderOrderSummmary();
    renderPaymentSummary();
})
*/




// aani ei krta better async-await
async function loadPage(){           //async makes a function return a promise
    console.log('load page called');
    try{
        // throw 'aa error aapde aaipo 6e , throw pachi this kai execute nai thai aane aa message catch() na params am ajato rese';
         await loadProductsFetch();//await let's us wait for a promise to finish before moving to the next line and can inly be used inside async function
            // aa function promnise krvo joiye

    await new Promise((resolve,reject)=>{            
        loadCart(()=>{
            console.log('Cart loaded');
            //reject is a , it let's us create an error in the future         
            resolve();
            // reject('Error loading cart');  // this will be caught by the catch block below
        });
    });
    }catch(error){
         console.log('Error loading products or cart:\n', error);   
    }
   
    renderOrderSummmary();
    renderPaymentSummary();

    // return 'value3';
}
loadPage();/* .then((val)=>{
     console.log('Page loaded',val);
});
*/


await Promise.all([
    
])