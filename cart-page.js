// Cart page functionality
class CartPage {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.loadCartItems();
        this.updateTotal();
    }

    loadCartItems() {
        const cartContainer = document.getElementById('cartItems');
        
        if (this.items.length === 0) {
            cartContainer.innerHTML = `
                <div class="text-center py-5">
                    <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                    <h4>Your cart is empty</h4>
                    <p class="text-muted">Add some items to your cart to continue shopping.</p>
                    <a href="shop.html" class="btn btn-danger">Continue Shopping</a>
                </div>
            `;
            this.updateCartBadge();
            return;
        }

        cartContainer.innerHTML = this.items.map(item => `
            <div class="cart-item-row d-flex justify-content-between align-items-center p-3 border-bottom" data-item-id="${item.id}">
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;" class="me-3">
                    <div>
                        <h6 class="mb-1">${item.name}</h6>
                        <span class="text-danger fw-bold">$${item.price.toFixed(2)} each</span>
                        <div class="text-muted small">Total: $${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <div class="d-flex align-items-center border rounded">
                        <button class="btn btn-sm" onclick="cartPage.decreaseQuantity(${item.id})" ${item.quantity <= 1 ? 'disabled' : ''}>
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="px-3 fw-bold">${item.quantity}</span>
                        <button class="btn btn-sm" onclick="cartPage.increaseQuantity(${item.id})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="btn btn-sm btn-outline-danger" onclick="cartPage.removeItem(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
        this.updateCartBadge();
    }

    increaseQuantity(itemId) {
        const item = this.items.find(item => item.id === itemId);
        if (item) {
            item.quantity += 1;
            this.saveCart();
            this.loadCartItems();
            this.updateTotal();
        }
    }

    decreaseQuantity(itemId) {
        const item = this.items.find(item => item.id === itemId);
        if (item && item.quantity > 1) {
            item.quantity -= 1;
            this.saveCart();
            this.loadCartItems();
            this.updateTotal();
        }
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveCart();
        this.loadCartItems();
        this.updateTotal();
    }

    updateTotal() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 0 ? 10.00 : 0;
        const total = subtotal + shipping;
        
        const subtotalElement = document.getElementById('subtotalAmount');
        const shippingElement = document.getElementById('shippingAmount');
        const totalElement = document.getElementById('totalAmount');
        
        if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        if (shippingElement) shippingElement.textContent = `$${shipping.toFixed(2)}`;
        if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
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

function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Your cart is empty! Please add some items before checkout.');
        return;
    }
    
    window.location.href = 'checkout.html';
}

const cartPage = new CartPage();