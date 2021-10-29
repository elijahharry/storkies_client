import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  blocks: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "40px 0 40px 0",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  blocks__row: {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
  },
  column_2: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
}));
