import React from "react";
import { makeStyles } from "@material-ui/core";

const ListingSkel = () => {
  const classes = useStyles();
  return (
    <div className={classes.skeleton}>
      <div className={classes.media}>
        <div className={`${classes.img}`}>
          <span className={classes.fill} />
        </div>
        {/* <img src="/svg/shirt.svg" className={classes.shirt} /> */}
      </div>
      <div className={classes.price}>
        <span className={classes.fill} />
      </div>
      <div className={classes.textblocks}>
        <div className={classes.title}>
          <span className={classes.fill} />
        </div>
        <div className={classes.desc}>
          <span className={classes.fill} />
        </div>
        <div className={classes.button}>
          <span className={classes.fill} />
        </div>
      </div>
    </div>
  );
};

export default ListingSkel;

const useStyles = makeStyles((theme) => ({
  skeleton: {
    pointerEvents: "none",
    height: 496,
    flexBasis: "25%",
    padding: theme.spacing(1),
    position: "relative",
    zIndex: 1,
    "&:hover": {
      zIndex: 2,
      filter: "drop-shadow(0 0 1000px #000)",
      [theme.breakpoints.down("sm")]: {
        filter: "drop-shadow(0 0 50px #0000001a)",
      },
    },
    [theme.breakpoints.down("md")]: {
      flexBasis: "33%",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "50%",
      height: 492,
    },
    [theme.breakpoints.down("xs")]: {
      flexBasis: "100%",
    },
  },
  media: {
    height: 335,
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    paddingTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  shirt: {
    position: "absolute",
    zIndex: 2,
    height: "80%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  price: {
    position: "absolute",
    top: 265,
    right: "-4.7%",
    width: 77,
    height: 77,
    borderRadius: "50%",
    position: "absolute",
    overflow: "hidden",
    border: "8px solid #fff",
  },

  textblocks: {
    width: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: theme.spacing(0.85),
    width: "60%",
    height: 22,
  },
  desc: {
    width: "40%",
    marginTop: theme.spacing(1.2),
    height: 17,
  },
  button: {
    width: "28%",
    marginTop: theme.spacing(0.8),
    height: 20,
  },

  fill: {
    display: "block",
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#e8e8e8",
    background: "linear-gradient(90deg, #e8e8e8, #e6e6e6, #e8e8e8)",
    "&:after": {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      content: '""',
      position: "absolute",
      animation: "$skeleton .5s linear 0.5s infinite",
      transform: "translateX(-100%)",
      background:
        "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent)",
    },
  },
  "@keyframes skeleton": {
    "0%": { transform: "translateX(-100%)" },
    "60%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(100%)" },
  },
}));
