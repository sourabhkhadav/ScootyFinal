// Checkout page functionality
class CheckoutPage {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.loadOrderSummary();
        this.calculateTotal();
        this.updateCartBadge();
    }

    loadOrderSummary() {
        const summaryContainer = document.getElementById('orderSummary');
        
        if (this.items.length === 0) {
            alert('Your cart is empty!');
            window.location.href = 'cart.html';
            return;
        }

        summaryContainer.innerHTML = this.items.map(item => `
            <div class="checkout-item d-flex align-items-center mb-3 p-3 border rounded" data-item-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px;" class="me-3">
                <div class="flex-grow-1">
                    <div class="fw-bold mb-1">${item.name}</div>
                    <div class="d-flex align-items-center gap-2">
                        <button class="btn btn-sm btn-outline-secondary" onclick="checkoutPage.updateQuantity(${item.id}, ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="px-2 fw-bold">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="checkoutPage.updateQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger ms-2" onclick="checkoutPage.removeItem(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    <small class="text-muted">$${item.price.toFixed(2)} each</small>
                </div>
                <div class="text-end">
                    <strong class="text-danger">$${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
            </div>
        `).join('');
    }

    calculateTotal() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 0 ? 10.00 : 0;
        const total = subtotal + shipping;

        const subtotalElement = document.getElementById('subtotal');
        const shippingElement = document.getElementById('shipping');
        const finalTotalElement = document.getElementById('finalTotal');
        
        if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        if (shippingElement) shippingElement.textContent = `$${shipping.toFixed(2)}`;
        if (finalTotalElement) finalTotalElement.textContent = `$${total.toFixed(2)}`;
    }

    updateQuantity(itemId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeItem(itemId);
            return;
        }
        
        const item = this.items.find(item => item.id === itemId);
        if (item) {
            item.quantity = newQuantity;
            this.saveCart();
            this.loadOrderSummary();
            this.calculateTotal();
        }
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveCart();
        this.loadOrderSummary();
        this.calculateTotal();
        
        if (this.items.length === 0) {
            alert('Your cart is now empty!');
            window.location.href = 'cart.html';
        }
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.updateCartBadge();
    }

    updateCartBadge() {
        const badges = document.querySelectorAll('.cart-logo .badge');
        const uniqueProductCount = this.items.length;
        badges.forEach(badge => {
            badge.textContent = uniqueProductCount;
            badge.style.display = uniqueProductCount > 0 ? 'inline-block' : 'none';
        });
    }
}

function placeOrder() {
    const form = document.getElementById('checkoutForm');
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        window.location.href = 'cart.html';
        return;
    }

    // Store order total for success page
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + 10.00;
    localStorage.setItem('orderTotal', total.toFixed(2));
    
    // Clear cart and redirect
    localStorage.removeItem('cart');
    window.location.href = 'order-success.html';
}

// Initialize checkout page
const checkoutPage = new CheckoutPage();