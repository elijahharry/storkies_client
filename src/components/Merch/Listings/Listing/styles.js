import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export default makeStyles((theme) => ({
  holder: {
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
    },
    [theme.breakpoints.down("xs")]: {
      flexBasis: "100%",
    },
  },
  card: {
    height: "100%",
    position: "relative",
    cursor: "pointer",
    borderRadius: "5px",
    padding: `${theme.spacing(2)}px 0`,
    paddingTop: 0,
    "&:hover": {
      backgroundColor: "#ffffff",
      transform: "scale(1.05)",
      boxShadow: theme.shadows[12],
      [theme.breakpoints.down("sm")]: {
        transform: "scale(1)",
      },
      "& .price": {
        transform: "scale(1.3)",
        boxShadow: theme.shadows[10],
      },
      "& .image-2": {
        opacity: 1,
      },
      // filter: "brightness(95%)",
    },
  },
  card__main: {
    // overflow: "hidden",
    position: "relative",
    "&:hover": {
      "&:after": {
        transform: "scale(1.3)",
      },
    },
    "&:after": {
      content: "''",
      position: "absolute",
      zIndex: 4,
      top: 260,
      right: "-5%",
      width: 60,
      height: 60,
      borderRadius: "50%",
      backgroundColor: "#fff",
      boxShadow: theme.shadows[2],
    },
  },
  media: {
    width: "100%",
    height: 325,
    marginBottom: theme.spacing(1),
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: 400,
    },
  },
  border_primary: {
    "&:hover": {
      border: `3px solid ${theme.palette.primary.main}`,
    },
  },
  border_secondary: {
    "&:hover": {
      border: `3px solid ${theme.palette.secondary.main}`,
    },
  },
  cta: {
    width: "100%",
    borderRadius: "0 0 5px 5px",
    padding: "5px 16px 5px 16px",
    zIndex: 1,
    position: "relative",
    height: 35,
    overflow: "hidden",
  },
  details_title: {
    width: "100%",
  },
  details_type: {
    fontSize: `1.1rem`,
    // textTransform: "uppercase",
    // letterSpacing: 2,
  },
  options_button: {
    paddingLeft: 10,
    alignItems: "center",
    paddingBottom: 3,
    paddingRight: 10,
    color: "#fff",
    "& svg": {
      height: 20,
      width: 20,
      marginRight: 3,
      marginBottom: 2,
    },
  },
  content: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    color: theme.palette.text.primary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#fff",
  },
  img_2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    opacity: 0,
    transition: "all 100ms",
  },
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
  price: {
    // ...theme.typography.body2,
    fontSize: "1rem",
    position: "absolute",
    zIndex: 5,
    color: "#fff",
    backgroundColor: theme.palette.secondary.main,
    top: 260,
    right: "-5%",
    width: 60,
    height: 60,
    padding: `${theme.spacing(0.6)}px ${theme.spacing(1.5)}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "50%",
    boxShadow: theme.shadows[5],
    // border: `1px solid #fff`,
  },
  limited: {
    // ...theme.typography.body2,
    // backgroundColor: theme.palette.primary.main,

    position: "absolute",
    zIndex: 4,
    width: "auto",
    height: 23,
    padding: `${theme.spacing(1.4)}px ${theme.spacing(1.2)}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    // boxShadow: theme.shadows[2],
    // right: 35,
    transform: "translateX(-50%)",
    left: "50%",
    top: 310,
    opacity: 1,
    backgroundColor: "#fff",
    color: theme.palette.text.primary,
    // color: "#fff",
    // left: 0,
    // top: 30,
    // border: `1px solid #fff`,
    // borderBottom: `2px solid #3278d1`,
    "& span": {
      whiteSpace: "nowrap",
      lineHeight: ".75rem",
      marginTop: 3,
      textTransform: "uppercase",
      letterSpacing: 2,
      fontSize: ".75rem",
      color: theme.palette.blue.main,
      // fontWeight: 700,
    },
  },
  limited_text: {
    whiteSpace: "nowrap",
    lineHeight: ".75rem",
    marginTop: 3,
    textTransform: "uppercase",
    letterSpacing: 3,
    fontWeight: 900,
    fontSize: ".85rem",
    color: theme.palette.blue.main,
  },
}));
