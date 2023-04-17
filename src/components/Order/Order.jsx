import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import { removeFromDb } from "../Utlities/AddCart";

const Order = () => {
  const { previousCart } = useLoaderData();
  const [cart, setCart] = useState(previousCart);
  const deleteProduct = (id) => {
    const deletedItems = cart.filter((items) => items.id !== id);
    setCart(deletedItems);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("shopingCart");
  };

  return (
    <div className="order">
      <div className="max-w-7xl m-auto">
        <div className="order-wrapper grid grid-cols-5">
          <div className="orderLeft col-span-4">
            {cart.length ? (
              ""
            ) : (
              <h1>
                NO product added.Please add some product form
                <Link to="/">
                  <span className="font-bold text-orange-700 underline">
                    Here
                  </span>
                </Link>
              </h1>
            )}
            {cart.map((product) => (
              <ReviewProduct
                deleteProduct={deleteProduct}
                key={product.id}
                product={product}
              ></ReviewProduct>
            ))}
          </div>
          <div className="orderRight col-span-1">
            <Cart clearCart={clearCart} added={cart}>
              <button className="btn btn-accent w-full mt-8 text-white">
                Proceed Checkout
              </button>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
