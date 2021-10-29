import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  thumbnails: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      height: "",
      width: "92vw",
      flexWrap: "wrap",
    },
  },
  thumbnail: {
    position: "relative",
    minWidth: "100%",
    borderRadius: 5,
    transition: "all 300ms",
    cursor: "pointer",
    border: `10px solid transparent`,
    maxHeight: 100,
    flex: 1,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: 100,
      minWidth: 50,
      maxWidth: 80,
      maxHeight: 100,
    },
  },
}));
