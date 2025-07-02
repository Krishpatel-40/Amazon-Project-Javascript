export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1 
  },{
    productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    quantity: 3
  }];
export  function addToCart(productId , quantity) {
  let matchingItem;
  cart.forEach((cartItem)=>{
    if(productId===cartItem.id){
        matchingItem=cartItem;
    }});
    if (matchingItem) {
      matchingItem.quantity+=quantity;
    }else{
      cart.push({
        id : productId,
        quantity: quantity,
      });//dataset gives all the attribtes of the button    
    }
}