import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  section: {
    height: 500,
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    padding: `${theme.spacing(6)}px 0`,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    "& .MuiContainer-root": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .MuiButtonBase-root": {
      marginTop: theme.spacing(3),
    },
  },
}));
