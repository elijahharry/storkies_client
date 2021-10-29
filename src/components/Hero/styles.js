import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  hero: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
    borderBottom: `2px solid #383838`,
    "& video": {
      objectFit: "cover",
    },
  },
  main: {
    height: "98vh",
  },
  sub: {
    height: "70vh",
    [theme.breakpoints.down("sm")]: {
      height: "80vh",
    },
  },

  fill: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: "all 300ms",
  },
  overlay: {
    zIndex: 2,
    color: "#FFF",
    padding: "70px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  placeholder__image: {
    zIndex: 1,
  },
  placeholder__blurhash: {
    zIndex: 2,
  },
  border: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "10px",
    zIndex: 2,
    transition: "all 300ms",
  },
  shadow: {
    position: "absolute",
    zIndex: 10,
    width: "100%",
    height: 10,
    bottom: -10,
    transform: "rotate(180deg)",
    boxShadow: `${theme.shadows[20]}, ${theme.shadows[10]}`,
  },
  shadow2: {
    position: "absolute",
    zIndex: 10,
    width: "100%",
    height: 10,
    top: -10,
    boxShadow: `${theme.shadows[20]}, ${theme.shadows[10]}`,
  },
}));
