import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    position: "relative",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    // position: "fixed",
    zIndex: -1,
    bottom: 0,
    // borderBottom: `2px solid #000`,
  },
  footer__overlay: {
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${theme.spacing(3)}px 0`,
  },
  footer__border: {
    position: "absolute",
    width: "100%",
    height: 10,
    top: 0,
    left: 0,
    zIndex: 6,
    transition: "all 300ms",
  },
  content: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(5),
    // border: `1px solid #fff`,
    // boxShadow: `0 4px 0 #fff, 0 12px 0 ${theme.palette.primary.light}`,
    // backdropFilter: "blur(25px)",
    borderRadius: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  footer_links: {
    display: "flex",
    marginTop: "1rem",
    "& p": {
      cursor: "pointer",
      margin: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
  },
  content_logo: {
    height: 100,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "100%",
    },
  },
  copyright: {
    fontSize: "1rem",
  },
  shadow: {
    position: "absolute",
    zIndex: 10,
    width: "100%",
    height: 10,
    top: -10,
    boxShadow: `${theme.shadows[20]}, ${theme.shadows[10]}`,
  },
}));
