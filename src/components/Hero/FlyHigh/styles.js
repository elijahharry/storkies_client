import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  tagline: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  subtitle: {
    marginTop: -30,
  },
  clouds: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  cloud__bottom_right: {
    height: 125,
    position: "absolute",
    bottom: "5%",
    right: "15%",

    [theme.breakpoints.down("sm")]: {
      right: "-10%",
    },
  },
  cloud__bottom_left: {
    height: 90,
    position: "absolute",
    bottom: "15%",
    left: "20%",
    [theme.breakpoints.down("sm")]: {
      height: 75,
      bottom: "26%",
      left: "15%",
    },
  },
  cloud__top_right: {
    height: 70,
    position: "absolute",
    top: "15%",
    right: "30%",
    [theme.breakpoints.down("sm")]: {
      height: 75,
      top: "28%",
      right: "-10%",
    },
  },
  cloud__top_left: {
    height: 50,
    position: "absolute",
    top: "23%",
    left: "15%",
    [theme.breakpoints.down("sm")]: {
      height: 50,
      top: "20%",
    },
  },
  cloud__center: {
    height: 80,
    position: "absolute",
    bottom: "45%",
    right: "10%",
    [theme.breakpoints.down("md")]: {
      height: 40,
      bottom: "21%",
      right: "-15%",
    },
  },
}));
