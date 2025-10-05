// Universal Product Navigation Handler
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to all product cards
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent navigation when clicking action buttons
            if (e.target.closest('.product-actions')) {
                return;
            }
            
            const productId = this.getAttribute('data-product') || this.getAttribute('data-product-id');
            if (productId) {
                navigateToProduct(productId);
            }
        });
        
        // Add touch support for mobile
        card.addEventListener('touchstart', function(e) {
            if (e.target.closest('.product-actions')) {
                return;
            }
            
            const productId = this.getAttribute('data-product') || this.getAttribute('data-product-id');
            if (productId) {
                navigateToProduct(productId);
            }
        });
    });
});

function navigateToProduct(productId) {
    const lockProducts = [
        'goodlock-j10', 'hammer-scooter-lock', 'steelguard-lock', 'max-secure-lock',
        'compact-lock', 'u-lock-force-max', 'unbeatable-lock-100'
    ];
    
    // Check if it's specifically a lock product
    if (lockProducts.includes(productId) || productId.includes('lock')) {
        window.location.href = `lock-template.html?id=${productId}`;
    } else {
        // All other products default to scooter template
        window.location.href = `scooter-template.html?id=${productId}`;
    }
}