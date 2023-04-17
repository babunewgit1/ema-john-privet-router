import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ added, clearCart, children }) => {
  let price = 0;
  let shopingCharge = 0;
  let quantity = 0;

  for (let items of added) {
    price += items.price * items.quantity;

    shopingCharge += items.shipping;
    quantity = quantity + items.quantity;
  }
  const tax = price * 0.1;
  const grandTotal = price + shopingCharge + tax;

  const navigate = useNavigate();
  const reviewOrderpage = () => {
    navigate("/order");
  };

  return (
    <div className="cart h-screen bg-orange-300 p-4 sticky top-0">
      <div className="cartHeading text-cyan-800">
        <h2 className="text-center text-xl font-semibold mb-6">
          Order Summary
        </h2>
        <div className="cart-summery">
          <p>
            Selected Items: <strong>{quantity}</strong>
          </p>
          <p>
            Total Price: $<strong>{price}</strong>
          </p>
          <p>
            Total Shipping Charge: $<strong>{shopingCharge}</strong>
          </p>
          <p>
            Tax: $<strong>{tax.toFixed(2)}</strong>
          </p>
          <h3>
            Grand Total: $<strong>{grandTotal}</strong>
          </h3>
        </div>
      </div>
      <div className="button">
        <button className="btn btn-primary w-full mt-8" onClick={clearCart}>
          Clear Cart
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
