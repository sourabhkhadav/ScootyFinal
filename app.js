// Shopping Cart Class
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        console.log('Cart initialized with items:', this.items.length);
        this.updateCartDisplay();
        this.initEventListeners();
    }

    initEventListeners() {
        document.addEventListener('click', (e) => {
            // Cart icon click - only toggle cart, don't add products
            if (e.target.closest('.cart-logo')) {
                e.preventDefault();
                e.stopPropagation();
                this.showCart();
                return;
            }
            
            // Add to cart functionality - exclude cart logo
            if ((e.target.closest('.fa-shopping-cart') || e.target.classList.contains('add-to-cart')) && !e.target.closest('.cart-logo')) {
                this.handleAddToCart(e);
            }
            
            // Product info eye icon
            if (e.target.closest('.fa-eye')) {
                this.showProductInfo(e);
            }
            
            // Cart quantity controls
            if (e.target.classList.contains('cart-quantity-btn')) {
                this.handleQuantityChange(e);
            }
            
            // Remove item
            if (e.target.classList.contains('cart-remove-btn')) {
                e.preventDefault();
                e.stopPropagation();
                this.removeItem(parseInt(e.target.dataset.id));
            }
        });
    }

    handleAddToCart(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Try to find the product container
        let productCard = e.target.closest('.product-card') || 
                         e.target.closest('.card') || 
                         e.target.closest('.col') ||
                         e.target.closest('.product-item');
        
        // If it's the main product section, handle differently
        if (!productCard && e.target.closest('.product-section')) {
            const mainProduct = {
                id: Date.now() + Math.random(),
                name: 'Libero X250',
                price: 750,
                image: 'photo/imgi_2_scooter-01.png',
                quantity: 1
            };
            this.addItem(mainProduct);
            this.showNotification(`${mainProduct.name} added to cart!`);
            return;
        }
        
        const product = this.extractProductData(productCard);
        
        if (!product) {
            this.showNotification('Unable to add product to cart!');
            return;
        }
        
        this.addItem(product);
        this.showNotification(`${product.name} added to cart!`);
    }

    extractProductData(productCard) {
        if (!productCard) return null;
        
        // Try multiple selectors for title
        const title = productCard.querySelector('h3, h1, .card-title, .product-title');
        
        // Try multiple selectors for price - look for the actual price (not crossed out)
        let price = null;
        const priceElements = productCard.querySelectorAll('.text-muted, .price, .card-price');
        
        // Find the price that's not crossed out
        for (let priceEl of priceElements) {
            if (!priceEl.classList.contains('text-decoration-line-through')) {
                price = priceEl;
                break;
            }
        }
        
        const img = productCard.querySelector('img');
        
        // Only create product if we have valid title and price
        if (!title || !price || !title.textContent.trim()) {
            return null;
        }
        
        const extractedPrice = this.extractPrice(price.textContent);
        if (extractedPrice <= 0) {
            return null;
        }
        
        return {
            id: Date.now() + Math.random(),
            name: title.textContent.trim(),
            price: extractedPrice,
            image: img ? img.src : 'photo/imgi_2_scooter-01.png',
            quantity: 1
        };
    }

    extractPrice(priceText) {
        // Remove any whitespace and extract price
        const cleanText = priceText.replace(/\s+/g, ' ').trim();
        const match = cleanText.match(/\$(\d+(?:[,.]\d{2})?)/);
        return match ? parseFloat(match[1].replace(',', '')) : 0;
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.name === product.name);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push(product);
        }
        
        this.saveCart();
        this.updateCartDisplay();
    }

    addModalProduct(name, price, image) {
        const product = {
            id: Date.now() + Math.random(),
            name: name,
            price: price,
            image: image,
            quantity: 1
        };
        
        this.addItem(product);
        this.showNotification(`${product.name} added to cart!`);
        
        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
        if (modal) modal.hide();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
        this.refreshCart();
        this.showNotification('Item removed from cart!');
    }

    handleQuantityChange(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const id = parseInt(e.target.dataset.id);
        const isIncrease = e.target.textContent === '+';
        const item = this.items.find(item => item.id === id);
        
        if (item) {
            if (isIncrease) {
                item.quantity += 1;
            } else if (item.quantity > 1) {
                item.quantity -= 1;
            }
            this.saveCart();
            this.updateCartDisplay();
            this.refreshCart();
        }
    }

    showProductInfo(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const productCard = e.target.closest('.product-card') || e.target.closest('.card') || e.target.closest('.col');
        const product = this.extractProductData(productCard);
        
        if (!product) {
            this.showNotification('Unable to load product information!');
            return;
        }
        
        const modalHTML = `
            <div class="modal fade" id="productModal" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${product.name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                                </div>
                                <div class="col-md-6">
                                    <div class="star-rating mb-2">☆☆☆☆☆</div>
                                    <h4 class="text-danger mb-3">$${product.price.toFixed(2)}</h4>
                                    <p class="text-muted">High-quality electric scooter with excellent performance and durability. Perfect for urban commuting and recreational rides.</p>
                                    <div class="d-flex gap-2 mt-4">
                                        <button class="btn btn-danger" onclick="cart.addModalProduct('${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
                                        <button class="btn btn-outline-secondary">Add to Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const existingModal = document.getElementById('productModal');
        if (existingModal) existingModal.remove();
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    }

    showCart() {
        let overlay = document.getElementById('cartOverlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'cartOverlay';
            overlay.className = 'cart-overlay';
            overlay.addEventListener('click', () => this.hideCart());
            document.body.appendChild(overlay);
        }

        let cartSidebar = document.getElementById('cartSidebar');
        if (!cartSidebar) {
            cartSidebar = document.createElement('div');
            cartSidebar.id = 'cartSidebar';
            cartSidebar.className = 'cart-sidebar';
            document.body.appendChild(cartSidebar);
        }

        this.renderCart(cartSidebar);
        
        setTimeout(() => {
            cartSidebar.classList.add('open');
            overlay.classList.add('show');
        }, 10);
    }

    renderCart(cartSidebar) {
        let cartHTML = `
            <div class="cart-sidebar-header">
                <h5 class="mb-0">Shopping Cart</h5>
                <button type="button" class="btn-close" onclick="cart.hideCart()"></button>
            </div>
            <div class="cart-sidebar-body">
        `;

        if (this.items.length === 0) {
            cartHTML += `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your cart is empty</p>
                </div>
            `;
        } else {
            this.items.forEach(item => {
                cartHTML += `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                            <div class="cart-quantity-controls">
                                <button type="button" class="cart-quantity-btn" data-id="${item.id}" onclick="cart.decreaseQuantity(${item.id})">-</button>
                                <span>${item.quantity}</span>
                                <button type="button" class="cart-quantity-btn" data-id="${item.id}" onclick="cart.increaseQuantity(${item.id})">+</button>
                                <button type="button" class="cart-remove-btn" data-id="${item.id}" onclick="cart.removeItem(${item.id})">Remove</button>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        cartHTML += '</div>';

        if (this.items.length > 0) {
            cartHTML += `
                <div class="cart-sidebar-footer">
                    <div class="cart-total">Total: $${this.getTotal().toFixed(2)}</div>
                    <button class="btn btn-outline-danger w-100 mb-2" onclick="cart.viewCart()">View Cart</button>
                    <button class="btn btn-danger w-100" onclick="cart.checkout()">Checkout</button>
                </div>
            `;
        }

        cartSidebar.innerHTML = cartHTML;
    }

    hideCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        const overlay = document.getElementById('cartOverlay');
        
        if (cartSidebar) cartSidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
    }

    refreshCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        if (cartSidebar && cartSidebar.classList.contains('open')) {
            this.renderCart(cartSidebar);
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    updateCartDisplay() {
        const cartBadges = document.querySelectorAll('.cart-logo .badge');
        const uniqueProductCount = this.items.length;
        
        cartBadges.forEach(badge => {
            if (badge && badge.closest('.cart-logo')) {
                badge.textContent = uniqueProductCount;
                badge.style.display = uniqueProductCount > 0 ? 'inline-block' : 'none';
            }
        });
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    increaseQuantity(id) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.quantity += 1;
            this.saveCart();
            this.updateCartDisplay();
            this.refreshCart();
        }
    }

    decreaseQuantity(id) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                this.items = this.items.filter(cartItem => cartItem.id !== id);
            }
            this.saveCart();
            this.updateCartDisplay();
            this.refreshCart();
        }
    }

    showNotification(message) {
        // Remove any existing notifications
        const existingNotifications = document.querySelectorAll('.cart-notification');
        existingNotifications.forEach(notif => notif.remove());
        
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <div class="alert alert-success position-fixed" 
                 style="bottom: 50px; left: 50%; transform: translateX(-50%); z-index: 9999; min-width: 300px; text-align: center; animation: slideUp 0.3s ease;">
                ${message}
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification && notification.parentNode) {
                notification.style.opacity = '0';
                notification.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 1000);
    }

    viewCart() {
        window.location.href = 'cart.html';
    }

    checkout() {
        if (this.items.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        // Redirect to checkout page
        window.location.href = 'checkout.html';
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Ensure cart badge is updated when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure DOM is fully loaded
    setTimeout(() => {
        cart.updateCartDisplay();
    }, 100);
});

// Also update when page becomes visible (for browser back/forward)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        cart.updateCartDisplay();
    }
});

// Test function to add item to cart (for debugging)
window.testAddToCart = function() {
    const testItem = {
        id: Date.now(),
        name: 'Test Scooter',
        price: 500,
        image: 'photo/imgi_2_scooter-01.png',
        quantity: 1
    };
    cart.addItem(testItem);
    console.log('Test item added to cart');
};

// Function to clear cart (for testing)
window.clearCart = function() {
    cart.items = [];
    cart.saveCart();
    cart.updateCartDisplay();
    console.log('Cart cleared');
};

// Add CSS for cart sidebar
const cartCSS = `
.cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.cart-overlay.show {
    opacity: 1;
    visibility: visible;
}

.cart-sidebar {
    position: fixed;
    top: 0;
    right: -500px;
    width: 500px;
    height: 100%;
    background: white;
    z-index: 1001;
    transition: right 0.3s ease;
    display: flex;
    flex-direction: column;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
}

.cart-sidebar.open {
    right: 0;
}

.cart-sidebar-header {
    padding: 25px 30px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-sidebar-header h5 {
    font-size: 20px;
    font-weight: 700;
}

.cart-sidebar-body {
    flex: 1;
    padding: 25px 30px;
    overflow-y: auto;
}

.cart-sidebar-footer {
    padding: 25px 30px;
    border-top: 1px solid #eee;
}

.cart-item {
    display: flex;
    gap: 15px;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
}

.cart-item img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
}

.cart-item-details {
    flex: 1;
}

.cart-item-name {
    font-weight: 600;
    margin-bottom: 5px;
}

.cart-item-price {
    color: #dc3545;
    font-weight: 500;
    margin-bottom: 10px;
}

.cart-quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.cart-quantity-btn {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 3px;
    cursor: pointer;
}

.cart-remove-btn {
    background: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
}

.cart-remove-btn:hover {
    background: #dc3545;
    color: white;
}

.cart-total {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
    text-align: center;
}

.empty-cart {
    text-align: center;
    padding: 50px 20px;
    color: #999;
}

.empty-cart i {
    font-size: 3rem;
    margin-bottom: 20px;
}

@media (max-width: 480px) {
    .cart-sidebar {
        width: 100%;
        right: -100%;
    }
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = cartCSS;
document.head.appendChild(style);

// Product Sorting Functionality
class ProductSorter {
    constructor() {
        this.initSorting();
    }

    initSorting() {
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortProducts(e.target.value);
            });
        }
    }

    sortProducts(sortType) {
        const productContainer = document.querySelector('.row.row-cols-1, .row.g-4, .row.g-3');
        if (!productContainer) return;

        const products = Array.from(productContainer.children).filter(child => 
            child.classList.contains('col') || child.classList.contains('col-lg-3')
        );

        products.sort((a, b) => {
            const titleA = this.getProductTitle(a);
            const titleB = this.getProductTitle(b);
            const priceA = this.getProductPrice(a);
            const priceB = this.getProductPrice(b);

            switch (sortType) {
                case 'name-asc':
                    return titleA.localeCompare(titleB);
                case 'name-desc':
                    return titleB.localeCompare(titleA);
                case 'price-asc':
                    return priceA - priceB;
                case 'price-desc':
                    return priceB - priceA;
                default:
                    return 0;
            }
        });

        // Re-append sorted products
        products.forEach(product => productContainer.appendChild(product));
    }

    getProductTitle(productElement) {
        const titleElement = productElement.querySelector('h3, h5, .card-title');
        return titleElement ? titleElement.textContent.trim() : '';
    }

    getProductPrice(productElement) {
        const priceElement = productElement.querySelector('.card-price, .text-muted:not(.text-decoration-line-through)');
        if (priceElement) {
            const priceText = priceElement.textContent.replace(/[^0-9.]/g, '');
            return parseFloat(priceText) || 0;
        }
        return 0;
    }
}

// Initialize sorting when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new ProductSorter();
});