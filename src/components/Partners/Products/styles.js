import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(1),
    },
  },
  products: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap",
    listStyleType: "none",
    marginBlock: 0,
    marginInline: 0,
    paddingInline: 0,
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(3),
    },
  },
  remove: {
    backgroundColor: "#c3c3c3",
    padding: `${theme.spacing(0.7)}px ${theme.spacing(1.3)}px`,
    borderRadius: 20,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    "& svg": {
      marginRight: theme.spacing(0.5),
    },
    "& span": {
      ...theme.typography.button,
      letterSpacing: ".2rem",
    },
  },
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
}));
