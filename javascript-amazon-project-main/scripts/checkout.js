import { cart  , removeFromCart , claculateCartQuantity ,updateQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import  formatCurrency  from "./utils/money.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"; // aa direct aamj import kairvanu , karanke jya karvu hoi tya thai jai , nakar baddha ni html file ma jai ne kairvu pade
import {deliveryOptions} from '../data/deliveryoptions.js'; 



let cartSummaryHTML = '' ;
cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;
  products.forEach((product)=>{
   if(product.id === productId){
    matchingProduct = product;
  } 
  });

  const deliveryOptionId = cartItem.deliveryOptionId;

 let deliveryOption;
   deliveryOptions.forEach((option)=>{
    if(option.id === deliveryOptionId){
      deliveryOption=option;
    }
   })

   const today = dayjs(); 
  const deliverydate = today.add(deliveryOption.deliveryDays,'days');  //two parameters , no. aane kema add krvo 6e day min second etc.
  const dateString  = deliverydate.format('dddd, MMMM D');

  
cartSummaryHTML += `
          <div class="cart-item-container 
          js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
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
                ${deliverOptionsHTMLl(matchingProduct ,cartItem)}
              </div>
            </div>
          </div>
`;
});


function deliverOptionsHTMLl(matchingProduct,cartItem){

    let html = '';
  deliveryOptions.forEach((deliveryOption)=>{
    // console.log(dayjs()); //aa date mate lidhu 6e , pela ek var format joi levu 
const today = dayjs(); 
const deliverydate = today.add(deliveryOption.deliveryDays,'days');  //two parameters , no. aane kema add krvo 6e day min second etc.
const dateString  = deliverydate.format('dddd, MMMM D'); 
// console.log("Delivery date", deliverydate);// have aane format kvanu jem dekhadvu hoi em , aane eni matre documentation vachi levu
const priceString = deliveryOption.priceCents ===0? "FREE":`$${formatCurrency(deliveryOption.priceCents)} -` ;
const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
html+=`
    <div class="delivery-option">
                  <input type="radio" 
                  ${isChecked?'checked':''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                     ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString} Shipping
                    </div>
                  </div>
                </div>`
  })
  return html;
}

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
  link.addEventListener('click || on enter',()=>{
      const idtodelete = link.dataset.productId;
      const newquantity = document.querySelector('.quantity-input').value;
      // console.log("New quantity", newquantity);
    updateQuantity(idtodelete, newquantity);
    document.querySelector(`.js-cart-item-container-${idtodelete}`).classList.remove('is-editing-quantity');
    document.querySelector(`.js-quantity-label`).innerHTML = newquantity;
document.querySelector('.js-cart-checkout').innerHTML = claculateCartQuantity();

  })
})