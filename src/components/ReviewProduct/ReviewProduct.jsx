import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const ReviewProduct = ({ product, deleteProduct }) => {
  const { id, img, name, price, shipping, quantity } = product;

  return (
    <div className="reviewProduct max-w-3xl mx-auto">
      <div className="proditwithdelete flex justify-between items-center border p-2 mt-4">
        <div className="prodet flex items-center gap-5">
          <div className="reviewProductImg">
            <img className="w-[150px] h-[150px] block" src={img} alt={name} />
          </div>
          <div className="reproductDetals">
            <h2 className="text-xl">
              <strong>{name}</strong>
            </h2>
            <p>
              <strong>Price : </strong> {price}$
            </p>
            <p>
              <strong>Shipping :</strong> {shipping}$
            </p>
            <p>
              <strong>Quantity :</strong> {quantity} Pices
            </p>
          </div>
        </div>
        <div className="delete">
          <button
            onClick={() => deleteProduct(id)}
            className="w-[60px] h-[60px] bg-red-500 rounded-[50%] flex items-center justify-center hover:bg-green-500"
          >
            <TrashIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewProduct;
