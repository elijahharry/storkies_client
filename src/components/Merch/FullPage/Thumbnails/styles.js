import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  thumbnails: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
  thumbnail: {
    position: "relative",
    minWidth: "100%",
    cursor: "pointer",
    border: `10px solid transparent`,
    maxHeight: 80,
    margin: `${theme.spacing(1)}px 0`,
    flex: 1,
    backgroundColor: `#fff`,
    boxShadow: theme.shadows[1],
    borderRadius: 5,
    zIndex: 0,
    borderWidth: 2,
    // borderColor: "#d3d3d3 !important",
    [theme.breakpoints.down("sm")]: {
      minWidth: 30,
      maxWidth: 60,
      height: 80,
      margin: `0 ${theme.spacing(1)}px`,
    },
    // "&::after": {
    //   content: "''",
    //   transition: "border 300ms",
    //   width: "100%",
    //   height: "100%",
    //   position: "absolute",
    //   zIndex: "2",
    //   border: `3px solid transparent`,
    //   top: 0,
    //   left: 0,
    // },
  },
  thumbnail__selected: {
    transform: "scale(1.15)",
    boxShadow: theme.shadows[5],
    zIndex: 1,
    borderWidth: 3,
  },
}));
