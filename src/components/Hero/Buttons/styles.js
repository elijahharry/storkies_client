import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  button: {
    margin: 12,
    letterSpacing: 1.2,
    fontSize: "1.05rem",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 5px 10px 0",
      fontSize: "0.875rem",
    },
  },
  title: {
    margin: "10px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0 10px 0",
    },
  },
  title_text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.2rem",
    },
  },
  subtitle: {
    margin: "15px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0 10px 0",
    },
  },
}));
