import { useState, useEffect } from "react";
import { useCartContext } from "context/Cart";
import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyles from "./styles";

const CartIcon = ({ color, dark }) => {
  const cart = useCartContext()[0];
  const [cartItems, setCartItems] = useState(0);
  const [rotation, setRotation] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    let numItems = 0;
    cart.forEach((item) => {
      numItems += item.variantQuantity;
    });
    setCartItems(numItems);
    setRotation(rotation + 2160);
  }, [cart]);

  return (
    <Link href="/cart" passHref>
      <a>
        <Badge
          badgeContent={cartItems !== 0 ? cartItems : "0"}
          // badgeContent={"0"}
          color="secondary"
          className={classes.icon__badge}
        >
          <ShoppingCartIcon
            className={`${classes.cart__icon} ${dark && classes.dark}`}
          />
        </Badge>
      </a>
    </Link>
  );
};

export default CartIcon;
