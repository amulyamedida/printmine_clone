import React from 'react';

const CheckoutPage = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" />
        </div>
        <div>
          <label>Payment Information:</label>
          <input type="text" />
        </div>
        <button>Confirm Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
