export let cart = JSON.parse(localStorage.getItem('cart')); //string hase etle parse
    // console.log("Cart from local storage", cart); 

if(!cart){
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },{
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1 
    }];
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
