import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  block: {
    position: "relative",
    width: "100%",
    color: "#fff",
    margin: theme.spacing(1),
    transition: "0s zIndex",
    backdropFilter: "blur(30px)",
    transition: "border 300ms",
    border: "0px solid #D3D3D3",
    "&:hover": {
      outline: "8px solid #D3D3D3",
    },
    minHeight: 425,
    [theme.breakpoints.down("sm")]: {
      height: 250,
    },
  },
  block__content: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& h2": {
      marginTop: 10,
      fontFamily: "Satisfy",
      textTransform: "none",
      textShadow:
        "0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000",
      [theme.breakpoints.down("sm")]: {},
    },
    "& h6": {
      // textShadow:
      //   "0 0 1.5px #000, 0 0 1.5px #000, 0 0 1.5px #000, 0 0 1.5px #000, 0 0 1.5px #000, 0 0 1.5px #000",
    },
  },
  overlay_primary: {
    backgroundColor: `${theme.palette.primary.main}cf`,
  },
  overlay_secondary: {
    backgroundColor: `${theme.palette.secondary.main}B3`,
  },

  overlay_black: {
    backgroundColor: "#000000BF",
  },
  block__hover: {
    padding: 25,
    position: "absolute",
    width: "100%",
    height: "100%",
    backdropFilter: "blur(20px)",
    boxShadow: "0 0 200px #fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      boxShadow: "0 0 0",
    },
  },
  hover__content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    "& h3": {
      textShadow:
        "0 0 1.5px #000, 0 0 1.5px #000, 0 0 1.5px #000, 0 0 1.5px #000, 0 0 1.5px #000, 0 0 1.5px #000",
    },
  },
  overlay_blue: {
    backgroundColor: "#4f9cffc7",
  },
  button_blue: {
    marginTop: 15,
    backgroundColor: "#4f9cffc7",
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  button_primary: {
    marginTop: 15,
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  button_secondary: {
    marginTop: 15,
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  button_black: {
    marginTop: 15,
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#3d3d3d",
    },
  },
  velvet: {
    height: 250,
    width: 368,
  },
}));
