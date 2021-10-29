import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  divider: {
    margin: "20px 0 15px 0",
  },
  section: {
    padding: `${theme.spacing(5)}px 0`,
    [theme.breakpoints.down("sm")]: {
      padding: `${theme.spacing(2)}px 0`,
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  grid: {
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap-reverse !important",
    },
  },
  decor: {
    marginTop: 20,
    marginLeft: -5,
  },
  about__text: {
    position: "relative",
    zIndex: 3,
  },
}));
