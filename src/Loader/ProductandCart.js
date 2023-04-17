import { getData } from "../components/Utlities/AddCart";

const ProductandCart = async () => {
  //fetching product
  const productsData = await fetch("products.json");
  const product = await productsData.json();

  // get cart
  const getCart = getData();
  const previousCart = [];
  for (const id in getCart) {
    const matchedProduct = product.find((item) => {
      return item.id === id;
    });

    if (matchedProduct) {
      matchedProduct.quantity = getCart[id];
    }
    previousCart.push(matchedProduct);
  }

  return { product, previousCart };
};

export default ProductandCart;
