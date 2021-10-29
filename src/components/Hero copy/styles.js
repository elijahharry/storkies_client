import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  hero: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
    "& video": {
      objectFit: "cover",
    },
  },
  main: {
    height: "85vh",
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
}));
