import { useState, useEffect } from "react";
import Link from "next/link";
import CartIcon from "../CartIcon/CartIcon";

import {
  IconButton,
  SwipeableDrawer,
  ListSubheader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Collapse,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PhoneIcon from "@material-ui/icons/Phone";
import InfoIcon from "@material-ui/icons/Info";

const Mobile = ({ dark }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.mobile_items}>
        <CartIcon dark={dark} />
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon
            className={`${classes.icon_menu} ${
              dark ? classes.dark : classes.light
            }`}
          />
        </IconButton>
      </div>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <nav className={classes.drawer}>
          <img src="/svg/logo-dark.svg" className={classes.logo} />
          <Typography variant="body1" align="center">
            Use the links below to navigate. Fly high.
          </Typography>
          <Link href="/about" passHref>
            <Typography
              variant="h3"
              align="center"
              color="secondary"
              className={classes.link}
            >
              About
            </Typography>
          </Link>
          {/* <Link color="primary" href="/partners" passHref>
            <Typography
              variant="h3"
              align="center"
              color="primary"
              className={classes.link}
            >
              Partners
            </Typography>
          </Link> */}
          <a href="/delivery" passHref>
            <Typography
              variant="h3"
              align="center"
              color="secondary"
              className={classes.link}
            >
              Delivery
            </Typography>
          </a>
          <Link color="primary" href="/shop" passHref>
            <Typography
              variant="h3"
              align="center"
              color="primary"
              className={classes.link_final}
            >
              Shop
            </Typography>
          </Link>
          <CartIcon dark={true} />
        </nav>
      </SwipeableDrawer>
    </>
  );
};

export default Mobile;
