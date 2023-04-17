import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Product = ({ item, addToCart }) => {
  const { img, name, price, seller, ratings } = item;
  return (
    <div className="singleProduct">
      <div className="card w-full bg-base-100 shadow-2xl">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body">
          <div className="cart-items h-[180px]">
            <div className="itemName">
              <h2 className="text-xl mb-2">
                <strong>{name}</strong>
              </h2>
              <p>
                Price: <strong>${price}</strong>{" "}
              </p>
            </div>
            <div className="itemDetails mt-4">
              <p>
                Manufacturer : <strong>{seller}</strong>
              </p>
              <p>
                Rating : <strong>{ratings}</strong> start
              </p>
            </div>
          </div>
          <div className="button">
            <button
              onClick={() => addToCart(item)}
              className="btn btn-secondary w-full mt-4"
            >
              Add To Cart
              <ShoppingCartIcon className="h-5 w-5 ml-3 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
