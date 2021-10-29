import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  selected: {
    position: "relative",
    width: "100%",
    height: 600,
    overflow: "hidden",
    borderRadius: 5,
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "92vw",
      height: 400,
    },
  },
}));
