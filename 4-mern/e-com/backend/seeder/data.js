const products = [
    {
      name: "Ultra HD 4K Smart TV",
      images: [
        {
          public_id: "",
          url: "https://m.media-amazon.com/images/I/71zFdS29uFL.jpg",
        },
        {
          public_id: "",
          url: "https://sumaria.in/wp-content/uploads/2023/07/32LQ645BPTA.jpg",
        },
      ],
      description: "Experience stunning 4K visuals with built-in smart features and voice control.",
      brand: "VisionTech",
      category: "Electronics",
      price: 499.99,
      countInStock: 10,
      rating: 4.8,
      numReviews: 32,
      seller:"test",
      stock:5
    },
    {
      name: "ProShot DSLR Camera",
      images: [
        {
          public_id: "",
          url: "https://x.imastudent.com/content/0016823_canon-eos-90d-dslr-camera-with-18-135mm-lens_500.jpeg",
        },
        {
          public_id: "",
          url: "https://www.jiomart.com/images/product/original/491362271/nikon-d850-dslr-camera-with-24-120-mm-lens-kit-digital-o491362271-p590038885-5-202009260621.jpeg?im=Resize=(420,420)",
        },
      ],
      description: "Capture high-resolution images with a 24MP sensor and 4K video recording.",
      brand: "PhotoMaster",
      category: "Cameras",
      price: 799.99,
      countInStock: 5,
      rating: 4.7,
      numReviews: 19,
      seller:"test",
      stock:5
    },
    {
      name: "UltraBook Pro 15",
      images: [
        {
          public_id: "",
          url: "https://s.alicdn.com/@sc04/kf/Hcdab7073b6e346ad92675cd92c1da0336.jpg_720x720q50.jpg",
        },
        {
          public_id: "",
          url: "https://m.media-amazon.com/images/I/61ly2mGCBXL.jpg",
        },
      ],
      description: "Powerful laptop with Intel i7, 16GB RAM, and 512GB SSD for high performance.",
      brand: "TechElite",
      category: "Laptops",
      price: 1199.99,
      countInStock: 7,
      rating: 4.9,
      numReviews: 25,
      seller:"test",
      stock:5
    },
    {
      name: "Wireless Gaming Mouse",
      images: [
        {
          public_id: "",
          url: "https://jetlaptechnologies.com/wp-content/uploads/2023/07/Logitech-G502-X-Lightspeed-Wireless-Gaming-Mouse-Black.webp",
        },
        {
          public_id: "",
          url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ciDg?ver=d01e&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        },
      ],
      description: "Ergonomic gaming mouse with high DPI, RGB lighting, and ultra-low latency.",
      brand: "GamerGear",
      category: "Accessories",
      price: 39.99,
      countInStock: 15,
      rating: 4.6,
      numReviews: 30,
      seller:"test",
      stock:5
    },
    {
      name: "Noise-Canceling Headphones",
      images: [
        {
          public_id: "",
          url: "https://avstore.in/cdn/shop/files/1.AVStore-Bose-QuietComfort-Ultra-Headphone-Front-View-Black.jpg?v=1709816392",
        },
        {
          public_id: "",
          url: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf3256a3b/images/Fastrack/Catalog/FO2BKA01_1.jpg?sw=800&sh=800",
        },
      ],
      description: "Immerse yourself in high-quality sound with active noise-canceling technology.",
      brand: "SoundPro",
      category: "Headphones",
      price: 99.99,
      countInStock: 12,
      rating: 4.7,
      numReviews: 41,
      seller:"test",
      stock:5
    },
    {
      name: "Organic Protein Bar",
      images: [
        {
          public_id: "",
          url: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/oga/oga00640/l/26.jpg",
        },
        {
          public_id: "",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2gSn6LFeXJQha7ERMh7BzaqadGQVZU607g&s",
        },
      ],
      description: "Delicious and healthy protein bar made with organic ingredients.",
      brand: "HealthBite",
      category: "Food",
      price: 2.99,
      countInStock: 50,
      rating: 4.5,
      numReviews: 28,
      seller:"test",
      stock:5
    },
    {
      name: "Mastering JavaScript",
      images: [
        {
          public_id: "",
          url: "https://m.media-amazon.com/images/I/61fCrrsOE4L._UF1000,1000_QL80_.jpg",
        },
        {
          public_id: "",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60B6PSBIH8QHQwa5Ok99aD3OdxkP-XjFWXA&s",
        },
      ],
      description: "An in-depth guide to modern JavaScript and best coding practices.",
      brand: "CodeMaster",
      category: "Books",
      price: 29.99,
      countInStock: 20,
      rating: 4.8,
      numReviews: 35,
      seller:"test",
      stock:5
    },
    {
      name: "Adjustable Dumbbell Set",
      images: [
        {
          public_id: "",
          url: "https://burnlab.co/cdn/shop/files/DSC_4203.jpg?v=1726568958",
        },
        {
          public_id: "",
          url: "https://www.jiomart.com/images/product/original/rvzvpxoazn/protoner-pvc-25-kg-adjustable-dumbbell-set-product-images-orvzvpxoazn-p600185981-0-202401171007.png?im=Resize=(1000,1000)",
        },
      ],
      description: "Compact and adjustable dumbbell set perfect for home workouts.",
      brand: "FitFlex",
      category: "Sports",
      price: 79.99,
      countInStock: 8,
      rating: 4.7,
      numReviews: 22,
      seller:"test",
      stock:5
    },
    {
      name: "Camping Tent for 4",
      images: [
        {
          public_id: "",
          url: "https://m.media-amazon.com/images/I/619kbj04wKL.jpg",
        },
        {
          public_id: "",
          url: "https://www.sportswing.in/wp-content/uploads/2023/05/Vector-X-Tent-GB-101-2-Camping-3.jpg",
        },
      ],
      description: "Durable and waterproof tent ideal for outdoor adventures and camping trips.",
      brand: "NatureNest",
      category: "Outdoor",
      price: 149.99,
      countInStock: 6,
      rating: 4.8,
      numReviews: 17,
      seller:"test",
      stock:5
    },
    {
      name: "Smart Home Security Camera",
      images: [
        {
          public_id: "",
          url: "https://ik.imagekit.io/anscommerce/image/tr:e-usm-2-2-0.8-0.024,dpr-3,h-1000,w-1000,q-85,cm-pad_resize/data/philips/10-apr-2023/HSP3500_1.jpg",
        },
        {
          public_id: "",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_pt3T66Kq3jZCHISZqzKwIjGeMj_tlvRuQ&s",
        },
      ],
      description: "Monitor your home 24/7 with HD video, night vision, and motion alerts.",
      brand: "SafeGuard",
      category: "Home",
      price: 59.99,
      countInStock: 14,
      rating: 4.6,
      numReviews: 29,
      seller:"test",
      stock:5
    },
  ];
  
  export default products;
  