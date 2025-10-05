// Order success page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Display order total
    const orderTotal = localStorage.getItem('orderTotal') || '0.00';
    const orderTotalElement = document.getElementById('orderTotal');
    if (orderTotalElement) {
        orderTotalElement.textContent = `$${orderTotal}`;
    }
    
    // Generate random order number
    const orderNumber = '#ES-' + new Date().getFullYear() + '-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const orderNumberElement = document.getElementById('orderNumber');
    if (orderNumberElement) {
        orderNumberElement.textContent = orderNumber;
    }
    
    // Clean up localStorage
    localStorage.removeItem('orderTotal');
});