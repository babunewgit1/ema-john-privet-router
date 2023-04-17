const addData = (id) => {
  let shopingCart = {};
  const getItems = localStorage.getItem("shopingCart");

  if (getItems) {
    shopingCart = JSON.parse(getItems);
  }

  if (shopingCart[id]) {
    shopingCart[id] = shopingCart[id] + 1;
  } else {
    shopingCart[id] = 1;
  }

  localStorage.setItem("shopingCart", JSON.stringify(shopingCart));
};

const getData = () => {
  let shopingCart = {};
  const getDatals = localStorage.getItem("shopingCart");
  if (getDatals) {
    shopingCart = JSON.parse(getDatals);
  }
  return shopingCart;
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopingCart");
  if (storedCart) {
    const shopingCart = JSON.parse(storedCart);
    if (id in shopingCart) {
      delete shopingCart[id];
      localStorage.setItem("shopingCart", JSON.stringify(shopingCart));
    }
  }
};

export { addData, getData, removeFromDb };
