import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    padding: `0 ${theme.spacing(2)}px`,
    width: "100%",
    height: "100%",
  },
  selected: {
    position: "relative",
    minWidth: 300,
    width: "100%",
    height: 600,
    borderRadius: 8,
    overflow: "hidden",
    // boxShadow: theme.shadows[1],
    // border: `1px solid ${theme.palette.blue.main} !important`,
    // border: `1px solid #d3d3d3`,
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
}));
