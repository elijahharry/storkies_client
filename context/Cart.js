import { createContext, useContext, useState, useEffect } from "react";
import { setLocalData, saveLocalData } from "utilities/cart";
import { createCheckout, updateCheckout } from "utilities/checkout";

const CartContext = createContext();
const AddToCartContext = createContext();
const UpdateCartQuantityContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const useAddToCartContext = () => {
  return useContext(AddToCartContext);
};
export const useUpdateCartQuantityContext = () => {
  return useContext(UpdateCartQuantityContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [checkoutId, setCheckoutId] = useState("");
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setLocalData(setCart, setCheckoutId, setCheckoutUrl);
  }, []);

  // Update cart if changes are made in a seperate window/tab.
  useEffect(() => {
    const onReceiveMessage = (e) => {
      setLocalData(setCart, setCheckoutId, setCheckoutUrl);
    };
    window.addEventListener("storage", onReceiveMessage);
    return () => {
      window.removeEventListener("storage", onReceiveMessage);
    };
  }, []);

  const addToCart = async (newItem) => {
    setisLoading(true);
    if (cart.length === 0) {
      setCart([...cart, newItem]);
      const response = await createCheckout(newItem);
      setCheckoutId(response.checkout.id);
      setCheckoutUrl(response.checkout.webUrl);
      saveLocalData(newItem, response.checkout.id, response.checkout.webUrl);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 8000);
    } else {
      let newCart = [...cart];
      let itemAdded = false;
      newCart.map((item) => {
        if (item.variantId === newItem.variantId) {
          item.variantQuantity += newItem.variantQuantity;
          itemAdded = true;
        }
      });
      let newCartWithItem = [...newCart];
      !itemAdded && (newCartWithItem = [...newCart, newItem]);
      setCart(newCartWithItem);
      await updateCheckout(newCartWithItem, checkoutId);
      saveLocalData(newCartWithItem, checkoutId, checkoutUrl);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 8000);
    }
    setisLoading(false);
  };

  const updateCartItemQuantity = async (id, quantity) => {
    setisLoading(true);
    let newQuantity = Math.floor(quantity);
    quantity === "" && (newQuantity = "");

    let newCart = [...cart];
    newCart.forEach((item) => {
      item.variantId === id && (item.variantQuantity = newQuantity);
    });
    newCart = newCart.filter((item) => item.variantQuantity !== 0);
    setCart(newCart);
    await updateCheckout(newCart, checkoutId);
    saveLocalData(newCart, checkoutId, checkoutUrl);
    setisLoading(false);
  };

  return (
    <CartContext.Provider value={[cart, checkoutUrl, isLoading, success]}>
      <AddToCartContext.Provider value={addToCart}>
        <UpdateCartQuantityContext.Provider value={updateCartItemQuantity}>
          {children}
        </UpdateCartQuantityContext.Provider>
      </AddToCartContext.Provider>
    </CartContext.Provider>
  );
};
