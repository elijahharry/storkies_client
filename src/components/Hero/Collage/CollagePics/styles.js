import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  single: {
    width: "100%",
    height: "100%",
    position: "relative",
    animate: "transform 400ms",
  },
  img: {
    zIndex: 0,
  },
  thumbnail: {
    zIndex: 1,
    width: "100%",
    height: "100%",
    "& img": {
      filter: "contrast(150%) saturate(110%) blur(20px)",
      transform: "scale(1.05)",
    },
  },
  double: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  double_img: {
    height: "100%",
    flexBasis: "50%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexBasis: "50%",
    },
  },
  quadruple: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  quadruple_img: {
    width: "50%",
    flexBasis: "50%",
    position: "relative",
  },

  octuple: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  octuple_img: {
    width: "25%",
    flexBasis: "50%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      flexBasis: "25%",
    },
  },
  show: {
    transform: "scale(1)",
  },
  hide: {
    transform: "scale(1)",
  },
}));
