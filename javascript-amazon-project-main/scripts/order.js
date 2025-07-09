import { orders } from "../data/orders.js";
import formatCurrency from "./utils/money.js";
// import { correctDate } from "./utils/displaydate.js"; 
import {  getProducts, loadProductsFetch } from "../data/products.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
console.log("Orders data:", orders);


async function loadPage(){
    let ordersHTML;
    await loadProductsFetch();

     orders.forEach((order)=>{
        const orderTimeString = dayjs(order.orderTime).format('MMMM D');
        ordersHTML+=`
         <div class="order-container">
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${orderTimeString}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$${formatCurrency(order.totalCostCents)}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${order.id}</div>
            </div>
          </div>

          <div class="order-details-grid">
           ${renderProductsIntoOrderContainer(order)}
          </div>
        </div>`
});
document.querySelector('.js-order-container').innerHTML = ordersHTML; 

}

function renderProductsIntoOrderContainer(order){
    let productsHTML='';
    
    order.products.forEach((productDetails)=>{
        console.log("Product details:", productDetails);
        const product = getProducts(productDetails.productId);
        productsHTML+=`
         <div class="product-image-container">
              <img src=${product.image}>
            </div>

            <div class="product-details">
              <div class="product-name">
               ${product.name}
              </div>
              <div class="product-delivery-date">
                Arriving on:${dayjs(productDetails.estimatedDeliveryTime).format('MMMM D')}
              </div>
              <div class="product-quantity">
                Quantity: ${productDetails.quantity}
              </div>
              <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>`;
    });
    return productsHTML;
}


loadPage();
