import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  titles: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "9rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5rem",
      marginBottom: theme.spacing(1.5),
    },
  },
  subtitle: {
    marginTop: -10,
    fontSize: "2.2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
  },
}));
