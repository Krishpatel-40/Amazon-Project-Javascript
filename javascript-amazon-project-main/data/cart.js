export let cart = JSON.parse(localStorage.getItem('cart')); //string hase etle parse
    // console.log("Cart from local storage", cart); 

if(!cart){
    cart = [
  //     {
  //       productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  //   quantity: 2,
  //   deliveryOptionId:'1'    //aane aapde deliveryoptions.js ma map karavasu
  // },{
  //     productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  //     quantity: 1 ,
  //     deliveryOptionId:'2'
  //   }
  ];
}

function saveToStorage(){
        localStorage.setItem('cart',JSON.stringify(cart)); // name, data(string format) elte stringify 
    }  

export  function addToCart(productId , quantity) {
  let matchingItem;
  cart.forEach((cartItem)=>{
    if(productId===cartItem.productId){
        matchingItem=cartItem;
    }});
    if (matchingItem) {
      matchingItem.quantity+=quantity;
    }else{
      cart.push({
        productId : productId,
        quantity: quantity,
        deliveryOptionId:'1' // default delivery option id, can be changed later
      });//dataset gives all the attribtes of the button    
    }
    saveToStorage(); // have to save the cart to local storage after adding an item
}

export function removeFromCart(id){
    let newCart = [];   //navo array banavi delete sivay na add kri devana
    cart.forEach((item)=>{
        if(item.productId !== id){
            newCart.push(item);
        }
    });
    cart = newCart;
    saveToStorage(); // have to save the cart to local storage after removing an item
}

export function claculateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem)=>{         //etle hu baddha element cart ni aandar na (je object ma hase) ne item kais
    cartQuantity +=cartItem.quantity;
    // document.querySelector('.cart-quantity').innerHTML = cartQuantity;
})
return cartQuantity;
}


export function updateQuantity(id,q){
    cart.forEach((item)=>{
        if(item.productId === id){
            item.quantity=Number(q);
        }
    })
    saveToStorage(); // have to save the cart to local storage after updating an item
}



export function updateDeliveryOption(productId,deliveryOptionId){
     let matchingItem;
  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
        matchingItem = cartItem;
    }});
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage(); 
}



export function loadCart(fun){
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load',()=>{
        console.log("*****************",xhr.response);
      fun();  //call the function passed as argument to loadProducts
      // we wait http requeat to complete and then call the function to render the products
   });
     
  xhr.open('GET','https://supersimplebackend.dev/cart');
  xhr.send();
}

