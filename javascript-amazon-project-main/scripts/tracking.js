 import { getOrderById } from "../data/orders.js";
 import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {getProducts , loadProductsFetch} from "../data/products.js";
import { claculateCartQuantity } from "../data/cart.js";

let trackingHTML = '';

function calculateTrack(orderTime , deliveryTime){
    // console.log("Calculating tracking progress",orderTime.$d , deliveryTime.$d);

    const currentTime = dayjs();

    const totalDuration = deliveryTime.diff(orderTime, 'milliseconds');
    
    // remaining time
    const elapsedTime = currentTime.diff(orderTime, 'milliseconds');
    
    // Calculate progress percentage
    let progressPercentage = (elapsedTime / totalDuration) * 100;
    
    // Ensure progress is between 0% and 100%
    progressPercentage = Math.min(Math.max(progressPercentage, 0), 100);
    console.log("Order Time:", orderTime.format('YYYY-MM-DD HH:mm:ss'));
    console.log("Current Time:", currentTime.format('YYYY-MM-DD HH:mm:ss'));
    console.log("Delivery Time:", deliveryTime.format('YYYY-MM-DD HH:mm:ss'));
    console.log("Total Duration (hours):", totalDuration / (1000 * 60 * 60));
    console.log("Elapsed Time (hours):", elapsedTime / (1000 * 60 * 60));
    console.log("Progress Percentage:", progressPercentage.toFixed(1) + "%");
        let currentStatus = 'Preparing';
    if (progressPercentage >= 50 && progressPercentage < 100) {
        currentStatus = 'Shipped';
    } else if (progressPercentage >= 100) {
        currentStatus = 'Delivered';
    }
    
    console.log("Current Status:", currentStatus);
    
    return {
        percentage: progressPercentage.toFixed(1),
        status: currentStatus
    };
}

function renderProductsToTrack(order){
    let productsHTML = '';
        order.products.forEach((productDetails)=>{
        // console.log("Product details:", productDetails);
        const product = getProducts(productDetails.productId); 
          const trackingData = calculateTrack(dayjs(order.orderTime), dayjs(productDetails.estimatedDeliveryTime)); 
        console.log("Tracking Data:", trackingData);  
    productsHTML += `
     <div class="delivery-date">
          Arriving on ${dayjs(productDetails.estimatedDeliveryTime).format('MMMM,D')}
        </div>

        <div class="product-info">
         ${product.name}
        </div>

        <div class="product-info">
          Quantity: ${productDetails.quantity}
        </div>

        <img class="product-image" src=${product.image}>

        <div class="progress-labels-container">
          <div class="progress-label ${trackingData.status === 'Preparing' ? 'current-status' : ''}">
            Preparing
          </div>
          <div class="progress-label ${trackingData.status === 'Shipped' ? 'current-status' : ''}">
            Shipped
          </div>
          <div class="progress-label ${trackingData.status === 'Delivered' ? 'current-status' : ''}">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar" style="width:${trackingData.percentage}%"></div>
        </div>
      </div>`;
});
    return productsHTML;
}

async function renderTracking(){
        await loadProductsFetch();
    
    console.log("Tracking page loaded");
    const url = new URL(window.location.href);
        const orderId = url.searchParams.get('orderId');
        const productId = url.searchParams.get('productId');

       console.log(getOrderById(orderId));
       const order = (getOrderById(orderId));
       const productDetails = getProducts(productId);
         console.log("Product details:", productDetails);
        trackingHTML += `
        <div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>
        <div class="order-header">
        ${renderProductsToTrack(order)}
      </div>`;


        document.querySelector('.js-tracking-container').innerHTML = trackingHTML;
        document.querySelector('.js-cart-quantity').innerHTML = claculateCartQuantity();

     }


     renderTracking();