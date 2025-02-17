import {cart} from "../../data/cart.js";
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from "../../data/deliveryOptions.js";
import {formatCurrency} from '../utils/money.js';

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let ShippingPriceCents = 2000;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    ShippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTaxCents = productPriceCents + ShippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.0;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items:</div>
      <div class="payment-summary-money">₦${formatCurrency(productPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Delivery:</div>
      <div class="payment-summary-money">₦${formatCurrency(ShippingPriceCents)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">₦${formatCurrency(totalCents)}</div>
    </div>

    <button class="place-order-button button-primary js-place-order-button">
      Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

  // Bind the initializePaystackPayment function to the button click event
  document.querySelector('.js-place-order-button').addEventListener('click', () => {
    initializePaystackPayment(totalCents);
  });
}

function initializePaystackPayment(totalCents) {
  const handler = PaystackPop.setup({
    key: 'pk_test_59c980ac261021e6f426ff9cc635897f5a7e191a', // Replace with your Paystack public key
    email: 'sweetlolli@gmail.com', // Replace with the customer's email
    amount: totalCents * 100, // Amount in kobo
    currency: 'NGN',
    callback: function(response) {
      // This happens after the payment is completed successfully
      alert('Payment successful. Transaction reference: ' + response.reference);
      
      // Clear the local storage
      localStorage.clear();

      // Redirect the user to a different page
      window.location= '/lolli-main/delivery.html'; // For local server (when your file is in xammp or mamp) // For live server, use window.location.href = '../../delivery.html';
    },
    onClose: function() {
      alert('Payment window closed.');
    }
  });
  handler.openIframe();
}