import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  description: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: theme.spacing(3),
  },
  trademark: {
    fontFamily: "Satisfy",
    fontWeight: "500",
    fontSize: "1.8rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  genetics: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontStyle: "italic",
    "& img": {
      width: "1.5rem",
      height: "1.5rem",
      transform: "rotate(10deg) translateY(-2px)",
    },
  },
  text: {
    margin: `${theme.spacing(1.2)}px 0`,
  },
  source: {
    marginTop: theme.spacing(1.2),
    marginBottom: theme.spacing(0.3),
    fontSize: "1.1rem",
    letterSpacing: ".1rem",
  },
}));
