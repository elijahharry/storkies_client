import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  blocks: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "40px 0 40px 0",
    overflow: "hidden",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  blocks__column: {
    width: "50%",
    height: "auto",
    display: "flex",
    padding: 5,
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  column_2: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
}));
