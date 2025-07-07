//we'll create a class a even better way towards OOP , generates objects 

class Cart {  // use PascalCase for class names
    cartItems;
    #localstorageKey;           //private property 
    constructor(localstorageKey){  // a new method = constructor method,just like a normal method
        //runs automatically when a new object is created from this class 
        // kind of setup code

        this.#localstorageKey=localstorageKey; // this is the key for local storage
        this.#loadFromStorage();                 //aani aandar j 6e etle this.
    
    }
#loadFromStorage(){ 
     this.cartItems = JSON.parse(localStorage.getItem(this.#localstorageKey)); //string hase etle parse
    // console.log("Cart from local storage", cart); 

if(!this.cartItems){
    this.cartItems = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId:'1'    //aane aapde deliveryoptions.js ma map karavasu
  },{
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1 ,
      deliveryOptionId:'2'
    }];
}
};
saveToStorage(){
        localStorage.setItem(this.localstorageKey,JSON.stringify(this.cartItems)); // name, data(string format) elte stringify 
    };
addToCart(productId , quantity) {
  let matchingItem;
   this.cartItems.forEach((cartItem)=>{
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
    this.saveToStorage(); // have to save the cart to local storage after adding an item
};
 removeFromCart(id){
    let newCart = [];   //navo array banavi delete sivay na add kri devana
    this.cartItems.forEach((item)=>{
        if(item.productId !== id){
            newCart.push(item);
        }
    });
    this.cartItems = newCart;
    this.saveToStorage(); // have to save the cart to local storage after removing an item
};
 claculateCartQuantity(){
  let cartQuantity = 0;
  this.cartItems.forEach((cartItem)=>{         //etle hu baddha element cart ni aandar na (je object ma hase) ne item kais
    cartQuantity +=cartItem.quantity;
    // document.querySelector('.cart-quantity').innerHTML = cartQuantity;
})
return cartQuantity;
};
 updateQuantity(id,q){
    this.cartItems.forEach((item)=>{
        if(item.productId === id){
            item.quantity=Number(q);
        }
    })
    this.saveToStorage(); // have to save the cart to local storage after updating an item
};
 updateDeliveryOption(productId,deliveryOptionId){
     let matchingItem;
  this.cartItems.forEach((cartItem)=>{
    if(productId === cartItem.productId){
        matchingItem = cartItem;
    }});
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage(); 
}

}

const cart =new Cart('cart-oop');       //values passed are saved into constructor 
// const businesscart = new Cart('cart-business');
// console.log(cart);

// cart.localstorageKey='anyname';  //aa aahiya koi set no kari ekvu joiye elte aapde private vaparsu
// cart.#localstorageKey='cart-oop'; //will give error as : cart-class.js:92 Uncaught SyntaxError: Private field '#localstorageKey' must be declared in an enclosing class (at cart-class.js:92:5)