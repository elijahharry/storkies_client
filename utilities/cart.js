export const saveLocalData = (cart, checkoutId, checkoutUrl) => {
  localStorage.setItem(
    process.env.CART_LOCAL_STORAGE,
    JSON.stringify([cart, checkoutId, checkoutUrl])
  );
};

export const getLocalData = () => {
  return JSON.parse(localStorage.getItem(process.env.CART_LOCAL_STORAGE));
};

export const setLocalData = (setCart, setCheckoutId, setCheckoutUrl) => {
  const localData = getLocalData();

  if (localData) {
    if (Array.isArray(localData[0])) {
      setCart([...localData[0]]);
    } else {
      setCart([localData[0]]);
    }
    setCheckoutId(localData[1]);
    setCheckoutUrl(localData[2]);
  }
};

export const getCartSubTotal = (cart) => {
  if (cart.length === 0) {
    return 0;
  } else {
    let totalPrice = 0;
    cart.forEach(
      (item) =>
        (totalPrice +=
          parseInt(item.variantQuantity) * parseFloat(item.variantPrice))
    );
    return Math.round(totalPrice * 100) / 100;
  }
};
