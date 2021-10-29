import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  nav: {
    height: "auto",
    width: "100%",
    zIndex: 5,
    // margin: "15px 0 15px 0",
    [theme.breakpoints.down("sm")]: {
      height: "80px",
    },
  },
  nav_light: {
    position: "absolute",
  },
  nav_dark: {
    position: "absolute",
    color: "#000",
  },
  nav_bar: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav_brand: {
    height: "110px",
    marginTop: -10,
    [theme.breakpoints.down("sm")]: {
      height: "90px",
      marginTop: 5,
    },
    [theme.breakpoints.down("xs")]: {
      height: "70px",
      marginTop: 5,
    },
  },
  nav_links: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  nav_link: {
    fontSize: "1rem",
    margin: 15,
    color: "inherit",
  },
  shop_link: {
    fontSize: "1rem",
    marginRight: 3,
    color: "inherit",
  },
  shop_links: {
    margin: 15,
    display: "flex",
    alignItems: "center",
  },
  final_nav_link: {
    marginRight: 0,
    marginLeft: 30,
  },
  dark: {
    color: theme.palette.text.primary,
  },
  light: {
    color: "#fff",
  },
  delivery: {
    // borderRadius: "50%",
    borderRadius: 30,
    height: 50,
    border: `3px solid #323232`,
    // backgroundColor: "#fff",
    // color: theme.palette.secondary.dark,
  },
  delivery_button: {
    borderRadius: 30,
    height: 50,
    // borderBottom: `3px solid #323232`,
    borderBottom: `4px solid ${theme.palette.secondary.darker}`,
    backgroundColor: theme.palette.secondary.main,
    marginRight: 0,
    marginLeft: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `1px 5px`,
    paddingRight: 8,
    // backgroundColor: "#323232",
    backgroundColor: theme.palette.secondary.main,
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      borderBottom: `0px solid ${theme.palette.secondary.darker}`,
      backgroundColor: theme.palette.secondary.dark,
    },
    "& span": {
      lineHeight: 0,
      marginTop: 4,
      borderRadius: 30,
      padding: theme.spacing(1),
      fontSize: "1.05rem",
      textTransform: "uppercase",
      fontFamily: "Josefin Sans",
      color: "#fff",
    },
    "& img": {
      width: 25,
      height: 25,
      marginLeft: -5,
      position: "relative",
      zIndex: 1,
    },
  },
  weed_circle: {
    position: "absolute",
    width: 24,
    height: 24,
    backgroundColor: theme.palette.secondary.darker,
    right: 8,
    zIndex: 0,
    // marginTop: 2,
    // marginBottom: ,
  },
}));
