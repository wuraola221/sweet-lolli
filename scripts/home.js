document.addEventListener('DOMContentLoaded', () => {
 const params = new URLSearchParams(window.location.search);
 const productId = params.get('productId');
 
 if (productId) {
     // Use the productId to display the corresponding product
     console.log('Product ID:', productId);
     // Add your code here to fetch and display the product details
 } else {
     console.log('No product ID found in the URL');
 }
});