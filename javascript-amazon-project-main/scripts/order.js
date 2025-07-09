import { orders } from "../data/orders.js";
import formatCurrency from "./utils/money.js";
import { correctDate } from "./utils/displaydate.js"; 
import { products , getProducts, loadProductsFetch } from "../data/products.js";
console.log("Orders data:", orders);
let ordersHTML;
let productsHTML;
function renderProductsIntoOrderContainer(id){
    productsHTML='';
  let product = getProducts(id);
   console.log("Products for order:", product);
  if (product) {
        return`
            <div class="product-image-container">
              <img src="${product.image}">
            </div>

            <div class="product-details">
              <div class="product-name">
                ${product.name}
              </div>
              <div class="product-delivery-date">
                Arriving on: ${product.estimatedDeliveryTime}
              </div>
              <div class="product-quantity">
                Quantity: ${product.quantity}
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
            </div>
        `;
    }
    else {
        console.warn("Product not found for ID:", id);
        return`
            <div>Product not found for ID: ${id}</div>
        `
}
}

function renderorders(){
    orders.forEach((item)=>{
        const prodHTML = renderProductsIntoOrderContainer(item.products[0].productId);

        ordersHTML+=`
                <div class="order-container js-order-container">
          
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${correctDate(item.orderTime)}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$${formatCurrency(item.totalCostCents)}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${item.id}</div>
            </div>
          </div>

          <div class="order-details-grid js-order-details-grid">
            ${renderProductsIntoOrderContainer(item.products[0].productId)}

            <div class="product-actions">
              <a href="tracking.html">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          </div>
        </div>
        `;

    })
    document.querySelector('.js-order-container').innerHTML = ordersHTML; 
    document.querySelector('.js-order-details-grid').innerHTML =productsHTML; 
}
loadProductsFetch()
    .then(() => {
        renderorders();
    })
    .catch((error) => {
        console.error("Error loading products:", error);
    });
