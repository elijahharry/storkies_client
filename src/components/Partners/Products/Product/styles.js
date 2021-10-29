import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    flexBasis: "33.3%",
    padding: theme.spacing(2),
    minHeight: 300,
    [theme.breakpoints.down("sm")]: {
      // padding: 0,
      flexBasis: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      flexBasis: "100%",
    },
  },
  product: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "#fff",
    overflow: "hidden",
    margin: `${theme.spacing(1)}px 0`,
    color: theme.palette.text.primary,
  },
  img: {
    position: "relative",
    height: 400,
    width: "100%",
    overflow: "hidden",
    marginBottom: theme.spacing(1),
    borderRadius: 10,
    // [theme.breakpoints.down("sm")]: {
    //   height: 300,
    // },
  },
  photo: {
    zIndex: 1,
  },
  logo: {
    zIndex: 2,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  content: {
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  content_row: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
