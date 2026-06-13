export const PRODUCTS = [
    { id: 1, title: "Wireless Headphones", category: "Electronics", price: 2499, rating: 4.5, emoji: "🎧" },
    { id: 2, title: "Smart Watch Pro", category: "Electronics", price: 3999, rating: 4.3, emoji: "⌚" },
    { id: 3, title: "Travel Backpack", category: "Accessories", price: 1299, rating: 4.6, emoji: "🎒" },
    { id: 4, title: "Running Shoes", category: "Footwear", price: 2199, rating: 4.4, emoji: "👟" },
    { id: 5, title: "Cotton T-Shirt", category: "Men", price: 599, rating: 4.1, emoji: "👕" },
    { id: 6, title: "Denim Jacket", category: "Men", price: 1899, rating: 4.2, emoji: "🧥" },
    { id: 7, title: "Classic Sunglasses", category: "Accessories", price: 899, rating: 4.0, emoji: "🕶️" },
    { id: 8, title: "Bluetooth Speaker", category: "Electronics", price: 1599, rating: 4.7, emoji: "🔊" },
    { id: 9, title: "Analog Wrist Watch", category: "Accessories", price: 2799, rating: 4.5, emoji: "🕰️" },
    { id: 10, title: "Cozy Hoodie", category: "Women", price: 1099, rating: 4.3, emoji: "🧶" },
    { id: 11, title: "Laptop Sleeve", category: "Electronics", price: 699, rating: 4.2, emoji: "💻" },
    { id: 12, title: "Ceramic Coffee Mug", category: "Home", price: 349, rating: 4.8, emoji: "☕" },
  ];
  
  export const CATEGORIES = ["All", "Electronics", "Accessories", "Footwear", "Men", "Women", "Home"];
  
  export const GRADIENT = {
    Electronics: "from-sky-100 to-blue-200",
    Accessories: "from-amber-100 to-orange-200",
    Footwear: "from-rose-100 to-pink-200",
    Men: "from-emerald-100 to-teal-200",
    Women: "from-fuchsia-100 to-purple-200",
    Home: "from-lime-100 to-green-200",
  };
  
  export const inr = (n) => "₹" + n.toLocaleString("en-IN");