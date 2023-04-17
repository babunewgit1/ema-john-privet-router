import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addData, getData } from "../Utlities/AddCart";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const products = useLoaderData();
  const [see, setSee] = useState(true);
  const [added, setAdded] = useState([]);

  const addToCart = (product) => {
    let newcart = [];
    const old = added.find((item) => item.id === product.id);
    if (!old) {
      product.quantity = 1;
      newcart = [...added, product];
    } else {
      product.quantity = product.quantity + 1;
      const remaning = added.filter((item) => item.id !== product.id);
      newcart = [...remaning, old];
    }

    setAdded(newcart);
    addData(product.id);
  };

  const clearCart = () => {
    setAdded([]);
    localStorage.removeItem("shopingCart");
  };

  useEffect(() => {
    const getDataFromLs = getData();
    const quantityProduct = [];
    for (let id in getDataFromLs) {
      const matchedProduct = products.find((product) => id === product.id);

      if (matchedProduct) {
        matchedProduct.quantity = getDataFromLs[id];
        quantityProduct.push(matchedProduct);
      }
    }
    setAdded(quantityProduct);
  }, [products]);

  return (
    <section id="shop" className="py-12">
      <div className="max-w-7xl m-auto">
        <div className="shop-wrapper grid grid-cols-5 gap-6">
          <div className="shopLeft col-span-4 ">
            <div className="loadProduct grid grid-cols-3 gap-5">
              {products.length >= 10 && see
                ? products
                    .slice(0, 10)
                    .map((item) => (
                      <Product
                        addToCart={addToCart}
                        key={item.id}
                        item={item}
                      ></Product>
                    ))
                : products
                    .slice(0, products.length)
                    .map((item) => (
                      <Product
                        addToCart={addToCart}
                        key={item.id}
                        item={item}
                      ></Product>
                    ))}
            </div>
            <div className="seeMore text-center mt-8">
              {!see || (
                <button
                  onClick={() => setSee(false)}
                  className="btn btn-primary"
                >
                  See More
                </button>
              )}
            </div>
          </div>

          <div className="shopRight col-span-1">
            <Cart clearCart={clearCart} added={added}></Cart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
