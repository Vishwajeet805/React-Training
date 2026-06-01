import React from 'react';

export default function ProductCard() {
  const product = {
    title: "Beef Steak",
    price: 12.99,
    discountPercentage: 9.61,
    rating: 4.47,
    availabilityStatus: "In Stock",
    stock: 86,
    description: "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
    shippingInformation: "Ships overnight",
    minimumOrderQuantity: 43
  };

  const originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);

  return (
    <div style={{
      width: '320px',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#fff'
    }}>
      <div style={{ position: 'relative', textAlign: 'center', marginBottom: '12px' }}>
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <span style={{
          position: 'absolute',
          top: '8px',
          left: '8px',
          backgroundColor: '#e6f4ea',
          color: '#137333',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          {product.availabilityStatus} ({product.stock})
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#202124' }}>{product.title}</h3>
        <span style={{ fontSize: '14px', color: '#f4b400' }}>★ {product.rating}</span>
      </div>

      <p style={{ fontSize: '14px', color: '#5f6368', margin: '0 0 16px 0', lineHeight: '1.4' }}>
        {product.description}
      </p>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '12px' }}>
        <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a73e8' }}>${product.price}</span>
        <span style={{ fontSize: '14px', textDecoration: 'line-through', color: '#9aa0a6' }}>${originalPrice}</span>
        <span style={{ fontSize: '12px', color: '#d93025', fontWeight: '500' }}>({product.discountPercentage}% OFF)</span>
      </div>

      <div style={{ borderTop: '1px solid #f1f3f4', paddingTop: '12px', fontSize: '12px', color: '#70757a' }}>
        <div>🚚 {product.shippingInformation}</div>
        <div style={{ marginTop: '4px' }}>📦 Min. Order: {product.minimumOrderQuantity} units</div>
      </div>
    </div>
  );
}
