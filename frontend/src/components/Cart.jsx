import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = () => {
    setCartItems([...cartItems, { name: 'Sample Product', price: 29.99 }]);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <button onClick={addToCart}>Add Sample Product</button>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
