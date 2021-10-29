import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mc: {
    padding: theme.spacing(3),
    display: "flex",
    width: "100%",
    "& .MuiFormControl-root": {
      margin: `0 ${theme.spacing(2)}px`,
      backgroundColor: "#fff",
      "& span": {
        color: "#000",
      },
      [theme.breakpoints.down("sm")]: {
        margin: `${theme.spacing(1)}px 0`,
      },
    },
    "& .MuiInputBase-root": {
      backgroundColor: "#fff",
    },
    "& button": {
      boxShadow: theme.shadows[1],
      borderRadius: 5,
      margin: `0 ${theme.spacing(2)}px`,
      [theme.breakpoints.down("sm")]: {
        margin: `${theme.spacing(1)}px 0`,
      },
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  popup: {
    backgroundColor: "#fff",
    color: theme.palette.text.primary,
    padding: theme.spacing(4),
    width: "auto",
    borderRadius: 20,
    boxShadow: theme.shadows[22],
  },
  message: {
    width: "80%",
    display: "flex",
    marginTop: theme.spacing(2),
    justifyContent: "center",
    marginBottom: theme.spacing(2),
    // borderTop: `2px solid ${theme.palette.secondary.main}`,
    borderBottom: `4px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2),
    boxShadow: theme.shadows[10],
    borderRadius: 30,
    backgroundColor: "#fff",
    filter: "drop-shadow(0 0 80px #00000024)",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  holder: {
    position: "relative",
    width: "100%",
  },
}));
