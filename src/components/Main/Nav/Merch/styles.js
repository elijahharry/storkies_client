import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  nav: {
    width: "100%",
    position: "relative",
    zIndex: 5,
    padding: "5px 0 5px 0",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      height: "80px",
    },
  },
  nav_bar: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav_brand: {
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      height: "90px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "70px",
    },
  },
  nav_links: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "#fff",
  },
  nav_link: {
    fontSize: "1rem",
    margin: 15,
  },
  helix: {
    width: "35px",
    margin: "0 0 2px 0",
  },
}));
