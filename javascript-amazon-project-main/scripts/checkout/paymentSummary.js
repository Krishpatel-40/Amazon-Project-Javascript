import { cart ,claculateCartQuantity , emptycart} from "../../data/cart.js";
import { getProducts } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryoptions.js";
import { formatCurrency } from "../utils/money.js";
import { addOrders } from "../../data/orders.js";
export function renderPaymentSummary(){
    //model (save the data)
    let producPriceCents=0;
    let shippingPriceCents=0;
    cart.forEach((cartItem) => {
        const product =getProducts(cartItem.productId);
      producPriceCents +=(product.priceCents * cartItem.quantity);
      // have aama aapdi pase cart ma deliveryOptionId ena this delivery charge gansu
      const deliveryPrice = getDeliveryOption(cartItem.deliveryOptionId);
      shippingPriceCents+=deliveryPrice.priceCents;
    });
    
    const totalBeforeTaxCents = producPriceCents+shippingPriceCents;
    const estimatedTaxCents = totalBeforeTaxCents*0.1;
    const totalCents = totalBeforeTaxCents + estimatedTaxCents;

    const paymentSummaryHTML=
    `
              <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div class="js-payment-summary-items">Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(producPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(estimatedTaxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary
          js-place-order-button">
            Place your order
          </button>
          `;


    document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHTML;
    document.querySelector('.js-payment-summary-items').innerHTML = `Items (${claculateCartQuantity()})`
    document.querySelector('.js-place-order-button').addEventListener('click', async()=>{
       //onclick we'll make a request to the backend to place the order
     try{

      const response =  await fetch('https://supersimplebackend.dev/orders',{
        method:'POST',
        headers:{   //headers gives the backend more information about our request
          'Content-Type':'application/json' 
        },
        body:JSON.stringify({        // this contains the actual data to send to the backend
            cart:cart,
        })  
       });
       // there are 4 types of request GET POST PUT DELETE

       const order = await response.json();
      //  console.log('Order placed',order);
       addOrders(order);
       emptycart();

     }catch(error){
      console.log('Error placing order');
     }
        
     window.location.href = 'orders.html'
    });
    //view (render the data)

}
 