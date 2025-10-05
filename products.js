// Shared product database for all templates
const allProducts = {
  // Electric Scooters
  'libero-x250': {
    name: 'Libero X250', 
    price: 750.00, 
    image: 'Shop All/imgi_71_product-02-a.jpg', 
    description: '250 Watt Electric Scooter with 30km battery range', 
    category: 'scooter',
    batteryRange: '30 km', 
    chargingTime: '3-4 hours', 
    topSpeed: '25 km/h'
  },
  'libero-x150': {
    name: 'Libero X150', 
    price: 750.00, 
    image: 'electric/scooty2.jpg', 
    description: 'Compact and efficient electric scooter', 
    category: 'scooter',
    batteryRange: '25 km', 
    chargingTime: '3-4 hours', 
    topSpeed: '22 km/h'
  },
  'libero-x350': {
    name: 'Libero X350', 
    price: 799.00, 
    image: 'Shop All/imgi_66_product-01-a.jpg', 
    description: 'Premium electric scooter with advanced features and exceptional performance.', 
    category: 'scooter',
    batteryRange: '50 km', 
    chargingTime: '4-5 hours', 
    topSpeed: '40 km/h'
  },
  'practico-s2-exclusive': {
    name: 'Practico S2 Exclusive', 
    price: 600.00, 
    image: 'Shop All/imgi_101_product-04-a.jpg', 
    description: 'Exclusive edition with enhanced features and premium styling.', 
    category: 'scooter',
    batteryRange: '35 km', 
    chargingTime: '4-5 hours', 
    topSpeed: '30 km/h'
  },
  'booster-brave-f1': {
    name: 'Booster Brave F1', 
    price: 490.00, 
    image: 'electric/scooty1.jpg', 
    description: 'Compact and efficient electric scooter', 
    category: 'scooter',
    batteryRange: '25 km', 
    chargingTime: '3 hours', 
    topSpeed: '22 km/h'
  },
  'urban-glide-g2': {
    name: 'Urban Glide G2', 
    price: 520.00, 
    image: 'electric/scooty4.jpg', 
    description: 'Perfect for urban commuting', 
    category: 'scooter',
    batteryRange: '27 km', 
    chargingTime: '3-4 hours', 
    topSpeed: '24 km/h'
  },
  'city-sprinter-pro': {
    name: 'City Sprinter Pro', 
    price: 680.00, 
    image: 'Shop All/imgi_106_product-05-a.jpg', 
    description: 'Professional grade electric scooter', 
    category: 'scooter',
    batteryRange: '32 km', 
    chargingTime: '4 hours', 
    topSpeed: '28 km/h'
  },
  'eco-rider-z1': {
    name: 'Eco Rider Z1', 
    price: 430.00, 
    image: 'Shop All/imgi_111_product-09-a.jpg', 
    description: 'Eco-friendly and affordable', 
    category: 'scooter',
    batteryRange: '22 km', 
    chargingTime: '3 hours', 
    topSpeed: '20 km/h'
  },
  'volt-runner': {
    name: 'Volt Runner', 
    price: 599.00, 
    image: 'Shop All/imgi_116_product-07-a.jpg', 
    description: 'High-speed performance scooter', 
    category: 'scooter',
    batteryRange: '30 km', 
    chargingTime: '4 hours', 
    topSpeed: '26 km/h'
  },
  'practico-s2': {
    name: 'Practico S2', 
    price: 615.00, 
    image: 'Shop All/imgi_56_product-13-a.jpg', 
    description: 'Reliable and durable electric scooter', 
    category: 'scooter',
    batteryRange: '28 km', 
    chargingTime: '3-4 hours', 
    topSpeed: '25 km/h'
  },
  'thunder-bolt-x1': {
    name: 'Thunder Bolt X1', 
    price: 850.00, 
    image: 'electric/scooty11.jpg', 
    description: 'High-performance electric scooter', 
    category: 'scooter',
    batteryRange: '45 km', 
    chargingTime: '5 hours', 
    topSpeed: '35 km/h'
  },
  'speed-master-pro': {
    name: 'Speed Master Pro', 
    price: 720.00, 
    image: 'electric/scooty12.jpg', 
    description: 'Professional speed and performance', 
    category: 'scooter',
    batteryRange: '38 km', 
    chargingTime: '4-5 hours', 
    topSpeed: '32 km/h'
  },
  'elite-rider-z2': {
    name: 'Elite Rider Z2', 
    price: 920.00, 
    image: 'electric/scooty13.jpg', 
    description: 'Elite performance and luxury', 
    category: 'scooter',
    batteryRange: '50 km', 
    chargingTime: '5-6 hours', 
    topSpeed: '38 km/h'
  },
  'power-glide-max': {
    name: 'Power Glide Max', 
    price: 780.00, 
    image: 'electric/scooty1.jpg', 
    description: 'Maximum power and range', 
    category: 'scooter',
    batteryRange: '40 km', 
    chargingTime: '4-5 hours', 
    topSpeed: '30 km/h'
  },
  'urban-swift-s3': {
    name: 'Urban Swift S3', 
    price: 650.00, 
    image: 'electric/scooty2.jpg', 
    description: 'Swift urban mobility solution', 
    category: 'scooter',
    batteryRange: '32 km', 
    chargingTime: '4 hours', 
    topSpeed: '28 km/h'
  },
  'turbo-charge-elite': {
    name: 'Turbo Charge Elite', 
    price: 890.00, 
    image: 'electric/scooty3.jpg', 
    description: 'Elite turbo performance', 
    category: 'scooter',
    batteryRange: '48 km', 
    chargingTime: '5 hours', 
    topSpeed: '36 km/h'
  },

  // Security Locks
  'u-lock-force-max': {
    name: 'U-Lock Force MAX', 
    price: 75.00, 
    image: 'Shop All/imgi_131_product-15-a.jpg', 
    description: 'Maximum security with robust U-lock design and hardened steel construction.', 
    category: 'lock',
    securityLevel: 'Maximum', 
    material: 'Hardened Steel', 
    smartCompatibility: 'No'
  },
  'unbeatable-lock-100': {
    name: 'Unbeatable Lock 100', 
    price: 65.00, 
    image: 'Shop All/imgi_126_product-14-a.jpg', 
    description: 'Reliable security at an affordable price point, perfect for everyday protection.', 
    category: 'lock',
    securityLevel: 'Standard', 
    material: 'Steel Alloy', 
    smartCompatibility: 'No'
  },
  'goodlock-j10': {
    name: 'GoodLock J10', 
    price: 95.00, 
    image: 'Shop All/imgi_131_product-15-a.jpg', 
    description: 'Premium security lock with advanced features', 
    category: 'lock',
    securityLevel: 'High', 
    material: 'Reinforced Steel', 
    smartCompatibility: 'Yes'
  },
  'hammer-scooter-lock': {
    name: 'Hammer Scooter Lock', 
    price: 75.00, 
    image: 'Shop All/imgi_126_product-14-a.jpg', 
    description: 'Heavy-duty hammer-resistant lock', 
    category: 'lock',
    securityLevel: 'High', 
    material: 'Hardened Steel', 
    smartCompatibility: 'No'
  },
  'steelguard-lock': {
    name: 'SteelGuard Lock', 
    price: 85.00, 
    image: 'Shop All/imgi_136_product-16-a.jpg', 
    description: 'Professional grade steel lock', 
    category: 'lock',
    securityLevel: 'Maximum', 
    material: 'Steel Guard', 
    smartCompatibility: 'No'
  },
  'max-secure-lock': {
    name: 'Max Secure Lock', 
    price: 110.00, 
    image: 'Shop All/imgi_121_product-08-a.jpg', 
    description: 'Maximum security lock system', 
    category: 'lock',
    securityLevel: 'Maximum', 
    material: 'Reinforced Steel', 
    smartCompatibility: 'Yes'
  },
  'compact-lock': {
    name: 'Compact Lock', 
    price: 60.00, 
    image: 'Shop All/imgi_61_product-17-a.jpg', 
    description: 'Compact and lightweight lock', 
    category: 'lock',
    securityLevel: 'Standard', 
    material: 'Steel Alloy', 
    smartCompatibility: 'No'
  }
};