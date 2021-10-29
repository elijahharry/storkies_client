import React from "react";

import { Typography, Button, makeStyles } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

const Titles = ({ tag, resetTags, toggleTagsMenu }) => {
  const classes = useStyles();
  return (
    <div className={classes.titles}>
      <Typography
        align="center"
        variant="h3"
        className={classes.title}
        gutterBottom
      >
        Official Merch
        <Typography align="center" variant="h6" className={classes.trademark}>
          Storkies Originals
          <img src="/svg/copyright.svg" className={classes.copyright} />
        </Typography>
      </Typography>
      <Typography align="center" variant="body1">
        Click on an item to view more pictures & add to cart.{" "}
        {tag ? (
          <Button
            color="secondary"
            onClick={resetTags}
            className={classes.close}
          >
            Remove filter <CancelIcon />
          </Button>
        ) : (
          <Button color="primary" onClick={toggleTagsMenu}>
            Filter By Tag
          </Button>
        )}
      </Typography>
    </div>
  );
};

export default Titles;

const useStyles = makeStyles((theme) => ({
  titles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  title: {
    display: "inline-flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
    },
  },
  trademark: {
    marginTop: 5,
    marginLeft: 20,
    fontFamily: "Satisfy",
    fontWeight: "500",
    fontSize: "2rem",
    textTransform: "none",
    letterSpacing: 2,
    "& span": {
      lineHeight: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: 0,
      marginBottom: 5,
    },
  },
  copyright: {
    height: 20,
    marginLeft: 5,
  },
  close: {
    paddingRight: 30,
    "& svg": {
      width: 20,
      height: 20,
      position: "absolute",
      right: 7,
      top: 7,
    },
  },
}));
