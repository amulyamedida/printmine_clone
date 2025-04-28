import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  
  useEffect(() => {
    const items = [
      { name: 'Product 1', price: 100, quantity: 1 },
      { name: 'Product 2', price: 200, quantity: 2 },
    ];
    setCartItems(items);
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>
      <div>
        {cartItems.map(item => (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
