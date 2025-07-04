import { cart  , removeFromCart , claculateCartQuantity} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

// console.log("aa aave 6e ",cart);
let cartSummaryHTML = '' ;
cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;
  products.forEach((product)=>{
   if(product.id === productId){
    matchingProduct = product;
  } 
  });
  
cartSummaryHTML += `
          <div class="cart-item-container 
          js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"   
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                 ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents)} 
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label js-quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary update-quantity-link-${matchingProduct.id}"
                  data-product-id="${matchingProduct.id}">
                    Update
                  </span>
                  <input class="quantity-input" type="number">
                  <span class="save-quantity-link link-primary" data-product-id="${matchingProduct.id}">Save</span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
`;
});


// function claculateCartQuantity(){
//     document.querySelector('.js-cart-checkout').innerHTML = cart.length;
// }

document.querySelector('.js-cart-summary').innerHTML = cartSummaryHTML;
document.querySelector('.js-cart-checkout').innerHTML = claculateCartQuantity();
document.querySelectorAll('.js-delete-link').forEach((link)=>{
  link.addEventListener('click',()=>{
  const idtodelete = link.dataset.productId;
    // console.log("Delete link clicked",idtodelete);
    //call a function to delete the item from the cart.js file
    removeFromCart(idtodelete);
    // console.log("Cart after deletion", cart);

  const containertodelete =  document.querySelector(`.js-cart-item-container-${idtodelete}`);
    console.log("Container to delete", containertodelete); // aakho caontainer to aave 6e
    containertodelete.remove(); //aa aakhu container remove kari dese
    // have problem e aavse ke reload par baddhu pachu aavi jase , etle aapde localstorage ma store karvu padse , aane delete karti vakhate localstorage ma thi delete karvu padse 
document.querySelector('.js-cart-checkout').innerHTML = claculateCartQuantity();
  })
})
document.querySelectorAll('.update-quantity-link').forEach((link)=>{
  link.addEventListener('click',()=>{
      const idtodelete = link.dataset.productId;
    document.querySelector(`.js-cart-item-container-${idtodelete}`).classList.add('is-editing-quantity');  
  })
})

document.querySelectorAll('.save-quantity-link').forEach((link)=>{
  link.addEventListener('click',()=>{
      const idtodelete = link.dataset.productId;
      const newquantity = document.querySelector('.quantity-input').value;
      // console.log("New quantity", newquantity);
    
    document.querySelector(`.js-cart-item-container-${idtodelete}`).classList.remove('is-editing-quantity');  
  })
})