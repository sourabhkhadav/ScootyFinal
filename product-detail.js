// Product data
const products = {
    'booster-brave-f1': {
        name: 'Booster Brave F1',
        price: '$490.00',
        image: 'Shop All/imgi_66_product-01-a.jpg',
        gallery: ['Shop All/imgi_66_product-01-a.jpg'],
        description: 'The Booster Brave F1 is a high-performance electric scooter designed for urban commuting. With its powerful motor and long-lasting battery, it delivers exceptional speed and range.',
        features: [
            'Powerful 350W motor',
            'Long-range 25km battery',
            'LED headlight and taillight',
            'Foldable design for easy storage',
            'Anti-slip deck surface'
        ],
        specifications: {
            'Max Speed': '25 km/h',
            'Range': '25 km',
            'Motor Power': '350W',
            'Battery': '36V 7.8Ah',
            'Weight': '12.5 kg',
            'Max Load': '100 kg'
        },
        sizes: ['LG', 'MD', 'SM', 'XL'],
        category: 'scooter'
    },
    'goodlock-j10': {
        name: 'GoodLock J10',
        price: '$95.00',
        image: 'Shop All/imgi_131_product-15-a.jpg',
        gallery: ['Shop All/imgi_131_product-15-a.jpg'],
        description: 'The GoodLock J10 is a premium security lock designed to keep your electric scooter safe. Built with hardened steel and advanced locking mechanism.',
        features: [
            'Hardened steel construction',
            'Weather-resistant coating',
            'Anti-theft design',
            'Compact and lightweight',
            'Easy to use mechanism'
        ],
        specifications: {
            'Material': 'Hardened Steel',
            'Weight': '0.8 kg',
            'Dimensions': '15 x 8 x 3 cm',
            'Lock Type': 'Key Lock',
            'Security Rating': 'High'
        },
        category: 'accessory'
    },
    'hammer-scooter-lock': {
        name: 'Hammer Scooter Lock',
        price: '$75.00',
        image: 'Shop All/imgi_126_product-14-a.jpg',
        gallery: ['Shop All/imgi_126_product-14-a.jpg'],
        description: 'The Hammer Scooter Lock provides robust security for your electric scooter with its heavy-duty construction and reliable locking mechanism.',
        features: [
            'Heavy-duty construction',
            'Corrosion-resistant finish',
            'Universal compatibility',
            'Secure locking system',
            'Portable design'
        ],
        specifications: {
            'Material': 'Steel Alloy',
            'Weight': '1.2 kg',
            'Cable Length': '120 cm',
            'Lock Type': 'Combination',
            'Security Level': 'Medium-High'
        },
        category: 'accessory'
    },
    'libero-x150': {
        name: 'Libero X150',
        price: '$750.00',
        image: 'Shop All/imgi_71_product-02-a.jpg',
        gallery: ['Shop All/imgi_71_product-02-a.jpg'],
        description: 'The Libero X150 combines style and performance in a premium electric scooter package. Perfect for daily commuting with advanced features.',
        features: [
            'Premium build quality',
            'Advanced suspension system',
            'Smart display panel',
            'Regenerative braking',
            'App connectivity'
        ],
        specifications: {
            'Max Speed': '30 km/h',
            'Range': '35 km',
            'Motor Power': '500W',
            'Battery': '48V 10Ah',
            'Weight': '15 kg',
            'Max Load': '120 kg'
        },
        category: 'scooter'
    },
    'urban-glide-g2': {
        name: 'Urban Glide G2',
        price: '$520.00',
        image: 'Shop All/imgi_101_product-04-a.jpg',
        gallery: ['Shop All/imgi_101_product-04-a.jpg'],
        description: 'Urban Glide G2 is designed for city riders who demand reliability and style. Features modern design with practical functionality.',
        features: [
            'Lightweight aluminum frame',
            'Puncture-resistant tires',
            'Quick-fold mechanism',
            'Integrated lighting system',
            'Smartphone holder'
        ],
        specifications: {
            'Max Speed': '25 km/h',
            'Range': '30 km',
            'Motor Power': '400W',
            'Battery': '36V 8.5Ah',
            'Weight': '13 kg',
            'Max Load': '100 kg'
        },
        category: 'scooter'
    },
    'city-sprinter-pro': {
        name: 'City Sprinter Pro',
        price: '$680.00',
        image: 'Shop All/imgi_106_product-05-a.jpg',
        gallery: ['Shop All/imgi_106_product-05-a.jpg'],
        description: 'City Sprinter Pro offers professional-grade performance for serious commuters. Built for durability and long-distance travel.',
        features: [
            'Professional-grade components',
            'Extended battery life',
            'Dual braking system',
            'All-weather capability',
            'Premium comfort features'
        ],
        specifications: {
            'Max Speed': '35 km/h',
            'Range': '40 km',
            'Motor Power': '600W',
            'Battery': '48V 12Ah',
            'Weight': '16.5 kg',
            'Max Load': '130 kg'
        },
        category: 'scooter'
    },
    'eco-rider-z1': {
        name: 'Eco Rider Z1',
        price: '$430.00',
        image: 'Shop All/imgi_111_product-09-a.jpg',
        gallery: ['Shop All/imgi_111_product-09-a.jpg'],
        description: 'Eco Rider Z1 is an environmentally conscious choice that doesn\'t compromise on performance. Perfect for eco-friendly transportation.',
        features: [
            'Eco-friendly materials',
            'Energy-efficient motor',
            'Recyclable components',
            'Low maintenance design',
            'Quiet operation'
        ],
        specifications: {
            'Max Speed': '22 km/h',
            'Range': '28 km',
            'Motor Power': '300W',
            'Battery': '36V 7Ah',
            'Weight': '11.5 kg',
            'Max Load': '90 kg'
        },
        category: 'scooter'
    },
    'steelguard-lock': {
        name: 'SteelGuard Lock',
        price: '$85.00',
        image: 'Shop All/imgi_136_product-16-a.jpg',
        gallery: ['Shop All/imgi_136_product-16-a.jpg'],
        description: 'SteelGuard Lock provides maximum security with its reinforced steel construction and advanced locking technology.',
        features: [
            'Reinforced steel core',
            'Pick-resistant cylinder',
            'Weather-proof coating',
            'Compact storage',
            'High security rating'
        ],
        specifications: {
            'Material': 'Reinforced Steel',
            'Weight': '1.5 kg',
            'Shackle Diameter': '13mm',
            'Lock Type': 'Key Lock',
            'Security Rating': 'Maximum'
        },
        category: 'accessory'
    },
    'volt-runner': {
        name: 'Volt Runner',
        price: '$599.00',
        image: 'Shop All/imgi_116_product-07-a.jpg',
        gallery: ['Shop All/imgi_116_product-07-a.jpg'],
        description: 'Volt Runner delivers exceptional performance with its powerful motor and advanced battery technology. Built for speed enthusiasts.',
        features: [
            'High-performance motor',
            'Fast charging capability',
            'Sport mode settings',
            'Premium suspension',
            'Racing-inspired design'
        ],
        specifications: {
            'Max Speed': '32 km/h',
            'Range': '38 km',
            'Motor Power': '550W',
            'Battery': '48V 11Ah',
            'Weight': '14.8 kg',
            'Max Load': '110 kg'
        },
        category: 'scooter'
    },
    'max-secure-lock': {
        name: 'Max Secure Lock',
        price: '$110.00',
        image: 'Shop All/imgi_121_product-08-a.jpg',
        gallery: ['Shop All/imgi_121_product-08-a.jpg'],
        description: 'Max Secure Lock offers premium protection with its advanced security features and durable construction.',
        features: [
            'Premium security features',
            'Drill-resistant design',
            'All-weather durability',
            'Easy mounting system',
            'Professional grade'
        ],
        specifications: {
            'Material': 'Hardened Steel',
            'Weight': '2.1 kg',
            'Cable Length': '150 cm',
            'Lock Type': 'Smart Lock',
            'Security Level': 'Premium'
        },
        category: 'accessory'
    },
    'practico-s2': {
        name: 'Practico S2',
        price: '$615.00',
        image: 'Shop All/imgi_56_product-13-a.jpg',
        gallery: ['Shop All/imgi_56_product-13-a.jpg'],
        description: 'Practico S2 combines practicality with performance, offering a reliable solution for daily transportation needs.',
        features: [
            'Practical design features',
            'Reliable performance',
            'User-friendly interface',
            'Maintenance-free operation',
            'Value-oriented pricing'
        ],
        specifications: {
            'Max Speed': '28 km/h',
            'Range': '32 km',
            'Motor Power': '450W',
            'Battery': '36V 9Ah',
            'Weight': '13.5 kg',
            'Max Load': '105 kg'
        },
        category: 'scooter'
    },
    'compact-lock': {
        name: 'Compact Lock',
        price: '$60.00',
        image: 'Shop All/imgi_61_product-17-a.jpg',
        gallery: ['Shop All/imgi_61_product-17-a.jpg'],
        description: 'Compact Lock offers essential security in a lightweight, portable design. Perfect for everyday use and travel.',
        features: [
            'Lightweight design',
            'Portable size',
            'Essential security',
            'Easy to carry',
            'Budget-friendly'
        ],
        specifications: {
            'Material': 'Steel',
            'Weight': '0.5 kg',
            'Dimensions': '12 x 6 x 2 cm',
            'Lock Type': 'Key Lock',
            'Security Rating': 'Standard'
        },
        category: 'accessory'
    },
    'libero-x350': {
        name: 'Libero X350',
        price: '$799.00',
        image: 'Shop All/imgi_66_product-01-a.jpg',
        gallery: ['photo/imgi_3_product-03-a-400x525.jpg'],
        description: 'Libero X350 represents the pinnacle of electric scooter technology with premium features and exceptional performance.',
        features: [
            'Premium technology',
            'Exceptional performance',
            'Luxury features',
            'Advanced safety systems',
            'Professional grade build'
        ],
        specifications: {
            'Max Speed': '40 km/h',
            'Range': '50 km',
            'Motor Power': '750W',
            'Battery': '48V 15Ah',
            'Weight': '18 kg',
            'Max Load': '150 kg'
        },
        category: 'scooter'
    },
    'practico-s2-exclusive': {
        name: 'Practico S2 Exclusive',
        price: '$600.00',
        image: 'photo/imgi_4_product-04-a-400x525.jpg',
        gallery: ['photo/imgi_4_product-04-a-400x525.jpg'],
        description: 'Practico S2 Exclusive edition offers enhanced features and premium styling for discerning riders.',
        features: [
            'Exclusive edition features',
            'Premium styling',
            'Enhanced performance',
            'Limited edition design',
            'Collector quality'
        ],
        specifications: {
            'Max Speed': '30 km/h',
            'Range': '35 km',
            'Motor Power': '500W',
            'Battery': '48V 10Ah',
            'Weight': '14 kg',
            'Max Load': '110 kg'
        },
        category: 'scooter'
    },
    'u-lock-force-max': {
        name: 'U-Lock Force MAX',
        price: '$75.00',
        image: 'photo/imgi_5_product-15-a-400x525.jpg',
        gallery: ['photo/imgi_5_product-15-a-400x525.jpg'],
        description: 'U-Lock Force MAX provides maximum security with its robust U-lock design and hardened steel construction.',
        features: [
            'Robust U-lock design',
            'Maximum security rating',
            'Hardened steel shackle',
            'Weather resistant',
            'Professional grade'
        ],
        specifications: {
            'Material': 'Hardened Steel',
            'Weight': '1.8 kg',
            'Shackle Size': '230 x 110mm',
            'Lock Type': 'Key Lock',
            'Security Rating': 'Maximum'
        },
        category: 'accessory'
    },
    'unbeatable-lock-100': {
        name: 'Unbeatable Lock 100',
        price: '$69.00',
        image: 'photo/imgi_6_product-16-a-400x525.jpg',
        gallery: ['photo/imgi_6_product-16-a-400x525.jpg'],
        description: 'Unbeatable Lock 100 offers reliable security at an affordable price point, perfect for everyday protection.',
        features: [
            'Reliable security',
            'Affordable pricing',
            'Everyday protection',
            'Easy to use',
            'Durable construction'
        ],
        specifications: {
            'Material': 'Steel Alloy',
            'Weight': '1.0 kg',
            'Cable Length': '100 cm',
            'Lock Type': 'Combination',
            'Security Level': 'Standard'
        },
        category: 'accessory'
    }
};

// Get product ID from URL parameters
function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('product');
}

// Load product data
function loadProduct() {
    const productId = getProductId();
    const product = products[productId];
    
    if (!product) {
        // Redirect to shop if product not found
        window.location.href = 'shop.html';
        return;
    }
    
    // Update page title
    document.title = `${product.name} - Electric Scooters`;
    document.getElementById('product-title').textContent = `${product.name} - Electric Scooters`;
    
    // Update breadcrumb
    document.getElementById('breadcrumb-product').textContent = product.name;
    
    // Update product info
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('main-product-image').src = product.image;
    document.getElementById('main-product-image').alt = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('detailed-description').textContent = product.description;
    
    // Update features
    const featuresContainer = document.getElementById('product-features');
    featuresContainer.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check text-success me-2"></i>${feature}`;
        featuresContainer.appendChild(li);
    });
    
    // Update specifications
    const specsTable = document.getElementById('specifications-table');
    specsTable.innerHTML = '';
    Object.entries(product.specifications).forEach(([key, value]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td><strong>${key}:</strong></td><td>${value}</td>`;
        specsTable.appendChild(tr);
    });
    
    // Handle sizes (for scooters with size options)
    if (product.sizes && product.sizes.length > 0) {
        document.getElementById('size-selection').style.display = 'block';
        const sizeOptions = document.getElementById('size-options');
        sizeOptions.innerHTML = '';
        product.sizes.forEach(size => {
            const button = document.createElement('button');
            button.className = 'btn btn-sm btn-outline-secondary';
            button.textContent = size;
            button.onclick = () => selectSize(button);
            sizeOptions.appendChild(button);
        });
    }
    
    // Load gallery
    loadGallery(product);
    
    // Load features grid
    loadFeaturesGrid(product);
    
    // Load related products
    loadRelatedProducts(product);
}

// Load product gallery
function loadGallery(product) {
    const gallery = document.getElementById('product-gallery');
    gallery.innerHTML = '';
    
    product.gallery.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `${product.name} ${index + 1}`;
        img.className = `bg-light p-2 rounded ${index === 0 ? 'active' : ''}`;
        img.onclick = () => changeMainImage(img.src, img);
        gallery.appendChild(img);
    });
}

// Change main product image
function changeMainImage(src, clickedImg) {
    document.getElementById('main-product-image').src = src;
    
    // Update active state
    document.querySelectorAll('.product-gallery img').forEach(img => {
        img.classList.remove('active');
    });
    clickedImg.classList.add('active');
}

// Select size
function selectSize(button) {
    // Remove active state from all size buttons
    document.querySelectorAll('#size-options .btn').forEach(btn => {
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-outline-secondary');
    });
    
    // Add active state to clicked button
    button.classList.remove('btn-outline-secondary');
    button.classList.add('btn-danger');
}

// Load features grid
function loadFeaturesGrid(product) {
    const featuresGrid = document.getElementById('features-grid');
    featuresGrid.innerHTML = '';
    
    product.features.forEach((feature, index) => {
        const featureCard = document.createElement('div');
        featureCard.className = 'col-md-6';
        featureCard.innerHTML = `
            <div class="d-flex align-items-start p-3 border rounded">
                <div class="flex-shrink-0 me-3">
                    <i class="fas fa-check-circle text-success fs-4"></i>
                </div>
                <div>
                    <h6 class="mb-1">Feature ${index + 1}</h6>
                    <p class="mb-0 text-muted">${feature}</p>
                </div>
            </div>
        `;
        featuresGrid.appendChild(featureCard);
    });
}

// Load related products
function loadRelatedProducts(currentProduct) {
    const relatedContainer = document.getElementById('related-products');
    relatedContainer.innerHTML = '';
    
    // Get products from same category, excluding current product
    const relatedProducts = Object.entries(products)
        .filter(([id, product]) => product.category === currentProduct.category && product.name !== currentProduct.name)
        .slice(0, 4); // Show max 4 related products
    
    relatedProducts.forEach(([id, product]) => {
        const productCard = createProductCard(id, product);
        relatedContainer.appendChild(productCard);
    });
}

// Create product card for related products
function createProductCard(id, product) {
    const col = document.createElement('div');
    col.className = 'col';
    
    col.innerHTML = `
        <div class="card h-100 border-0" style="cursor: pointer;" onclick="goToProduct('${id}')">
            <div class="product-image-wrapper bg-light">
                <img src="${product.image}" alt="${product.name}" style="height: 250px; object-fit: contain; width: 100%;">
            </div>
            <div class="card-body pt-2 text-start">
                <div class="star-rating mb-2">★★★★★</div>
                <h6 class="card-title mb-2">${product.name}</h6>
                <p class="card-price mb-3 text-danger fw-bold">${product.price}</p>
            </div>
        </div>
    `;
    
    return col;
}

// Navigate to product
function goToProduct(productId) {
    window.location.href = `product-detail.html?product=${productId}`;
}

// Quantity controls
function updateQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value) || 1;
    const newValue = Math.max(1, currentValue + change);
    quantityInput.value = newValue;
}

// Add to cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Quantity increase/decrease buttons
    const decreaseBtn = document.querySelector('.quantity-decrease');
    const increaseBtn = document.querySelector('.quantity-increase');
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => updateQuantity(-1));
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => updateQuantity(1));
    }
    
    // Add to cart button
    const addToCartBtn = document.querySelector('.btn-add-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const quantity = parseInt(document.getElementById('quantity').value) || 1;
            const productId = getProductId();
            const product = products[productId];
            
            if (product && window.cart) {
                // Extract price as number
                const price = parseFloat(product.price.replace('$', ''));
                
                // Create product object for cart
                const cartProduct = {
                    id: Date.now() + Math.random(),
                    name: product.name,
                    price: price,
                    image: product.image,
                    quantity: quantity
                };
                
                // Add to cart using global cart system
                for (let i = 0; i < quantity; i++) {
                    window.cart.addItem({
                        ...cartProduct,
                        quantity: 1,
                        id: Date.now() + Math.random() + i
                    });
                }
                
                // Show notification
                window.cart.showNotification(`${quantity} x ${product.name} added to cart!`);
            }
        });
    }
    
    // Load product when page loads
    loadProduct();
});

// Make functions globally available
window.goToProduct = goToProduct;
window.updateQuantity = updateQuantity;