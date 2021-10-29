import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useScreenSize } from "context/ScreenSize";
import Link from "next/link";

import Mobile from "./mobile/Mobile";
import CartIcon from "../CartIcon/CartIcon";

import { Container, Button } from "@material-ui/core";
import useStyles from "./styles";

const MerchNav = () => {
  const classes = useStyles();
  const screen = useScreenSize();
  const [buttonHover, setButtonHover] = useState(false);
  const [menuHover, setMenuHover] = useState(false);

  const router = useRouter();
  const color =
    router.pathname !== "/" ? "gradient-secondary" : "gradient-primary";

  const handleMenuHover = () => {
    setMenuHover(true);
  };
  const handleMenuLeave = () => {
    setMenuHover(false);
  };

  return (
    <>
      <nav className={classes.nav}>
        <Container maxWidth="lg">
          <div className={classes.nav_bar}>
            <Link href="/" passHref>
              <a>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="/svg/logo.svg"
                  className={classes.nav_brand}
                />
              </a>
            </Link>

            {screen.width >= 900 ? (
              <div className={classes.nav_links} size="medium">
                <Button color="inherit" className={classes.nav_link}>
                  About
                </Button>
                <Button
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                  color="inherit"
                  className={classes.nav_link}
                >
                  Our tests
                </Button>
                <Button
                  id="gradient-secondary"
                  variant="contained"
                  color="inherit"
                  className={classes.nav_link}
                >
                  Contact
                </Button>
              </div>
            ) : (
              <Mobile />
            )}
          </div>
        </Container>
      </nav>
    </>
  );
};

export default MerchNav;
