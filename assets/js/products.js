/**
 * Affiliate Global - Product Database
 * Comprehensive product data for the affiliate tech site.
 * Last updated: June 2026
 */

const products = [
  // ============================
  // SMARTPHONES
  // ============================
  {
    id: 1,
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    price: 1499,
    originalPrice: 1599,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=iPhone+16+Pro+Max',
    rating: 4.8,
    reviews: 12453,
    description: 'Apple\'s most advanced iPhone featuring the A18 Pro chip, 48MP Fusion camera system with 5x Telephoto, and a stunning 6.9-inch Super Retina XDR display with ProMotion.',
    features: [
      'A18 Pro chip with 6-core GPU',
      '48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto',
      '6.9" Super Retina XDR OLED with ProMotion 120Hz',
      'Titanium design — natural, desert, white, black',
      'USB-C with Thunderbolt 4 support',
      'iOS 20 with Apple Intelligence',
      'Up to 33 hours video playback',
      'Satellite SOS and Crash Detection'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S25 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    price: 1399,
    originalPrice: 1499,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Galaxy+S25+Ultra',
    rating: 4.7,
    reviews: 9872,
    description: 'Samsung\'s ultimate flagship with the Snapdragon 8 Gen 4 processor, a quad-camera system with 200MP main sensor, built-in S Pen, and Galaxy AI capabilities.',
    features: [
      'Snapdragon 8 Gen 4 for Galaxy',
      '200MP + 50MP + 12MP + 10MP quad camera',
      '6.9" Dynamic AMOLED 2X 120Hz',
      'Built-in S Pen with Air Actions',
      'Galaxy AI — Live Translate, Note Assist',
      '5000mAh battery with 65W fast charging',
      'Titanium frame with Gorilla Glass Victus 3',
      'Android 16 with 7 years of updates'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Best Seller'
  },
  {
    id: 3,
    name: 'Google Pixel 10 Pro',
    brand: 'Google',
    category: 'smartphones',
    price: 999,
    originalPrice: 1099,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Pixel+10+Pro',
    rating: 4.6,
    reviews: 5634,
    description: 'Google\'s AI-first flagship with the Tensor G5 chip, a 64MP main camera with computational photography wizardry, and seven years of OS updates.',
    features: [
      'Google Tensor G5 chip',
      '64MP + 48MP + 48MP triple camera',
      '6.7" LTPO OLED 120Hz',
      'Magic Editor, Best Take, Audio Magic Eraser',
      'Gemini Nano on-device AI',
      '5050mAh battery',
      'IP68 water and dust resistance',
      '7 years of OS, security, and Pixel Drops'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },
  {
    id: 4,
    name: 'Xiaomi 15 Pro',
    brand: 'Xiaomi',
    category: 'smartphones',
    price: 799,
    originalPrice: 899,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Xiaomi+15+Pro',
    rating: 4.5,
    reviews: 4210,
    description: 'Flagship killer from Xiaomi with the Snapdragon 8 Gen 4, Leica optics triple camera, and a massive 5400mAh battery with 120W HyperCharge.',
    features: [
      'Snapdragon 8 Gen 4',
      '50MP Leica Summilux + 50MP + 50MP triple',
      '6.73" AMOLED 120Hz LTPO',
      '5400mAh battery with 120W wired / 80W wireless',
      'HyperOS 2 based on Android 16',
      'IP68 rating',
      'In-display ultrasonic fingerprint sensor',
      'Quad-curved display design'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Sale'
  },
  {
    id: 5,
    name: 'iPhone 16',
    brand: 'Apple',
    category: 'smartphones',
    price: 899,
    originalPrice: 999,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=iPhone+16',
    rating: 4.6,
    reviews: 8210,
    description: 'The standard iPhone 16 delivers A18 performance, a 48MP dual-camera system, and the new Camera Control button — all at a more accessible price.',
    features: [
      'A18 chip with 5-core GPU',
      '48MP + 12MP dual camera',
      '6.1" Super Retina XDR OLED',
      'Camera Control button',
      'Apple Intelligence ready',
      'USB-C',
      'IP68 water resistance',
      'Up to 22 hours video playback'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'New'
  },
  {
    id: 6,
    name: 'Samsung Galaxy S25+',
    brand: 'Samsung',
    category: 'smartphones',
    price: 999,
    originalPrice: null,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Galaxy+S25+Plus',
    rating: 4.5,
    reviews: 4891,
    description: 'The sweet spot in Samsung\'s lineup — all the Galaxy AI and Snapdragon 8 Gen 4 power of the Ultra in a slightly smaller, more affordable package.',
    features: [
      'Snapdragon 8 Gen 4 for Galaxy',
      '50MP + 12MP + 10MP triple camera',
      '6.7" Dynamic AMOLED 2X 120Hz',
      'Galaxy AI features',
      '4900mAh battery with 45W charging',
      '12GB RAM, up to 512GB storage',
      'Armor Aluminum 2 frame',
      'IP68 rated'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },
  {
    id: 7,
    name: 'Google Pixel 10',
    brand: 'Google',
    category: 'smartphones',
    price: 749,
    originalPrice: 799,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Pixel+10',
    rating: 4.4,
    reviews: 3240,
    description: 'Pure Google experience with the Tensor G5 chip, excellent camera performance, and the best software support in the business — all at a mid-range price.',
    features: [
      'Google Tensor G5',
      '64MP + 12MP dual camera',
      '6.3" OLED 120Hz',
      'Best Take, Magic Eraser, Photo Unblur',
      'Gemini AI assistant built-in',
      '4600mAh battery',
      '7 years of updates',
      'Matte finish back'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },

  // ============================
  // LAPTOPS
  // ============================
  {
    id: 8,
    name: 'MacBook Pro 16" M4 Max',
    brand: 'Apple',
    category: 'laptops',
    price: 3499,
    originalPrice: 3799,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=MacBook+Pro+M4+Max',
    rating: 4.9,
    reviews: 7654,
    description: 'The ultimate pro laptop with Apple\'s M4 Max chip featuring up to 16 CPU cores and 40 GPU cores, a breathtaking Liquid Retina XDR display, and up to 22 hours of battery life.',
    features: [
      'M4 Max chip (16-core CPU, 40-core GPU)',
      '48GB unified memory, 1TB SSD',
      '16.2" Liquid Retina XDR with ProMotion',
      'Three Thunderbolt 5 ports',
      'HDMI 2.1, SDXC card slot, MagSafe 3',
      '22 hours battery life',
      'Space Black, Silver finishes',
      '1080p FaceTime HD camera'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Best Seller'
  },
  {
    id: 9,
    name: 'Dell XPS 16 (2026)',
    brand: 'Dell',
    category: 'laptops',
    price: 2199,
    originalPrice: 2399,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Dell+XPS+16',
    rating: 4.6,
    reviews: 3241,
    description: 'Dell\'s stunning XPS 16 features an Intel Core Ultra 9 processor, NVIDIA RTX 5070 Ti graphics, and a gorgeous 4K OLED infinity-edge display in an ultra-premium chassis.',
    features: [
      'Intel Core Ultra 9 285H',
      'NVIDIA GeForce RTX 5070 Ti 12GB',
      '16.3" 4K+ OLED InfinityEdge touch',
      '32GB LPDDR5X RAM, 1TB SSD',
      'CNC machined aluminum with Gorilla Glass',
      'Thunderbolt 5, USB-C, HDMI 2.1',
      '1080p webcam with IR for Windows Hello',
      'Windows 11 Pro'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Sale'
  },
  {
    id: 10,
    name: 'MacBook Air 15" M4',
    brand: 'Apple',
    category: 'laptops',
    price: 1499,
    originalPrice: null,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=MacBook+Air+15+M4',
    rating: 4.7,
    reviews: 5632,
    description: 'The world\'s thinnest 15-inch laptop with the M4 chip, now featuring 16GB of unified memory as standard and an all-day battery in a fanless, whisper-quiet design.',
    features: [
      'M4 chip (10-core CPU, 10-core GPU)',
      '16GB unified memory, 512GB SSD',
      '15.3" Liquid Retina display',
      'Fanless design — silent operation',
      'Up to 18 hours battery life',
      'Two Thunderbolt 4 ports, MagSafe 3',
      '1080p FaceTime HD camera',
      'Midnight, Starlight, Space Gray, Silver'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Best Seller'
  },
  {
    id: 11,
    name: 'Lenovo ThinkPad X1 Carbon Gen 13',
    brand: 'Lenovo',
    category: 'laptops',
    price: 1899,
    originalPrice: 2099,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=ThinkPad+X1+Carbon+13',
    rating: 4.5,
    reviews: 2895,
    description: 'The business classic reimagined — featherlight at just 2.1 lbs, MIL-STD-810H certified, with Intel Core Ultra 7 and a brilliant 14" 2.8K OLED display.',
    features: [
      'Intel Core Ultra 7 265U',
      '14" 2.8K OLED, 100% DCI-P3',
      '16GB RAM, 512GB SSD',
      'MIL-STD-810H certified durability',
      '2.1 lbs ultra-lightweight',
      'Full HDMI 2.1, Thunderbolt 4, USB-A',
      'Backlit keyboard with TrackPoint',
      'Fingerprint reader + IR camera'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },
  {
    id: 12,
    name: 'ASUS ROG Zephyrus G16 (2026)',
    brand: 'ASUS',
    category: 'laptops',
    price: 2499,
    originalPrice: 2699,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=ROG+Zephyrus+G16',
    rating: 4.5,
    reviews: 3420,
    description: 'A thin-and-light gaming beast with AMD Ryzen AI 9 HX 370, NVIDIA RTX 5080, and a blazing-fast 240Hz OLED display — all in a sleek 0.6" chassis.',
    features: [
      'AMD Ryzen AI 9 HX 370',
      'NVIDIA GeForce RTX 5080 16GB',
      '16" QHD+ OLED 240Hz 0.2ms',
      '32GB DDR5 RAM, 1TB PCIe 5.0 SSD',
      'CNC aluminum chassis, 0.6" thin',
      'Per-key RGB keyboard',
      'Wi-Fi 7, Bluetooth 5.4',
      '90Wh battery with USB-C 100W charging'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'New'
  },
  {
    id: 13,
    name: 'HP Spectre x360 16 (2026)',
    brand: 'HP',
    category: 'laptops',
    price: 1699,
    originalPrice: 1899,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=HP+Spectre+x360+16',
    rating: 4.4,
    reviews: 2150,
    description: 'HP\'s premium 2-in-1 convertible with Intel Core Ultra 7, a gorgeous 16" 3K+ OLED touchscreen, and an included HP MPP2.0 tilt pen for creators on the go.',
    features: [
      'Intel Core Ultra 7 265H',
      '16" 3K+ OLED touch, 100% DCI-P3',
      '16GB RAM, 1TB SSD',
      '360° hinge, includes HP Rechargeable MPP2.0 pen',
      'Thunderbolt 4, USB-C, HDMI 2.1',
      'Audio by Bang & Olufsen, quad speakers',
      'IR camera with Windows Hello',
      'Military-grade durability tested'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },
  {
    id: 14,
    name: 'Samsung Galaxy Book5 Pro 360',
    brand: 'Samsung',
    category: 'laptops',
    price: 1599,
    originalPrice: 1699,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Galaxy+Book5+Pro+360',
    rating: 4.4,
    reviews: 1876,
    description: 'Samsung\'s flagship 2-in-1 with stunning AMOLED display, Intel Core Ultra 7 processor, and seamless integration with Galaxy phones and tablets.',
    features: [
      'Intel Core Ultra 7 265H',
      '16" Dynamic AMOLED 2X touch, 120Hz',
      '16GB RAM, 512GB SSD',
      'S Pen included',
      'Galaxy ecosystem — Phone Link, Quick Share',
      'Two Thunderbolt 4 ports, USB-C, HDMI',
      'AKG quad speakers with Dolby Atmos',
      'Up to 21 hours battery'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },

  // ============================
  // TABLETS
  // ============================
  {
    id: 15,
    name: 'iPad Pro 13" M4',
    brand: 'Apple',
    category: 'tablets',
    price: 1299,
    originalPrice: 1399,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=iPad+Pro+13+M4',
    rating: 4.8,
    reviews: 8920,
    description: 'The thinnest and most powerful iPad ever — the M4 chip delivers desktop-class performance, the Ultra Retina XDR display with tandem OLED is simply stunning, and the Apple Pencil Pro unlocks new creative possibilities.',
    features: [
      'M4 chip with 10-core GPU',
      '13" Ultra Retina XDR (tandem OLED)',
      'Apple Pencil Pro support',
      'Magic Keyboard with function row',
      'Thunderbolt 4, USB-C',
      '12MP wide + 12MP ultra-wide cameras',
      'LiDAR scanner',
      '5G cellular option'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Best Seller'
  },
  {
    id: 16,
    name: 'iPad Air 11" M3',
    brand: 'Apple',
    category: 'tablets',
    price: 649,
    originalPrice: 699,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=iPad+Air+11+M3',
    rating: 4.6,
    reviews: 5432,
    description: 'The iPad Air with M3 chip brings incredible performance, Liquid Retina display, and Apple Pencil Pro support at a more accessible price point.',
    features: [
      'M3 chip with 9-core GPU',
      '11" Liquid Retina display',
      'Apple Pencil Pro + Magic Keyboard compatible',
      '12MP wide camera with Center Stage',
      'Touch ID in top button',
      'USB-C with 10Gbps transfer',
      'Up to 10 hours battery',
      'Starlight, Space Gray, Blue, Purple'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },
  {
    id: 17,
    name: 'Samsung Galaxy Tab S10 Ultra',
    brand: 'Samsung',
    category: 'tablets',
    price: 1199,
    originalPrice: 1299,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Galaxy+Tab+S10+Ultra',
    rating: 4.6,
    reviews: 3560,
    description: 'Samsung\'s ultra-premium tablet with a massive 14.6" Dynamic AMOLED display, MediaTek Dimensity 9300+ processor, and an included S Pen for productivity and creativity.',
    features: [
      'MediaTek Dimensity 9300+',
      '14.6" Dynamic AMOLED 2X 120Hz',
      'S Pen included (IP68 rated)',
      'With Book Cover Keyboard support',
      '12MP + 12MP ultra-wide front cameras',
      'Quad speakers tuned by AKG',
      '11200mAh battery with 45W charging',
      'DeX mode for desktop experience'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Sale'
  },
  {
    id: 18,
    name: 'iPad mini 7',
    brand: 'Apple',
    category: 'tablets',
    price: 499,
    originalPrice: null,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=iPad+mini+7',
    rating: 4.5,
    reviews: 4231,
    description: 'The compact powerhouse — iPad mini 7 features the A17 Pro chip, an 8.3" Liquid Retina display, and all-day battery life in the most portable iPad form factor.',
    features: [
      'A17 Pro chip with 5-core GPU',
      '8.3" Liquid Retina display',
      'Apple Pencil Pro support',
      '12MP wide camera with Center Stage',
      'USB-C',
      'Touch ID',
      '5G connectivity available',
      'Up to 10 hours battery'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'New'
  },
  {
    id: 19,
    name: 'Google Pixel Tablet 2',
    brand: 'Google',
    category: 'tablets',
    price: 599,
    originalPrice: 649,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Pixel+Tablet+2',
    rating: 4.3,
    reviews: 1450,
    description: 'Google\'s second-gen tablet with Tensor G4 chip, a vibrant 11" display, and a redesigned Charging Speaker Dock that transforms it into a smart home hub.',
    features: [
      'Google Tensor G4',
      '11" LCD 2560×1600 at 120Hz',
      'Charging Speaker Dock included',
      '8GB RAM, up to 256GB storage',
      'Hub Mode for smart home control',
      'Quad speakers with spatial audio',
      '8MP front and rear cameras',
      'Up to 12 hours battery'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },

  // ============================
  // AUDIO
  // ============================
  {
    id: 20,
    name: 'AirPods Pro 3',
    brand: 'Apple',
    category: 'audio',
    price: 279,
    originalPrice: 299,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=AirPods+Pro+3',
    rating: 4.7,
    reviews: 15320,
    description: 'The third-generation AirPods Pro with the H3 chip deliver extraordinary Adaptive Audio, Conversation Awareness, and a new low-distortion driver for richer bass.',
    features: [
      'H3 chip with Adaptive Audio 2.0',
      'Active Noise Cancellation (2× stronger)',
      'Conversation Awareness',
      'Personalized Spatial Audio with dynamic head tracking',
      'USB-C + MagSafe + Qi2 wireless charging',
      'IPX5 sweat and water resistant',
      'Up to 8 hours listening (36h with case)',
      'Find My with precision finding'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Best Seller'
  },
  {
    id: 21,
    name: 'Sony WH-1000XM6',
    brand: 'Sony',
    category: 'audio',
    price: 399,
    originalPrice: 429,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Sony+WH-1000XM6',
    rating: 4.7,
    reviews: 9876,
    description: 'The gold standard of wireless noise-canceling headphones returns with the HD Noise Canceling Processor QN2, superior sound quality, and all-day comfort.',
    features: [
      'HD Noise Canceling Processor QN2',
      'DSEE Extreme upscaling with Edge-AI',
      '30-hour battery life',
      'Multipoint Bluetooth 5.4',
      'Speak-to-Chat 2.0',
      'Hi-Res Audio Wireless (LDAC)',
      'Fold-flat design with premium carrying case',
      'USB-C fast charging (5 min = 5 hours)'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Best Seller'
  },
  {
    id: 22,
    name: 'Bose QuietComfort Ultra',
    brand: 'Bose',
    category: 'audio',
    price: 429,
    originalPrice: 449,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Bose+QC+Ultra',
    rating: 4.6,
    reviews: 6543,
    description: 'Bose\'s premium noise-canceling headphones with Immersive Audio, CustomTune technology that automatically adjusts ANC, and a luxurious, comfortable design.',
    features: [
      'Bose Immersive Audio with head tracking',
      'CustomTune ANC — auto-calibrates to your ear',
      '24-hour battery life',
      'USB-C, 3.5mm audio cable included',
      'SimpleSync — pair with Bose soundbars',
      'Bluetooth 5.3 with multipoint',
      'Lightweight at 5.9 oz',
      'Carrying case included'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },
  {
    id: 23,
    name: 'Samsung Galaxy Buds3 Pro',
    brand: 'Samsung',
    category: 'audio',
    price: 229,
    originalPrice: 249,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Galaxy+Buds3+Pro',
    rating: 4.5,
    reviews: 5321,
    description: 'Samsung\'s premium earbuds feature dual amplifiers, two-way speakers, Intelligent ANC, and seamless Galaxy ecosystem integration with 360 Audio.',
    features: [
      'Dual amplifiers + 2-way speakers',
      'Intelligent Active Noise Cancellation',
      '360 Audio with head tracking',
      'Blade-light design with IP57 rating',
      'Up to 7 hours (29h with case)',
      'Galaxy AI — Live Translate, Interpreter',
      'Wireless charging + Qi2',
      'Auto-switch between Galaxy devices'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'New'
  },
  {
    id: 24,
    name: 'Google Pixel Buds Pro 2',
    brand: 'Google',
    category: 'audio',
    price: 199,
    originalPrice: 219,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Pixel+Buds+Pro+2',
    rating: 4.4,
    reviews: 3456,
    description: 'Google\'s Tensor A1 chip powers these compact earbuds with pro-level ANC, crystal-clear calls, and seamless Gemini integration for hands-free AI assistance.',
    features: [
      'Google Tensor A1 chip',
      'Active Noise Cancellation',
      'Clear Calling with wind reduction',
      'Gemini — hands-free AI help on the go',
      '11mm custom drivers',
      'IPX4 water resistance',
      'Up to 7 hours (27h with case)',
      'Wireless charging case'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },
  {
    id: 25,
    name: 'Sony WF-1000XM6',
    brand: 'Sony',
    category: 'audio',
    price: 299,
    originalPrice: 319,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Sony+WF-1000XM6',
    rating: 4.6,
    reviews: 4321,
    description: 'Sony\'s flagship true wireless earbuds with the Integrated Processor V2, industry-leading noise cancellation, and Hi-Res Audio support in an ultra-compact design.',
    features: [
      'Integrated Processor V2',
      'Industry-leading ANC with Auto NC Optimizer',
      'Hi-Res Audio Wireless (LDAC)',
      'Speak-to-Chat',
      'IPX5 water resistance',
      'Up to 9 hours (30h with case)',
      'Qi wireless charging',
      'Sony Headphones Connect app'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },

  // ============================
  // WEARABLES
  // ============================
  {
    id: 26,
    name: 'Apple Watch Ultra 3',
    brand: 'Apple',
    category: 'wearables',
    price: 899,
    originalPrice: 949,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Apple+Watch+Ultra+3',
    rating: 4.7,
    reviews: 6542,
    description: 'The most rugged and capable Apple Watch ever — redesigned with a larger display, S10 SiP, precision dual-frequency GPS, and advanced health sensors for extreme adventures.',
    features: [
      'S10 SiP with 64-bit dual-core',
      '49mm titanium case, 100m water resistance',
      'Precision dual-frequency GPS (L1 + L5)',
      'Body temperature sensing + ovulation tracking',
      'Blood oxygen + ECG + sleep apnea detection',
      'Action button with customizable shortcuts',
      'Up to 72 hours battery (36h normal)',
      'Night mode with precision LED flashlight'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'New'
  },
  {
    id: 27,
    name: 'Apple Watch Series 10',
    brand: 'Apple',
    category: 'wearables',
    price: 449,
    originalPrice: 479,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Apple+Watch+S10',
    rating: 4.6,
    reviews: 9870,
    description: 'The thinnest and most capable Apple Watch yet — with a larger always-on display, S10 chip, sleep apnea detection, and the health features you rely on.',
    features: [
      'S10 SiP, the thinnest Apple Watch yet',
      'Always-On Retina LTPO3 display',
      'Sleep apnea detection + Vitals app',
      'ECG + blood oxygen + temperature sensing',
      'Crash Detection + Fall Detection',
      'Up to 18 hours battery (36h low power)',
      'Fast charging — 0-80% in 30 minutes',
      'watchOS 11 with Smart Stack'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Best Seller'
  },
  {
    id: 28,
    name: 'Samsung Galaxy Watch7 Ultra',
    brand: 'Samsung',
    category: 'wearables',
    price: 649,
    originalPrice: 699,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Galaxy+Watch7+Ultra',
    rating: 4.5,
    reviews: 3210,
    description: 'Samsung\'s toughest smartwatch with a titanium grade 4 case, 3nm Exynos W1000 processor, and Galaxy AI-powered health insights for the active lifestyle.',
    features: [
      'Exynos W1000 (3nm)',
      '47mm titanium grade 4, 10ATM + IP68',
      'Galaxy AI — Energy Score, Wellness Tips',
      'BioActive Sensor 2 — heart, body comp, AGEs',
      'Dual-frequency GPS (L1 + L5)',
      'Sapphire crystal display',
      'Up to 60 hours battery (100h power saving)',
      'Wear OS 5 with One UI Watch 6'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'New'
  },
  {
    id: 29,
    name: 'Garmin Fenix 8 Solar',
    brand: 'Garmin',
    category: 'wearables',
    price: 999,
    originalPrice: 1049,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Garmin+Fenix+8+Solar',
    rating: 4.8,
    reviews: 2340,
    description: 'The ultimate multisport GPS watch with Power Sapphire solar charging, a brilliant AMOLED display, topographic maps, and advanced performance metrics for athletes and explorers.',
    features: [
      'Power Sapphire solar charging lens',
      '1.4" AMOLED display (always-on option)',
      'TopoActive maps + multi-band GNSS',
      'SatIQ — auto positioning mode',
      'Training Readiness, Training Status, VO2 Max',
      'Elevate v5 heart rate sensor',
      'Up to 29 days battery (smartwatch mode)',
      '10 ATM, MIL-STD-810, titanium bezel'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },
  {
    id: 30,
    name: 'Google Pixel Watch 3',
    brand: 'Google',
    category: 'wearables',
    price: 399,
    originalPrice: 429,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Pixel+Watch+3',
    rating: 4.4,
    reviews: 2980,
    description: 'Google\'s smartwatch with Tensor W3 chip, the brightest Actua display on any smartwatch, loss-of-pulse detection, and deep Fitbit integration.',
    features: [
      'Tensor W3 chip + Cortex coprocessor',
      '45mm Actua AMOLED, 2000 nits',
      'Loss of Pulse Detection (FDA cleared)',
      'Fitbit: cardio fitness, readiness, sleep profiles',
      'ECG + SpO2 + skin temperature',
      'Multi-path heart rate sensor',
      'Up to 36 hours battery with AOD off',
      'Wear OS 5 with Pixel-exclusive faces'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },
  {
    id: 31,
    name: 'Samsung Galaxy Ring 2',
    brand: 'Samsung',
    category: 'wearables',
    price: 449,
    originalPrice: 499,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Galaxy+Ring+2',
    rating: 4.3,
    reviews: 1875,
    description: 'Samsung\'s advanced smart ring featuring Galaxy AI health insights, sleep tracking with apnea detection, and a slim titanium design you can wear 24/7 without noticing it.',
    features: [
      'Galaxy AI — Energy Score, Booster Card',
      'Sleep tracking with apnea index estimation',
      'Heart rate, stress, skin temperature tracking',
      'Titanium grade 5, 10ATM water resistance',
      'Up to 10 days battery life',
      'Samsung Health integration',
      '7 sizes available (5–13)',
      'Charging case included'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },

  // ============================
  // ACCESSORIES
  // ============================
  {
    id: 32,
    name: 'Apple Magic Keyboard for iPad Pro M4',
    brand: 'Apple',
    category: 'accessories',
    price: 349,
    originalPrice: 379,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Magic+Keyboard+iPad+Pro',
    rating: 4.6,
    reviews: 4320,
    description: 'The perfect companion for iPad Pro M4 — a floating cantilever design with a new function row, backlit keys, and a built-in trackpad with haptic feedback.',
    features: [
      'Floating cantilever design',
      'Function row (brightness, volume, media)',
      'Backlit keys with scissor mechanism',
      'Haptic feedback trackpad',
      'USB-C pass-through charging',
      'Two viewing angles',
      'Folds into protective case',
      'Available in Black and White'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },
  {
    id: 33,
    name: 'Samsung Galaxy Buds3',
    brand: 'Samsung',
    category: 'accessories',
    price: 149,
    originalPrice: 169,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Galaxy+Buds3',
    rating: 4.3,
    reviews: 5432,
    description: 'Samsung\'s versatile open-type earbuds with blade-light design, Adaptive ANC, and premium audio tuned by AKG at an accessible price.',
    features: [
      'Open-type design with blade stem',
      'Adaptive Active Noise Cancellation',
      'AKG-tuned 2-way speakers',
      'IP57 water and dust resistant',
      'Up to 6 hours (26h with case)',
      'Galaxy AI integration',
      'Wireless charging case',
      'Multi-device auto-switching'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Sale'
  },
  {
    id: 34,
    name: 'Apple AirTag 4-Pack',
    brand: 'Apple',
    category: 'accessories',
    price: 99,
    originalPrice: 119,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=AirTag+4+Pack',
    rating: 4.5,
    reviews: 24320,
    description: 'Never lose your keys, wallet, or luggage again. The Apple AirTag works with the Find My network and features Precision Finding with Ultra Wideband for pin-point accuracy.',
    features: [
      'Precision Finding with Ultra Wideband',
      'Find My network — hundreds of millions of devices',
      'Replaceable CR2032 battery (1 year+)',
      'IP67 water and dust resistant',
      'Built-in speaker',
      'Lost Mode with contact notification',
      '4-pack — keys, bags, wallet, and more',
      'Engraving available free'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Best Seller'
  },
  {
    id: 35,
    name: 'Belkin BoostCharge Pro 3-in-1',
    brand: 'Apple',
    category: 'accessories',
    price: 149,
    originalPrice: 169,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Belkin+3-in-1+Charger',
    rating: 4.4,
    reviews: 6780,
    description: 'Belkin\'s premium 3-in-1 wireless charging stand with Qi2 fast charging for iPhone, Apple Watch fast charge, and AirPods — all in a single elegant MagSafe-compatible dock.',
    features: [
      'Qi2 15W fast charging for iPhone',
      'Apple Watch fast charge module',
      'AirPods charging pad (5W)',
      'MagSafe-compatible alignment',
      'LED indicator',
      'Designed for Desk — weighted base',
      'USB-C power adapter included',
      'Available in Black and White'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },
  {
    id: 36,
    name: 'Samsung Galaxy Watch7 Ultra / 47mm Titanium Band',
    brand: 'Samsung',
    category: 'accessories',
    price: 79,
    originalPrice: 99,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Galaxy+Watch+Ultra+Band',
    rating: 4.3,
    reviews: 1230,
    description: 'Samsung\'s official D-Buckle Sport Band for Galaxy Watch7 Ultra — made from lightweight, durable fluoroelastomer with a magnetic buckle for easy adjustment.',
    features: [
      'Magnetic D-Buckle Sport Band',
      'Fluoroelastomer — durable and lightweight',
      'Quick-release spring bars',
      'Compatible with Galaxy Watch7 Ultra 47mm',
      'Sweat and water resistant',
      'Available in Gray, Orange, Green'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  },
  {
    id: 37,
    name: 'Samsung Galaxy Book5 Pro 360 / 65W USB-C Charger',
    brand: 'Samsung',
    category: 'accessories',
    price: 49,
    originalPrice: 59,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Samsung+65W+Charger',
    rating: 4.2,
    reviews: 4321,
    description: 'Samsung\'s official 65W USB-C fast charger with GaN technology — compact, powerful, and compatible with Galaxy Book5 Pro 360, Galaxy phones, and more.',
    features: [
      '65W USB-C Power Delivery 3.0',
      'GaN technology — compact design',
      'Super Fast Charging 2.0',
      'Compatible with Galaxy Book, phones, tablets',
      '1.8m USB-C to USB-C cable included',
      'Overheat protection',
      'Foldable plug'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: 'Sale'
  },
  {
    id: 38,
    name: 'OMOTON 12.9" iPad Pro Keyboard Case',
    brand: 'Apple',
    category: 'accessories',
    price: 59,
    originalPrice: 79,
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=OMOTON+Keyboard+Case',
    rating: 4.1,
    reviews: 8790,
    description: 'An affordable keyboard case for iPad Pro with backlit keys, trackpad, and multi-angle stand — a compelling alternative to Apple\'s Magic Keyboard.',
    features: [
      'Backlit 7-color keyboard',
      'Built-in trackpad',
      'Multi-angle viewing stand',
      'Apple Pencil holder',
      'Auto sleep/wake cover',
      'USB-C charging',
      'Up to 200 hours battery',
      'Shockproof hardshell back'
    ],
    affiliateLink: 'https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20',
    badge: null
  }
];

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/**
 * Get a single product by its ID.
 * @param {number} id - Product ID
 * @returns {object|null} - The product object or null if not found
 */
function getProductById(id) {
  return products.find(product => product.id === id) || null;
}

/**
 * Get all products in a given category.
 * @param {string} cat - Category name (e.g., 'smartphones', 'laptops')
 * @returns {Array} - Array of products in that category
 */
function getProductsByCategory(cat) {
  return products.filter(product => product.category === cat);
}

// ============================================================
// EXPORTS (for use in Node.js / module bundlers)
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products, getProductById, getProductsByCategory };
}
