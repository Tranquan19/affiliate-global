// Affiliate Global
const products = [
  {
    "id": "3",
    "name": "Google Pixel 10 Pro",
    "brand": "Google",
    "category": "smartphones",
    "price": 999,
    "originalPrice": 1099,
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1601782591353-3e34032699a6?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1610945415294-dfbb5b7b3e8d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592286927505-1def25115558?w=800&h=800&fit=crop"
    ],
    "rating": 4.6,
    "reviews": 5634,
    "description": "Google's AI-first flagship with the Tensor G5 chip, a 64MP main camera with computational photography wizardry, and seven years of OS updates.",
    "features": [
      "Google Tensor G5 chip",
      "64MP + 48MP + 48MP triple camera",
      "6.7\" LTPO OLED 120Hz",
      "Magic Editor, Best Take, Audio Magic Eraser",
      "Gemini Nano on-device AI",
      "5050mAh battery",
      "IP68 water and dust resistance",
      "7 years of OS, security, and Pixel Drops"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "6.7\" LTPO OLED, 120Hz"
      },
      {
        "label": "Processor",
        "value": "Google Tensor G5"
      },
      {
        "label": "RAM",
        "value": "12GB"
      },
      {
        "label": "Storage",
        "value": "128GB / 256GB / 512GB"
      },
      {
        "label": "Battery",
        "value": "5050mAh"
      },
      {
        "label": "Camera",
        "value": "64MP + 48MP + 48MP"
      },
      {
        "label": "Weight",
        "value": "207g"
      },
      {
        "label": "OS",
        "value": "Android 16"
      }
    ],
    "videoId": "C9m4hKYgW_Y",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "5",
    "name": "iPhone 16",
    "brand": "Apple",
    "category": "smartphones",
    "price": 899,
    "originalPrice": 999,
    "image": "https://images.unsplash.com/photo-1592286927505-1def25115558?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1592286927505-1def25115558?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1610945415294-dfbb5b7b3e8d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1601782591353-3e34032699a6?w=800&h=800&fit=crop"
    ],
    "rating": 4.6,
    "reviews": 8210,
    "description": "what the fuck? The standard iPhone 16 delivers A18 performance, a 48MP dual-camera system, and the new Camera Control button — all at a more accessible price.",
    "features": [
      "A18 chip with 5-core GPU",
      "48MP + 12MP dual camera",
      "6.1\" Super Retina XDR OLED",
      "Camera Control button",
      "Apple Intelligence ready",
      "USB-C",
      "IP68 water resistance",
      "Up to 22 hours video playback"
    ],
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "New"
  },
  {
    "id": "7",
    "name": "Google Pixel 10",
    "brand": "Google",
    "category": "smartphones",
    "price": 749,
    "originalPrice": 799,
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1601782591353-3e34032699a6?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1610945415294-dfbb5b7b3e8d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592286927505-1def25115558?w=800&h=800&fit=crop"
    ],
    "rating": 4.4,
    "reviews": 3240,
    "description": "Pure Google experience with the Tensor G5 chip, excellent camera performance, and the best software support in the business — all at a mid-range price.",
    "features": [
      "Google Tensor G5",
      "64MP + 12MP dual camera",
      "6.3\" OLED 120Hz",
      "Best Take, Magic Eraser, Photo Unblur",
      "Gemini AI assistant built-in",
      "4600mAh battery",
      "7 years of updates",
      "Matte finish back"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "6.3\" OLED, 120Hz"
      },
      {
        "label": "Processor",
        "value": "Google Tensor G5"
      },
      {
        "label": "RAM",
        "value": "8GB"
      },
      {
        "label": "Storage",
        "value": "128GB / 256GB"
      },
      {
        "label": "Battery",
        "value": "4600mAh"
      },
      {
        "label": "Camera",
        "value": "64MP + 12MP"
      },
      {
        "label": "Weight",
        "value": "191g"
      },
      {
        "label": "OS",
        "value": "Android 16"
      }
    ],
    "videoId": "xHG9F6tHhZ4",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "8",
    "name": "MacBook Pro 16\" M4 Max",
    "brand": "Apple",
    "category": "laptops",
    "price": 3499,
    "originalPrice": 3799,
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=800&fit=crop"
    ],
    "rating": 4.9,
    "reviews": 7654,
    "description": "The ultimate pro laptop with Apple's M4 Max chip featuring up to 16 CPU cores and 40 GPU cores, a breathtaking Liquid Retina XDR display, and up to 22 hours of battery life.",
    "features": [
      "M4 Max chip (16-core CPU, 40-core GPU)",
      "48GB unified memory, 1TB SSD",
      "16.2\" Liquid Retina XDR with ProMotion",
      "Three Thunderbolt 5 ports",
      "HDMI 2.1, SDXC card slot, MagSafe 3",
      "22 hours battery life",
      "Space Black, Silver finishes",
      "1080p FaceTime HD camera"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "16.2\" Liquid Retina XDR, ProMotion 120Hz"
      },
      {
        "label": "Processor",
        "value": "Apple M4 Max (16C CPU, 40C GPU)"
      },
      {
        "label": "RAM",
        "value": "48GB unified memory"
      },
      {
        "label": "Storage",
        "value": "1TB SSD"
      },
      {
        "label": "Battery",
        "value": "Up to 22 hours"
      },
      {
        "label": "Ports",
        "value": "3× Thunderbolt 5, HDMI 2.1, SDXC, MagSafe 3"
      },
      {
        "label": "Weight",
        "value": "2.14 kg"
      },
      {
        "label": "OS",
        "value": "macOS 16"
      }
    ],
    "videoId": "RrZm2CxYYOo",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "Best Seller"
  },
  {
    "id": "9",
    "name": "Dell XPS 16 (2026)",
    "brand": "Dell",
    "category": "laptops",
    "price": 2199,
    "originalPrice": 2399,
    "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=800&fit=crop"
    ],
    "rating": 4.6,
    "reviews": 3241,
    "description": "Dell's stunning XPS 16 features an Intel Core Ultra 9 processor, NVIDIA RTX 5070 Ti graphics, and a gorgeous 4K OLED infinity-edge display in an ultra-premium chassis.",
    "features": [
      "Intel Core Ultra 9 285H",
      "NVIDIA GeForce RTX 5070 Ti 12GB",
      "16.3\" 4K+ OLED InfinityEdge touch",
      "32GB LPDDR5X RAM, 1TB SSD",
      "CNC machined aluminum with Gorilla Glass",
      "Thunderbolt 5, USB-C, HDMI 2.1",
      "1080p webcam with IR for Windows Hello",
      "Windows 11 Pro"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "16.3\" 4K+ OLED InfinityEdge touch"
      },
      {
        "label": "Processor",
        "value": "Intel Core Ultra 9 285H"
      },
      {
        "label": "GPU",
        "value": "NVIDIA RTX 5070 Ti 12GB"
      },
      {
        "label": "RAM",
        "value": "32GB LPDDR5X"
      },
      {
        "label": "Storage",
        "value": "1TB SSD"
      },
      {
        "label": "Battery",
        "value": "Up to 14 hours"
      },
      {
        "label": "Weight",
        "value": "1.8 kg"
      },
      {
        "label": "OS",
        "value": "Windows 11 Pro"
      }
    ],
    "videoId": "BfE8W0rQm3U",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "Sale"
  },
  {
    "id": "10",
    "name": "MacBook Air 15\" M4",
    "brand": "Apple",
    "category": "laptops",
    "price": 1499,
    "originalPrice": null,
    "image": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop"
    ],
    "rating": 4.7,
    "reviews": 5632,
    "description": "The world's thinnest 15-inch laptop with the M4 chip, now featuring 16GB of unified memory as standard and an all-day battery in a fanless, whisper-quiet design.",
    "features": [
      "M4 chip (10-core CPU, 10-core GPU)",
      "16GB unified memory, 512GB SSD",
      "15.3\" Liquid Retina display",
      "Fanless design — silent operation",
      "Up to 18 hours battery life",
      "Two Thunderbolt 4 ports, MagSafe 3",
      "1080p FaceTime HD camera",
      "Midnight, Starlight, Space Gray, Silver"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "15.3\" Liquid Retina"
      },
      {
        "label": "Processor",
        "value": "Apple M4 (10C CPU, 10C GPU)"
      },
      {
        "label": "RAM",
        "value": "16GB unified memory"
      },
      {
        "label": "Storage",
        "value": "512GB SSD"
      },
      {
        "label": "Battery",
        "value": "Up to 18 hours"
      },
      {
        "label": "Ports",
        "value": "2× Thunderbolt 4, MagSafe 3, 3.5mm"
      },
      {
        "label": "Weight",
        "value": "1.51 kg"
      },
      {
        "label": "OS",
        "value": "macOS 16"
      }
    ],
    "videoId": "QvIC4t78dSU",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "Best Seller"
  },
  {
    "id": "11",
    "name": "Lenovo ThinkPad X1 Carbon Gen 13",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 1899,
    "originalPrice": 2099,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=800&fit=crop"
    ],
    "rating": 4.5,
    "reviews": 2895,
    "description": "The business classic reimagined — featherlight at just 2.1 lbs, MIL-STD-810H certified, with Intel Core Ultra 7 and a brilliant 14\" 2.8K OLED display.",
    "features": [
      "Intel Core Ultra 7 265U",
      "14\" 2.8K OLED, 100% DCI-P3",
      "16GB RAM, 512GB SSD",
      "MIL-STD-810H certified durability",
      "2.1 lbs ultra-lightweight",
      "Full HDMI 2.1, Thunderbolt 4, USB-A",
      "Backlit keyboard with TrackPoint",
      "Fingerprint reader + IR camera"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "14\" 2.8K OLED, 100% DCI-P3"
      },
      {
        "label": "Processor",
        "value": "Intel Core Ultra 7 265U"
      },
      {
        "label": "RAM",
        "value": "16GB LPDDR5X"
      },
      {
        "label": "Storage",
        "value": "512GB SSD"
      },
      {
        "label": "Battery",
        "value": "Up to 16 hours"
      },
      {
        "label": "Weight",
        "value": "0.95 kg (2.1 lbs)"
      },
      {
        "label": "Durability",
        "value": "MIL-STD-810H certified"
      },
      {
        "label": "OS",
        "value": "Windows 11 Pro"
      }
    ],
    "videoId": "N_G5JCp99GY",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "12",
    "name": "ASUS ROG Zephyrus G16 (2026)",
    "brand": "ASUS",
    "category": "laptops",
    "price": 2499,
    "originalPrice": 2699,
    "image": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop"
    ],
    "rating": 4.5,
    "reviews": 3420,
    "description": "A thin-and-light gaming beast with AMD Ryzen AI 9 HX 370, NVIDIA RTX 5080, and a blazing-fast 240Hz OLED display — all in a sleek 0.6\" chassis.",
    "features": [
      "AMD Ryzen AI 9 HX 370",
      "NVIDIA GeForce RTX 5080 16GB",
      "16\" QHD+ OLED 240Hz 0.2ms",
      "32GB DDR5 RAM, 1TB PCIe 5.0 SSD",
      "CNC aluminum chassis, 0.6\" thin",
      "Per-key RGB keyboard",
      "Wi-Fi 7, Bluetooth 5.4",
      "90Wh battery with USB-C 100W charging"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "16\" QHD+ OLED, 240Hz, 0.2ms"
      },
      {
        "label": "Processor",
        "value": "AMD Ryzen AI 9 HX 370"
      },
      {
        "label": "GPU",
        "value": "NVIDIA RTX 5080 16GB"
      },
      {
        "label": "RAM",
        "value": "32GB DDR5"
      },
      {
        "label": "Storage",
        "value": "1TB PCIe 5.0 SSD"
      },
      {
        "label": "Battery",
        "value": "90Wh, 100W USB-C charging"
      },
      {
        "label": "Weight",
        "value": "1.85 kg"
      },
      {
        "label": "OS",
        "value": "Windows 11 Home"
      }
    ],
    "videoId": "xL0aJJB3NAg",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "New"
  },
  {
    "id": "13",
    "name": "HP Spectre x360 16 (2026)",
    "brand": "HP",
    "category": "laptops",
    "price": 1699,
    "originalPrice": 1899,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=800&fit=crop"
    ],
    "rating": 4.4,
    "reviews": 2150,
    "description": "HP's premium 2-in-1 convertible with Intel Core Ultra 7, a gorgeous 16\" 3K+ OLED touchscreen, and an included HP MPP2.0 tilt pen for creators on the go.",
    "features": [
      "Intel Core Ultra 7 265H",
      "16\" 3K+ OLED touch, 100% DCI-P3",
      "16GB RAM, 1TB SSD",
      "360° hinge, includes HP Rechargeable MPP2.0 pen",
      "Thunderbolt 4, USB-C, HDMI 2.1",
      "Audio by Bang & Olufsen, quad speakers",
      "IR camera with Windows Hello",
      "Military-grade durability tested"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "16\" 3K+ OLED touch, 100% DCI-P3"
      },
      {
        "label": "Processor",
        "value": "Intel Core Ultra 7 265H"
      },
      {
        "label": "RAM",
        "value": "16GB LPDDR5X"
      },
      {
        "label": "Storage",
        "value": "1TB SSD"
      },
      {
        "label": "Battery",
        "value": "Up to 15 hours"
      },
      {
        "label": "Weight",
        "value": "1.62 kg"
      },
      {
        "label": "Features",
        "value": "360° hinge, HP MPP2.0 pen included"
      },
      {
        "label": "OS",
        "value": "Windows 11 Home"
      }
    ],
    "videoId": "KOYiWVJ9Ooo",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "14",
    "name": "Samsung Galaxy Book5 Pro 360",
    "brand": "Samsung",
    "category": "laptops",
    "price": 1599,
    "originalPrice": 1699,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=800&fit=crop"
    ],
    "rating": 4.4,
    "reviews": 1876,
    "description": "Samsung's flagship 2-in-1 with stunning AMOLED display, Intel Core Ultra 7 processor, and seamless integration with Galaxy phones and tablets.",
    "features": [
      "Intel Core Ultra 7 265H",
      "16\" Dynamic AMOLED 2X touch, 120Hz",
      "16GB RAM, 512GB SSD",
      "S Pen included",
      "Galaxy ecosystem — Phone Link, Quick Share",
      "Two Thunderbolt 4 ports, USB-C, HDMI",
      "AKG quad speakers with Dolby Atmos",
      "Up to 21 hours battery"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "16\" Dynamic AMOLED 2X touch, 120Hz"
      },
      {
        "label": "Processor",
        "value": "Intel Core Ultra 7 265H"
      },
      {
        "label": "RAM",
        "value": "16GB LPDDR5X"
      },
      {
        "label": "Storage",
        "value": "512GB SSD"
      },
      {
        "label": "Battery",
        "value": "Up to 21 hours"
      },
      {
        "label": "Weight",
        "value": "1.54 kg"
      },
      {
        "label": "Features",
        "value": "S Pen included, 360° hinge"
      },
      {
        "label": "OS",
        "value": "Windows 11 Home"
      }
    ],
    "videoId": "q7U_KBz5Xpg",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "15",
    "name": "iPad Pro 13\" M4",
    "brand": "Apple",
    "category": "tablets",
    "price": 1299,
    "originalPrice": 1399,
    "image": "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1561154462-a5487f5e162b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&h=800&fit=crop"
    ],
    "rating": 4.8,
    "reviews": 8920,
    "description": "The thinnest and most powerful iPad ever — the M4 chip delivers desktop-class performance, the Ultra Retina XDR display with tandem OLED is simply stunning, and the Apple Pencil Pro unlocks new creative possibilities.",
    "features": [
      "M4 chip with 10-core GPU",
      "13\" Ultra Retina XDR (tandem OLED)",
      "Apple Pencil Pro support",
      "Magic Keyboard with function row",
      "Thunderbolt 4, USB-C",
      "12MP wide + 12MP ultra-wide cameras",
      "LiDAR scanner",
      "5G cellular option"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "13\" Ultra Retina XDR (tandem OLED)"
      },
      {
        "label": "Processor",
        "value": "Apple M4 (10C GPU)"
      },
      {
        "label": "RAM",
        "value": "8GB / 16GB"
      },
      {
        "label": "Storage",
        "value": "256GB / 512GB / 1TB / 2TB"
      },
      {
        "label": "Battery",
        "value": "Up to 10 hours"
      },
      {
        "label": "Camera",
        "value": "12MP + 12MP, LiDAR"
      },
      {
        "label": "Weight",
        "value": "579g (Wi-Fi)"
      },
      {
        "label": "OS",
        "value": "iPadOS 19"
      }
    ],
    "videoId": "NmN7KqZmejI",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "Best Seller"
  },
  {
    "id": "16",
    "name": "iPad Air 11\" M3",
    "brand": "Apple",
    "category": "tablets",
    "price": 649,
    "originalPrice": 699,
    "image": "https://images.unsplash.com/photo-1561154462-a5487f5e162b?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1561154462-a5487f5e162b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&h=800&fit=crop"
    ],
    "rating": 4.6,
    "reviews": 5432,
    "description": "The iPad Air with M3 chip brings incredible performance, Liquid Retina display, and Apple Pencil Pro support at a more accessible price point.",
    "features": [
      "M3 chip with 9-core GPU",
      "11\" Liquid Retina display",
      "Apple Pencil Pro + Magic Keyboard compatible",
      "12MP wide camera with Center Stage",
      "Touch ID in top button",
      "USB-C with 10Gbps transfer",
      "Up to 10 hours battery",
      "Starlight, Space Gray, Blue, Purple"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "11\" Liquid Retina"
      },
      {
        "label": "Processor",
        "value": "Apple M3 (9C GPU)"
      },
      {
        "label": "RAM",
        "value": "8GB"
      },
      {
        "label": "Storage",
        "value": "128GB / 256GB / 512GB"
      },
      {
        "label": "Battery",
        "value": "Up to 10 hours"
      },
      {
        "label": "Camera",
        "value": "12MP wide, Center Stage"
      },
      {
        "label": "Weight",
        "value": "462g (Wi-Fi)"
      },
      {
        "label": "OS",
        "value": "iPadOS 19"
      }
    ],
    "videoId": "9ChG88t5BSM",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "17",
    "name": "Samsung Galaxy Tab S10 Ultra",
    "brand": "Samsung",
    "category": "tablets",
    "price": 1199,
    "originalPrice": 1299,
    "image": "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1561154462-a5487f5e162b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&h=800&fit=crop"
    ],
    "rating": 4.6,
    "reviews": 3560,
    "description": "Samsung's ultra-premium tablet with a massive 14.6\" Dynamic AMOLED display, MediaTek Dimensity 9300+ processor, and an included S Pen for productivity and creativity.",
    "features": [
      "MediaTek Dimensity 9300+",
      "14.6\" Dynamic AMOLED 2X 120Hz",
      "S Pen included (IP68 rated)",
      "With Book Cover Keyboard support",
      "12MP + 12MP ultra-wide front cameras",
      "Quad speakers tuned by AKG",
      "11200mAh battery with 45W charging",
      "DeX mode for desktop experience"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "14.6\" Dynamic AMOLED 2X, 120Hz"
      },
      {
        "label": "Processor",
        "value": "MediaTek Dimensity 9300+"
      },
      {
        "label": "RAM",
        "value": "12GB / 16GB"
      },
      {
        "label": "Storage",
        "value": "256GB / 512GB / 1TB"
      },
      {
        "label": "Battery",
        "value": "11200mAh, 45W charging"
      },
      {
        "label": "Camera",
        "value": "13MP + 8MP rear, 12MP + 12MP front"
      },
      {
        "label": "Weight",
        "value": "718g (Wi-Fi)"
      },
      {
        "label": "OS",
        "value": "Android 16, One UI 7"
      }
    ],
    "videoId": "m4Krl6Lc0e4",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "Sale"
  },
  {
    "id": "18",
    "name": "iPad mini 7",
    "brand": "Apple",
    "category": "tablets",
    "price": 499,
    "originalPrice": null,
    "image": "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1561154462-a5487f5e162b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop"
    ],
    "rating": 4.5,
    "reviews": 4231,
    "description": "The compact powerhouse — iPad mini 7 features the A17 Pro chip, an 8.3\" Liquid Retina display, and all-day battery life in the most portable iPad form factor.",
    "features": [
      "A17 Pro chip with 5-core GPU",
      "8.3\" Liquid Retina display",
      "Apple Pencil Pro support",
      "12MP wide camera with Center Stage",
      "USB-C",
      "Touch ID",
      "5G connectivity available",
      "Up to 10 hours battery"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "8.3\" Liquid Retina"
      },
      {
        "label": "Processor",
        "value": "Apple A17 Pro"
      },
      {
        "label": "RAM",
        "value": "8GB"
      },
      {
        "label": "Storage",
        "value": "128GB / 256GB / 512GB"
      },
      {
        "label": "Battery",
        "value": "Up to 10 hours"
      },
      {
        "label": "Camera",
        "value": "12MP wide, Center Stage"
      },
      {
        "label": "Weight",
        "value": "293g (Wi-Fi)"
      },
      {
        "label": "OS",
        "value": "iPadOS 19"
      }
    ],
    "videoId": "QOPGEPj2CqQ",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "New"
  },
  {
    "id": "20",
    "name": "AirPods Pro 3",
    "brand": "Apple",
    "category": "audio",
    "price": 279,
    "originalPrice": 299,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a1e4260b4c8f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop"
    ],
    "rating": 4.7,
    "reviews": 15320,
    "description": "The third-generation AirPods Pro with the H3 chip deliver extraordinary Adaptive Audio, Conversation Awareness, and a new low-distortion driver for richer bass.",
    "features": [
      "H3 chip with Adaptive Audio 2.0",
      "Active Noise Cancellation (2× stronger)",
      "Conversation Awareness",
      "Personalized Spatial Audio with dynamic head tracking",
      "USB-C + MagSafe + Qi2 wireless charging",
      "IPX5 sweat and water resistant",
      "Up to 8 hours listening (36h with case)",
      "Find My with precision finding"
    ],
    "specs": [
      {
        "label": "Driver",
        "value": "Custom low-distortion driver"
      },
      {
        "label": "Chip",
        "value": "Apple H3"
      },
      {
        "label": "ANC",
        "value": "Active Noise Cancellation 2.0"
      },
      {
        "label": "Audio",
        "value": "Personalized Spatial Audio with head tracking"
      },
      {
        "label": "Battery",
        "value": "8h (36h with case)"
      },
      {
        "label": "Charging",
        "value": "USB-C, MagSafe, Qi2"
      },
      {
        "label": "Water Resistance",
        "value": "IPX5"
      },
      {
        "label": "Weight",
        "value": "4.7g per earbud"
      }
    ],
    "videoId": "nEHIiEoyMcc",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "Best Seller"
  },
  {
    "id": "21",
    "name": "Sony WH-1000XM6",
    "brand": "Sony",
    "category": "audio",
    "price": 399,
    "originalPrice": 429,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a1e4260b4c8f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop"
    ],
    "rating": 4.7,
    "reviews": 9876,
    "description": "The gold standard of wireless noise-canceling headphones returns with the HD Noise Canceling Processor QN2, superior sound quality, and all-day comfort.",
    "features": [
      "HD Noise Canceling Processor QN2",
      "DSEE Extreme upscaling with Edge-AI",
      "30-hour battery life",
      "Multipoint Bluetooth 5.4",
      "Speak-to-Chat 2.0",
      "Hi-Res Audio Wireless (LDAC)",
      "Fold-flat design with premium carrying case",
      "USB-C fast charging (5 min = 5 hours)"
    ],
    "specs": [
      {
        "label": "Driver",
        "value": "30mm carbon fiber composite"
      },
      {
        "label": "Chip",
        "value": "HD Noise Canceling Processor QN2"
      },
      {
        "label": "ANC",
        "value": "Adaptive Noise Cancellation"
      },
      {
        "label": "Audio",
        "value": "Hi-Res Audio Wireless (LDAC), DSEE Extreme"
      },
      {
        "label": "Battery",
        "value": "30 hours"
      },
      {
        "label": "Charging",
        "value": "USB-C, 5 min = 5 hours"
      },
      {
        "label": "Bluetooth",
        "value": "5.4, Multipoint"
      },
      {
        "label": "Weight",
        "value": "254g"
      }
    ],
    "videoId": "iPpGcEuCeyQ",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "Best Seller"
  },
  {
    "id": "22",
    "name": "Bose QuietComfort Ultra",
    "brand": "Bose",
    "category": "audio",
    "price": 429,
    "originalPrice": 449,
    "image": "https://images.unsplash.com/photo-1546435770-a1e4260b4c8f?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a1e4260b4c8f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop"
    ],
    "rating": 4.6,
    "reviews": 6543,
    "description": "Bose's premium noise-canceling headphones with Immersive Audio, CustomTune technology that automatically adjusts ANC, and a luxurious, comfortable design.",
    "features": [
      "Bose Immersive Audio with head tracking",
      "CustomTune ANC — auto-calibrates to your ear",
      "24-hour battery life",
      "USB-C, 3.5mm audio cable included",
      "SimpleSync — pair with Bose soundbars",
      "Bluetooth 5.3 with multipoint",
      "Lightweight at 5.9 oz",
      "Carrying case included"
    ],
    "specs": [
      {
        "label": "Driver",
        "value": "Custom Bose transducer"
      },
      {
        "label": "ANC",
        "value": "CustomTune adaptive ANC"
      },
      {
        "label": "Audio",
        "value": "Bose Immersive Audio with head tracking"
      },
      {
        "label": "Battery",
        "value": "24 hours"
      },
      {
        "label": "Charging",
        "value": "USB-C, 15 min = 2.5 hours"
      },
      {
        "label": "Bluetooth",
        "value": "5.3, Multipoint"
      },
      {
        "label": "Weight",
        "value": "167g (5.9 oz)"
      },
      {
        "label": "Features",
        "value": "SimpleSync with Bose soundbars"
      }
    ],
    "videoId": "2UJgJ8kAGgg",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "23",
    "name": "Samsung Galaxy Buds3 Pro",
    "brand": "Samsung",
    "category": "audio",
    "price": 229,
    "originalPrice": 249,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a1e4260b4c8f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop"
    ],
    "rating": 4.5,
    "reviews": 5321,
    "description": "Samsung's premium earbuds feature dual amplifiers, two-way speakers, Intelligent ANC, and seamless Galaxy ecosystem integration with 360 Audio.",
    "features": [
      "Dual amplifiers + 2-way speakers",
      "Intelligent Active Noise Cancellation",
      "360 Audio with head tracking",
      "Blade-light design with IP57 rating",
      "Up to 7 hours (29h with case)",
      "Galaxy AI — Live Translate, Interpreter",
      "Wireless charging + Qi2",
      "Auto-switch between Galaxy devices"
    ],
    "specs": [
      {
        "label": "Driver",
        "value": "2-way coaxial speakers"
      },
      {
        "label": "Amplifier",
        "value": "Dual amplifiers"
      },
      {
        "label": "ANC",
        "value": "Intelligent Active Noise Cancellation"
      },
      {
        "label": "Audio",
        "value": "360 Audio with head tracking"
      },
      {
        "label": "Battery",
        "value": "7h (29h with case)"
      },
      {
        "label": "Charging",
        "value": "Wireless charging, Qi2"
      },
      {
        "label": "Water Resistance",
        "value": "IP57"
      },
      {
        "label": "Weight",
        "value": "5.4g per earbud"
      }
    ],
    "videoId": "hYIuJ1mPB2k",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "New"
  },
  {
    "id": "24",
    "name": "Google Pixel Buds Pro 2",
    "brand": "Google",
    "category": "audio",
    "price": 199,
    "originalPrice": 219,
    "image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a1e4260b4c8f?w=800&h=800&fit=crop"
    ],
    "rating": 4.4,
    "reviews": 3456,
    "description": "Google's Tensor A1 chip powers these compact earbuds with pro-level ANC, crystal-clear calls, and seamless Gemini integration for hands-free AI assistance.",
    "features": [
      "Google Tensor A1 chip",
      "Active Noise Cancellation",
      "Clear Calling with wind reduction",
      "Gemini — hands-free AI help on the go",
      "11mm custom drivers",
      "IPX4 water resistance",
      "Up to 7 hours (27h with case)",
      "Wireless charging case"
    ],
    "specs": [
      {
        "label": "Driver",
        "value": "11mm custom dynamic"
      },
      {
        "label": "Chip",
        "value": "Google Tensor A1"
      },
      {
        "label": "ANC",
        "value": "Active Noise Cancellation"
      },
      {
        "label": "Audio",
        "value": "Gemini AI integration"
      },
      {
        "label": "Battery",
        "value": "7h (27h with case)"
      },
      {
        "label": "Charging",
        "value": "Wireless charging case"
      },
      {
        "label": "Water Resistance",
        "value": "IPX4"
      },
      {
        "label": "Weight",
        "value": "5.2g per earbud"
      }
    ],
    "videoId": "VRUmCvKXX68",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "25",
    "name": "Sony WF-1000XM6",
    "brand": "Sony",
    "category": "audio",
    "price": 299,
    "originalPrice": 319,
    "image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a1e4260b4c8f?w=800&h=800&fit=crop"
    ],
    "rating": 4.6,
    "reviews": 4321,
    "description": "Sony's flagship true wireless earbuds with the Integrated Processor V2, industry-leading noise cancellation, and Hi-Res Audio support in an ultra-compact design.",
    "features": [
      "Integrated Processor V2",
      "Industry-leading ANC with Auto NC Optimizer",
      "Hi-Res Audio Wireless (LDAC)",
      "Speak-to-Chat",
      "IPX5 water resistance",
      "Up to 9 hours (30h with case)",
      "Qi wireless charging",
      "Sony Headphones Connect app"
    ],
    "specs": [
      {
        "label": "Driver",
        "value": "8.4mm driver"
      },
      {
        "label": "Chip",
        "value": "Integrated Processor V2"
      },
      {
        "label": "ANC",
        "value": "Auto NC Optimizer"
      },
      {
        "label": "Audio",
        "value": "Hi-Res Audio Wireless (LDAC)"
      },
      {
        "label": "Battery",
        "value": "9h (30h with case)"
      },
      {
        "label": "Charging",
        "value": "Qi wireless, USB-C"
      },
      {
        "label": "Water Resistance",
        "value": "IPX5"
      },
      {
        "label": "Weight",
        "value": "6.5g per earbud"
      }
    ],
    "videoId": "7b2BM38_vrM",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "26",
    "name": "Apple Watch Ultra 3",
    "brand": "Apple",
    "category": "wearables",
    "price": 899,
    "originalPrice": 949,
    "image": "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop"
    ],
    "rating": 4.7,
    "reviews": 6542,
    "description": "The most rugged and capable Apple Watch ever — redesigned with a larger display, S10 SiP, precision dual-frequency GPS, and advanced health sensors for extreme adventures.",
    "features": [
      "S10 SiP with 64-bit dual-core",
      "49mm titanium case, 100m water resistance",
      "Precision dual-frequency GPS (L1 + L5)",
      "Body temperature sensing + ovulation tracking",
      "Blood oxygen + ECG + sleep apnea detection",
      "Action button with customizable shortcuts",
      "Up to 72 hours battery (36h normal)",
      "Night mode with precision LED flashlight"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "49mm, Always-On Retina LTPO3"
      },
      {
        "label": "Processor",
        "value": "Apple S10 SiP"
      },
      {
        "label": "GPS",
        "value": "Dual-frequency (L1 + L5)"
      },
      {
        "label": "Water Resistance",
        "value": "100m (EN13319)"
      },
      {
        "label": "Battery",
        "value": "Up to 72h (36h normal)"
      },
      {
        "label": "Sensors",
        "value": "ECG, SpO2, temperature, depth"
      },
      {
        "label": "Weight",
        "value": "61.4g (titanium)"
      },
      {
        "label": "OS",
        "value": "watchOS 11"
      }
    ],
    "videoId": "Qs7WgEl7O5E",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "New"
  },
  {
    "id": "27",
    "name": "Apple Watch Series 10",
    "brand": "Apple",
    "category": "wearables",
    "price": 449,
    "originalPrice": 479,
    "image": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop"
    ],
    "rating": 4.6,
    "reviews": 9870,
    "description": "The thinnest and most capable Apple Watch yet — with a larger always-on display, S10 chip, sleep apnea detection, and the health features you rely on.",
    "features": [
      "S10 SiP, the thinnest Apple Watch yet",
      "Always-On Retina LTPO3 display",
      "Sleep apnea detection + Vitals app",
      "ECG + blood oxygen + temperature sensing",
      "Crash Detection + Fall Detection",
      "Up to 18 hours battery (36h low power)",
      "Fast charging — 0-80% in 30 minutes",
      "watchOS 11 with Smart Stack"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "Always-On Retina LTPO3"
      },
      {
        "label": "Processor",
        "value": "Apple S10 SiP"
      },
      {
        "label": "Sensors",
        "value": "ECG, SpO2, temperature"
      },
      {
        "label": "Water Resistance",
        "value": "50m (WR50)"
      },
      {
        "label": "Battery",
        "value": "Up to 18h (36h low power)"
      },
      {
        "label": "Charging",
        "value": "0-80% in 30 min"
      },
      {
        "label": "Weight",
        "value": "36.4g (aluminium, 45mm)"
      },
      {
        "label": "OS",
        "value": "watchOS 11"
      }
    ],
    "videoId": "YQETpRgV55c",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "Best Seller"
  },
  {
    "id": "28",
    "name": "Samsung Galaxy Watch7 Ultra",
    "brand": "Samsung",
    "category": "wearables",
    "price": 649,
    "originalPrice": 699,
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop"
    ],
    "rating": 4.5,
    "reviews": 3210,
    "description": "Samsung's toughest smartwatch with a titanium grade 4 case, 3nm Exynos W1000 processor, and Galaxy AI-powered health insights for the active lifestyle.",
    "features": [
      "Exynos W1000 (3nm)",
      "47mm titanium grade 4, 10ATM + IP68",
      "Galaxy AI — Energy Score, Wellness Tips",
      "BioActive Sensor 2 — heart, body comp, AGEs",
      "Dual-frequency GPS (L1 + L5)",
      "Sapphire crystal display",
      "Up to 60 hours battery (100h power saving)",
      "Wear OS 5 with One UI Watch 6"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "47mm Super AMOLED, Sapphire Crystal"
      },
      {
        "label": "Processor",
        "value": "Exynos W1000 (3nm)"
      },
      {
        "label": "GPS",
        "value": "Dual-frequency (L1 + L5)"
      },
      {
        "label": "Water Resistance",
        "value": "10ATM + IP68"
      },
      {
        "label": "Battery",
        "value": "Up to 60h (100h power saving)"
      },
      {
        "label": "Sensors",
        "value": "BioActive Sensor 2, ECG, BIA"
      },
      {
        "label": "Weight",
        "value": "60.5g (titanium)"
      },
      {
        "label": "OS",
        "value": "Wear OS 5, One UI Watch 6"
      }
    ],
    "videoId": "RHEf2ekpNdc",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "New"
  },
  {
    "id": "29",
    "name": "Garmin Fenix 8 Solar",
    "brand": "Garmin",
    "category": "wearables",
    "price": 999,
    "originalPrice": 1049,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop"
    ],
    "rating": 4.8,
    "reviews": 2340,
    "description": "The ultimate multisport GPS watch with Power Sapphire solar charging, a brilliant AMOLED display, topographic maps, and advanced performance metrics for athletes and explorers.",
    "features": [
      "Power Sapphire solar charging lens",
      "1.4\" AMOLED display (always-on option)",
      "TopoActive maps + multi-band GNSS",
      "SatIQ — auto positioning mode",
      "Training Readiness, Training Status, VO2 Max",
      "Elevate v5 heart rate sensor",
      "Up to 29 days battery (smartwatch mode)",
      "10 ATM, MIL-STD-810, titanium bezel"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "1.4\" AMOLED, always-on option"
      },
      {
        "label": "GPS",
        "value": "Multi-band GNSS, SatIQ"
      },
      {
        "label": "Solar",
        "value": "Power Sapphire solar charging"
      },
      {
        "label": "Water Resistance",
        "value": "10 ATM, MIL-STD-810"
      },
      {
        "label": "Battery",
        "value": "Up to 29 days (smartwatch)"
      },
      {
        "label": "Maps",
        "value": "TopoActive maps"
      },
      {
        "label": "Weight",
        "value": "88g (titanium)"
      },
      {
        "label": "Sensors",
        "value": "Elevate v5 HR, Pulse Ox, compass"
      }
    ],
    "videoId": "qlGJvU8GpeM",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "30",
    "name": "Google Pixel Watch 3",
    "brand": "Google",
    "category": "wearables",
    "price": 399,
    "originalPrice": 429,
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop"
    ],
    "rating": 4.4,
    "reviews": 2980,
    "description": "Google's smartwatch with Tensor W3 chip, the brightest Actua display on any smartwatch, loss-of-pulse detection, and deep Fitbit integration.",
    "features": [
      "Tensor W3 chip + Cortex coprocessor",
      "45mm Actua AMOLED, 2000 nits",
      "Loss of Pulse Detection (FDA cleared)",
      "Fitbit: cardio fitness, readiness, sleep profiles",
      "ECG + SpO2 + skin temperature",
      "Multi-path heart rate sensor",
      "Up to 36 hours battery with AOD off",
      "Wear OS 5 with Pixel-exclusive faces"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "45mm Actua AMOLED, 2000 nits"
      },
      {
        "label": "Processor",
        "value": "Tensor W3 + Cortex coprocessor"
      },
      {
        "label": "Sensors",
        "value": "ECG, SpO2, multi-path HR, temperature"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM"
      },
      {
        "label": "Battery",
        "value": "Up to 36h (AOD off)"
      },
      {
        "label": "Charging",
        "value": "Fast charging, 0-80% in 30 min"
      },
      {
        "label": "Weight",
        "value": "37g (no band)"
      },
      {
        "label": "OS",
        "value": "Wear OS 5"
      }
    ],
    "videoId": "DG6BdP-XQ3g",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "31",
    "name": "Samsung Galaxy Ring 2",
    "brand": "Samsung",
    "category": "wearables",
    "price": 449,
    "originalPrice": 499,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop"
    ],
    "rating": 4.3,
    "reviews": 1875,
    "description": "Samsung's advanced smart ring featuring Galaxy AI health insights, sleep tracking with apnea detection, and a slim titanium design you can wear 24/7 without noticing it.",
    "features": [
      "Galaxy AI — Energy Score, Booster Card",
      "Sleep tracking with apnea index estimation",
      "Heart rate, stress, skin temperature tracking",
      "Titanium grade 5, 10ATM water resistance",
      "Up to 10 days battery life",
      "Samsung Health integration",
      "7 sizes available (5–13)",
      "Charging case included"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Titanium grade 5"
      },
      {
        "label": "Water Resistance",
        "value": "10ATM"
      },
      {
        "label": "Battery",
        "value": "Up to 10 days"
      },
      {
        "label": "Sensors",
        "value": "HR, stress, skin temp, sleep"
      },
      {
        "label": "Sizes",
        "value": "7 sizes (5–13)"
      },
      {
        "label": "Weight",
        "value": "2.3g–3.0g (varies by size)"
      },
      {
        "label": "AI Features",
        "value": "Galaxy AI Energy Score, Booster Card"
      },
      {
        "label": "Compatibility",
        "value": "Samsung Health, Android"
      }
    ],
    "videoId": "TNFko0QpElI",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "32",
    "name": "Apple Magic Keyboard for iPad Pro M4",
    "brand": "Apple",
    "category": "accessories",
    "price": 349,
    "originalPrice": 379,
    "image": "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1561154462-a5487f5e162b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop"
    ],
    "rating": 4.6,
    "reviews": 4320,
    "description": "The perfect companion for iPad Pro M4 — a floating cantilever design with a new function row, backlit keys, and a built-in trackpad with haptic feedback.",
    "features": [
      "Floating cantilever design",
      "Function row (brightness, volume, media)",
      "Backlit keys with scissor mechanism",
      "Haptic feedback trackpad",
      "USB-C pass-through charging",
      "Two viewing angles",
      "Folds into protective case",
      "Available in Black and White"
    ],
    "specs": [
      {
        "label": "Compatibility",
        "value": "iPad Pro M4 13\" and 11\""
      },
      {
        "label": "Keyboard",
        "value": "Backlit scissor mechanism"
      },
      {
        "label": "Trackpad",
        "value": "Haptic feedback"
      },
      {
        "label": "Design",
        "value": "Floating cantilever"
      },
      {
        "label": "Ports",
        "value": "USB-C pass-through"
      },
      {
        "label": "Weight",
        "value": "605g (13\" version)"
      },
      {
        "label": "Colors",
        "value": "Black, White"
      },
      {
        "label": "Features",
        "value": "Function row, two viewing angles"
      }
    ],
    "videoId": "bOXU3MqePbQ",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "33",
    "name": "Samsung Galaxy Buds3",
    "brand": "Samsung",
    "category": "accessories",
    "price": 149,
    "originalPrice": 169,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a1e4260b4c8f?w=800&h=800&fit=crop"
    ],
    "rating": 4.3,
    "reviews": 5432,
    "description": "Samsung's versatile open-type earbuds with blade-light design, Adaptive ANC, and premium audio tuned by AKG at an accessible price.",
    "features": [
      "Open-type design with blade stem",
      "Adaptive Active Noise Cancellation",
      "AKG-tuned 2-way speakers",
      "IP57 water and dust resistant",
      "Up to 6 hours (26h with case)",
      "Galaxy AI integration",
      "Wireless charging case",
      "Multi-device auto-switching"
    ],
    "specs": [
      {
        "label": "Driver",
        "value": "AKG-tuned 2-way speakers"
      },
      {
        "label": "ANC",
        "value": "Adaptive Active Noise Cancellation"
      },
      {
        "label": "Audio",
        "value": "Galaxy AI integration"
      },
      {
        "label": "Battery",
        "value": "6h (26h with case)"
      },
      {
        "label": "Charging",
        "value": "Wireless charging case"
      },
      {
        "label": "Water Resistance",
        "value": "IP57"
      },
      {
        "label": "Bluetooth",
        "value": "5.4, multi-device"
      },
      {
        "label": "Weight",
        "value": "5.0g per earbud"
      }
    ],
    "videoId": "8j9b8_1R_vI",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "Sale"
  },
  {
    "id": "34",
    "name": "Apple AirTag 4-Pack",
    "brand": "Apple",
    "category": "accessories",
    "price": 99,
    "originalPrice": 119,
    "image": "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1561154462-a5487f5e162b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop"
    ],
    "rating": 4.5,
    "reviews": 24320,
    "description": "Never lose your keys, wallet, or luggage again. The Apple AirTag works with the Find My network and features Precision Finding with Ultra Wideband for pin-point accuracy.",
    "features": [
      "Precision Finding with Ultra Wideband",
      "Find My network — hundreds of millions of devices",
      "Replaceable CR2032 battery (1 year+)",
      "IP67 water and dust resistant",
      "Built-in speaker",
      "Lost Mode with contact notification",
      "4-pack — keys, bags, wallet, and more",
      "Engraving available free"
    ],
    "specs": [
      {
        "label": "Connectivity",
        "value": "Bluetooth, UWB, NFC"
      },
      {
        "label": "Network",
        "value": "Find My (hundreds of millions)"
      },
      {
        "label": "Battery",
        "value": "CR2032, 1+ year"
      },
      {
        "label": "Water Resistance",
        "value": "IP67"
      },
      {
        "label": "Precision Finding",
        "value": "Ultra Wideband"
      },
      {
        "label": "Quantity",
        "value": "4-pack"
      },
      {
        "label": "Weight",
        "value": "11g each"
      },
      {
        "label": "Customization",
        "value": "Free engraving"
      }
    ],
    "videoId": "G5R3PfpScQA",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "Best Seller"
  },
  {
    "id": "35",
    "name": "Belkin BoostCharge Pro 3-in-1",
    "brand": "Apple",
    "category": "accessories",
    "price": 149,
    "originalPrice": 169,
    "image": "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1561154462-a5487f5e162b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop"
    ],
    "rating": 4.4,
    "reviews": 6780,
    "description": "Belkin's premium 3-in-1 wireless charging stand with Qi2 fast charging for iPhone, Apple Watch fast charge, and AirPods — all in a single elegant MagSafe-compatible dock.",
    "features": [
      "Qi2 15W fast charging for iPhone",
      "Apple Watch fast charge module",
      "AirPods charging pad (5W)",
      "MagSafe-compatible alignment",
      "LED indicator",
      "Designed for Desk — weighted base",
      "USB-C power adapter included",
      "Available in Black and White"
    ],
    "specs": [
      {
        "label": "iPhone Charging",
        "value": "Qi2 15W MagSafe"
      },
      {
        "label": "Apple Watch",
        "value": "Fast charge module"
      },
      {
        "label": "AirPods",
        "value": "5W charging pad"
      },
      {
        "label": "Design",
        "value": "Weighted base, LED indicator"
      },
      {
        "label": "Adapter",
        "value": "USB-C power adapter included"
      },
      {
        "label": "Colors",
        "value": "Black, White"
      },
      {
        "label": "Dimensions",
        "value": "Compact desktop design"
      },
      {
        "label": "Features",
        "value": "MagSafe-compatible alignment"
      }
    ],
    "videoId": "QnqyX6Fs2Rc",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "36",
    "name": "Samsung Galaxy Watch7 Ultra / 47mm Titanium Band",
    "brand": "Samsung",
    "category": "accessories",
    "price": 79,
    "originalPrice": 99,
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop"
    ],
    "rating": 4.3,
    "reviews": 1230,
    "description": "Samsung's official D-Buckle Sport Band for Galaxy Watch7 Ultra — made from lightweight, durable fluoroelastomer with a magnetic buckle for easy adjustment.",
    "features": [
      "Magnetic D-Buckle Sport Band",
      "Fluoroelastomer — durable and lightweight",
      "Quick-release spring bars",
      "Compatible with Galaxy Watch7 Ultra 47mm",
      "Sweat and water resistant",
      "Available in Gray, Orange, Green"
    ],
    "specs": [
      {
        "label": "Compatibility",
        "value": "Galaxy Watch7 Ultra 47mm"
      },
      {
        "label": "Material",
        "value": "Fluoroelastomer"
      },
      {
        "label": "Closure",
        "value": "Magnetic D-Buckle"
      },
      {
        "label": "System",
        "value": "Quick-release spring bars"
      },
      {
        "label": "Water Resistance",
        "value": "Sweat and water resistant"
      },
      {
        "label": "Colors",
        "value": "Gray, Orange, Green"
      }
    ],
    "videoId": "TtKRtn60SLc",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "37",
    "name": "Samsung Galaxy Book5 Pro 360 / 65W USB-C Charger",
    "brand": "Samsung",
    "category": "accessories",
    "price": 49,
    "originalPrice": 59,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=800&fit=crop"
    ],
    "rating": 4.2,
    "reviews": 4321,
    "description": "Samsung's official 65W USB-C fast charger with GaN technology — compact, powerful, and compatible with Galaxy Book5 Pro 360, Galaxy phones, and more.",
    "features": [
      "65W USB-C Power Delivery 3.0",
      "GaN technology — compact design",
      "Super Fast Charging 2.0",
      "Compatible with Galaxy Book, phones, tablets",
      "1.8m USB-C to USB-C cable included",
      "Overheat protection",
      "Foldable plug"
    ],
    "specs": [
      {
        "label": "Power Output",
        "value": "65W USB-C PD 3.0"
      },
      {
        "label": "Technology",
        "value": "GaN (gallium nitride)"
      },
      {
        "label": "Charging",
        "value": "Super Fast Charging 2.0"
      },
      {
        "label": "Cable",
        "value": "1.8m USB-C to USB-C included"
      },
      {
        "label": "Compatibility",
        "value": "Galaxy Book, phones, tablets"
      },
      {
        "label": "Safety",
        "value": "Overheat protection"
      },
      {
        "label": "Plug",
        "value": "Foldable design"
      },
      {
        "label": "Dimensions",
        "value": "Compact GaN design"
      }
    ],
    "videoId": "0RMYbC0UfAU",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": "Sale"
  },
  {
    "id": "38",
    "name": "OMOTON 12.9\" iPad Pro Keyboard Case",
    "brand": "Apple",
    "category": "accessories",
    "price": 59,
    "originalPrice": 79,
    "image": "https://images.unsplash.com/photo-1561154462-a5487f5e162b?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1561154462-a5487f5e162b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0d0cf88c14?w=800&h=800&fit=crop"
    ],
    "rating": 4.1,
    "reviews": 8790,
    "description": "An affordable keyboard case for iPad Pro with backlit keys, trackpad, and multi-angle stand — a compelling alternative to Apple's Magic Keyboard.",
    "features": [
      "Backlit 7-color keyboard",
      "Built-in trackpad",
      "Multi-angle viewing stand",
      "Apple Pencil holder",
      "Auto sleep/wake cover",
      "USB-C charging",
      "Up to 200 hours battery",
      "Shockproof hardshell back"
    ],
    "specs": [
      {
        "label": "Compatibility",
        "value": "iPad Pro 12.9\" (2018–2022)"
      },
      {
        "label": "Keyboard",
        "value": "Backlit 7-color"
      },
      {
        "label": "Trackpad",
        "value": "Built-in"
      },
      {
        "label": "Battery",
        "value": "Up to 200 hours"
      },
      {
        "label": "Charging",
        "value": "USB-C"
      },
      {
        "label": "Stand",
        "value": "Multi-angle viewing"
      },
      {
        "label": "Features",
        "value": "Apple Pencil holder, sleep/wake cover"
      },
      {
        "label": "Protection",
        "value": "Shockproof hardshell back"
      }
    ],
    "videoId": "dbqaqaV1-pc",
    "affiliateLink": "https://amazon.com/dp/EXAMPLE?tag=affiliateglobal-20",
    "badge": null
  },
  {
    "id": "cui-mia-mq0p8y0y",
    "name": "CUI MIA",
    "brand": "Apple",
    "category": "smartphones",
    "price": 100,
    "originalPrice": 99,
    "image": "https://chat.deepseek.com/",
    "images": [
      "https://fal.ai/"
    ],
    "rating": 4.5,
    "reviews": 0,
    "description": "",
    "features": [],
    "badge": ""
  },
  {
    "id": "40",
    "name": "Jasper AI",
    "brand": "Jasper",
    "category": "ai-tools",
    "price": 49,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=800&fit=crop"
    ],
    "rating": 4.8,
    "reviews": 1234,
    "description": "Jasper is the leading AI writing assistant for businesses.",
    "features": [
      "Brand Voice",
      "50+ templates",
      "SEO mode",
      "Plagiarism checker",
      "30+ languages"
    ],
    "specs": [
      {
        "label": "Price",
        "value": "$49/month"
      },
      {
        "label": "Trial",
        "value": "7 days"
      },
      {
        "label": "Best For",
        "value": "Bloggers"
      }
    ],
    "affiliateLink": "#",
    "badge": "Best Seller"
  },
  {
    "id": "41",
    "name": "WriteSonic",
    "brand": "WriteSonic",
    "category": "ai-tools",
    "price": 19,
    "image": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=800&fit=crop"
    ],
    "rating": 4.6,
    "reviews": 892,
    "description": "Affordable AI writing tool perfect for beginners.",
    "features": [
      "ChatSonic",
      "Blog writer SEO mode",
      "AI art generator",
      "Browser extension"
    ],
    "specs": [
      {
        "label": "Price",
        "value": "$19/month"
      },
      {
        "label": "Best For",
        "value": "Beginners"
      }
    ],
    "affiliateLink": "#",
    "badge": "Best Seller"
  },
  {
    "id": "42",
    "name": "Synthesia",
    "brand": "Synthesia",
    "category": "ai-tools",
    "price": 29,
    "image": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=800&fit=crop"
    ],
    "rating": 4.7,
    "reviews": 567,
    "description": "Create professional AI avatar videos without camera or microphone.",
    "features": [
      "120+ AI avatars",
      "140+ languages",
      "Custom avatars",
      "Script-to-video"
    ],
    "specs": [
      {
        "label": "Price",
        "value": "$29/month"
      },
      {
        "label": "Best For",
        "value": "Marketers"
      }
    ],
    "affiliateLink": "#",
    "badge": "New"
  },
  {
    "id": "43",
    "name": "Notion AI",
    "brand": "Notion",
    "category": "ai-tools",
    "price": 20,
    "image": "https://images.unsplash.com/photo-1686191128892-3e1f4f6f72f6?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1686191128892-3e1f4f6f72f6?w=800&h=800&fit=crop"
    ],
    "rating": 4.9,
    "reviews": 2345,
    "description": "Best workspace platform with built-in AI assistance.",
    "features": [
      "AI writing in workspace",
      "Project management",
      "Wiki & knowledge base",
      "AI summarization"
    ],
    "specs": [
      {
        "label": "Price",
        "value": "$10+$10/month"
      },
      {
        "label": "Best For",
        "value": "Teams"
      }
    ],
    "affiliateLink": "#",
    "badge": "Best Seller"
  },
  {
    "id": "44",
    "name": "Pictory AI",
    "brand": "Pictory",
    "category": "ai-tools",
    "price": 19,
    "image": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=800&fit=crop"
    ],
    "rating": 4.5,
    "reviews": 345,
    "description": "Automatically convert blog posts into engaging videos.",
    "features": [
      "Blog to video in 1 click",
      "Auto-captions",
      "Stock footage library",
      "AI voiceover"
    ],
    "specs": [
      {
        "label": "Price",
        "value": "$19/month"
      },
      {
        "label": "Best For",
        "value": "Content Repurposing"
      }
    ],
    "affiliateLink": "#",
    "badge": ""
  }
];

function getProductById(id){return products.find(function(p){return p.id===id})||null}
function getProductsByCategory(cat){return products.filter(function(p){return p.category===cat})}
