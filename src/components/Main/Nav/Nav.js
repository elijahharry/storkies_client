import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useScreenSize } from "context/ScreenSize";
import Link from "next/link";

import Mobile from "./Mobile/Mobile";
import CartIcon from "./CartIcon/CartIcon";

import { Button } from "@material-ui/core";
import useStyles from "./styles";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";

const Nav = ({ dark }) => {
  const classes = useStyles();
  const screen = useScreenSize();
  const [buttonHover, setButtonHover] = useState(false);
  const [menuHover, setMenuHover] = useState(false);

  const router = useRouter();

  const handleMenuHover = () => {
    setMenuHover(true);
  };
  const handleMenuLeave = () => {
    setMenuHover(false);
  };

  let logo;
  let color;
  let shop;
  let delivery;
  if (router.pathname === "/") {
    // logo = "logo-green";
    // delivery = "primary";
    // shop = "secondary";
    shop = "primary";
    delivery = "secondary";
    logo = "logo";
  } else if (dark) {
    logo = "logo-dark";
    // delivery = "primary";
    // shop = "secondary";
    // shop = "primary";
    delivery = "secondary";
  } else {
    logo = "logo";
    delivery = "secondary";
    shop = "secondary";
  }

  return (
    <>
      <nav
        className={`${classes.nav} ${
          dark ? classes.nav_dark : classes.nav_light
        }`}
      >
        <div className={"container " + classes.nav_bar}>
          <Link href="/" passHref>
            <a>
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={`/svg/${logo}.svg`}
                className={classes.nav_brand}
              />
            </a>
          </Link>

          {screen.width >= 900 ? (
            <div
              className={`${classes.nav_links} ${
                dark ? classes.dark : classes.light
              }`}
              size="medium"
            >
              <Link href="/about" passHref>
                <Button color="inherit" className={`${classes.nav_link}`}>
                  About
                </Button>
              </Link>
              {/* <Link href="/partners" passHref>
                <Button
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                  color="inherit"
                  className={`${classes.nav_link} ${dark && classes.dark}`}
                >
                  Partners
                </Button>
              </Link> */}
              <div className={classes.shop_links}>
                <Link href="/shop" passHref>
                  <Button
                    // color={shop}
                    // variant="contained"
                    className={`${classes.shop_link}`}
                  >
                    Shop
                  </Button>
                </Link>
                <CartIcon color={shop} dark={dark} />
              </div>
              <a href="/delivery" className={classes.delivery_button}>
                <span className={""}>Delivery</span>
                <img src="/svg/indica.svg" />
                <span className={classes.weed_circle} />
              </a>
            </div>
          ) : (
            <Mobile dark={dark} />
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
