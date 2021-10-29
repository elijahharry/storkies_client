import { useState, useEffect } from "react";
import { useCartContext } from "@context/Cart";
import { getCartSubTotal } from "@utils/cart";
import { useUpdateCartQuantityContext } from "@context/Cart";
import Image from "next/image";
import Link from "next/link";
import { useScreenSize } from "context/ScreenSize";

import {
  Container,
  Typography,
  Select,
  MenuItem,
  Badge,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Cart = () => {
  const classes = useStyles();

  const updateCartQuantity = useUpdateCartQuantityContext();
  const [cart, checkoutUrl] = useCartContext();
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setCartItems(cart);
    setSubtotal(getCartSubTotal(cart));
  }, [cart]);

  useEffect(() => {
    let newQuantity = 0;
    cart.map((item) => {
      newQuantity += item.variantQuantity;
    });
    setQuantity(newQuantity);
  }, [cart]);

  const updateItem = (id, quantity) => {
    updateCartQuantity(id, quantity);
  };

  let quantities = [];
  for (let i = 1; i <= 100; i++) {
    quantities.push(i);
  }
  const screen = useScreenSize();
  return (
    <section id="cart" className={classes.cart}>
      <Container maxWidth="lg">
        <div className={classes.header}>
          <Typography
            variant="h1"
            className={classes.header__title}
            // color="secondary"
          >
            Your Cart
          </Typography>
          <Badge badgeContent={quantity} className={classes.icon__badge}>
            <ShoppingCartIcon />
          </Badge>
        </div>
        <div className={classes.cart__items}>
          {quantity > 0 ? (
            <>
              {cartItems.map((item) => (
                <div
                  key={"cart-" + item.productTitle}
                  className={classes.cart__item}
                >
                  <div
                    className={`${classes.item__column} ${classes.column_img}`}
                  >
                    <Link href={`/shop/${item.productHandle}`} passHref>
                      <a className={classes.item__img}>
                        <Image
                          layout="fill"
                          objectFit="contain"
                          objectPosition="center left"
                          src={item.productImage.originalSrc}
                        />
                      </a>
                    </Link>
                  </div>
                  <Link href={`/shop/${item.productHandle}`} passHref>
                    <a
                      className={`${classes.item__column} ${classes.col_start} ${classes.column_desc}`}
                    >
                      <Typography variant="body1" align="left" gutterBottom>
                        {item.productTitle}
                      </Typography>
                      <Typography variant="body2" align="left">
                        {item.variantTitle}
                      </Typography>
                    </a>
                  </Link>
                  <div
                    className={`${classes.item__column} ${classes.col_center}`}
                  >
                    <Typography
                      variant="body2"
                      align="left"
                      gutterBottom
                      className={classes.quantity_label}
                    >
                      Qty:
                    </Typography>
                    <Select
                      className={classes.item__quantity}
                      id="quantity"
                      value={item.variantQuantity}
                      onChange={(e) =>
                        updateItem(item.variantId, e.target.value)
                      }
                      MenuProps={{
                        className: classes.quantity_menu,
                        elevation: 0,
                      }}
                    >
                      {quantities.map((number) => (
                        <MenuItem key={"menu-" + number} value={number}>
                          {number}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                  <div className={`${classes.item__column} ${classes.col_end}`}>
                    <Typography variant="body1" align="right" gutterBottom>
                      ${item.variantPrice}
                    </Typography>
                    <Typography variant="body2" align="right">
                      per {item.productType.toLowerCase()}
                    </Typography>
                  </div>
                  <div
                    className={classes.item__remove}
                    onClick={() => updateItem(item.variantId, 0)}
                  >
                    <RemoveShoppingCartIcon />
                    <Typography variant="body2" align="right">
                      Remove
                    </Typography>
                  </div>
                </div>
              ))}
              <div className={classes.items__bottom}>
                {screen.width > 960 && (
                  <div className={classes.hide_mobile}>
                    <Typography variant="body2">
                      You currently have {quantity}{" "}
                      {quantity > 1 ? "items" : "item"} in your cart.
                    </Typography>
                  </div>
                )}
                <div>
                  <Typography variant="body2">Estimated* subtotal:</Typography>
                  <Typography variant="h5" color="secondary">
                    <strong>${subtotal}</strong>
                  </Typography>
                </div>
              </div>
            </>
          ) : (
            <Typography variant="body1" className={classes.empty}>
              Looks like your cart is currently empty... Why not add some merch
              via the button below?
            </Typography>
          )}
        </div>
        <div className={classes.checkout}>
          {quantity > 0 ? (
            <>
              <Typography variant="body2" gutterBottom>
                *Taxes and shipping calculated at checkout.
              </Typography>
              <div className={classes.checkout__row}>
                <Link href="/shop" passHref>
                  <Button size="large">
                    <AddShoppingCartIcon />
                    Add more
                  </Button>
                </Link>
                <Button
                  href={checkoutUrl}
                  variant="contained"
                  // color="primary"
                  color="primary"
                  size="large"
                  className={classes.checkout_button}
                >
                  <CreditCardIcon />
                  Checkout now
                </Button>
              </div>
            </>
          ) : (
            <div className={classes.checkout__row}>
              <Link href="/" passHref>
                <Button size="large">
                  <ArrowBackIcon />
                  Back home
                </Button>
              </Link>
              <Link href="/shop" passHref>
                <Button variant="contained" color="secondary" size="large">
                  <AddShoppingCartIcon /> View merch
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Cart;
