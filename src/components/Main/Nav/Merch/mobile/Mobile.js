import { useState, useEffect } from "react";
import Link from "next/link";

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
} from "@material-ui/core";
import useStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PhoneIcon from "@material-ui/icons/Phone";
import InfoIcon from "@material-ui/icons/Info";

const Mobile = () => {
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
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon className={classes.icon_menu} />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <nav className={classes.drawer}>
          <img src="/svg/logo-dark.svg" className={classes.logo} />
          <List
            component="nav"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader" ali>
                Use the links below to navigate.
              </ListSubheader>
            }
            className={classes.menu}
          >
            <Link href="/about" passHref>
              <a className="a" onClick={handleClick}>
                <ListItem button fullWidth>
                  <ListItemAvatar>
                    <Avatar id="gradient-secondary">
                      <InfoIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="About" />
                </ListItem>
              </a>
            </Link>
          </List>
        </nav>
      </SwipeableDrawer>
    </>
  );
};

export default Mobile;
