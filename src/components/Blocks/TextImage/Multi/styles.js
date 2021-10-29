import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  images: {
    position: "relative",
    width: "100%",
    height: 550,
    display: "flex",
    alignItems: "center",
    overflow: "visible",
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      height: 520,
      width: "100vw",
      alignItems: "flex-start",
      overflow: "hidden",
    },
  },
  images_normal: {
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  images_flipped: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  image: {
    position: "absolute",
    overflow: "hidden",
  },
  // Primary image
  image__1: {
    height: 550,
    width: "70%",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      width: "90%",
      height: 450,
    },
  },
  image__1_normal: {
    marginRight: "7.5%",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  image__1_flipped: {
    marginLeft: "7.5%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  // Backdrop, semi-transparent image
  image__2: {
    height: 400,
    width: "115%",
    zIndex: 0,
    opacity: 0.1,
    filter: "brightness(125%)",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      marginTop: 200,
      height: 300,
      opacity: 0.3,
    },
  },
  image__2_normal: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "30vw",
    },
  },
  image__2_flipped: {
    filter: "brightness(125%)",
    [theme.breakpoints.down("sm")]: {
      marginRight: "20vw",
    },
  },
}));
