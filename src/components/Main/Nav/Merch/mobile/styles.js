import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  icon_menu: {
    color: "#FFFFFF",
    width: 30,
    height: 30,
  },
  logo: {
    width: "80%",
  },
  icon_avatar: {
    width: 25,
    height: 25,
    color: "#fff",
  },
  drawer: {
    padding: 20,
    width: "80vw",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#000",
  },
  menu: {
    width: "100%",
  },
  panels: {
    paddingLeft: 20,
  },
  panels_avatar: {
    width: 35,
    height: 35,
  },

  img: {
    position: "relative",
    width: "100%",
    minHeight: 400,
    height: "100%",
    borderRadius: 5,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      minHeight: 300,
      width: "90vw",
    },
  },
}));
