import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  section: {
    // paddingBottom: theme.spacing(2),
    position: "relative",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -60,
    position: "relative",
    zIndex: 5,
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    filter: "drop-shadow(0 2px 2px #00000033)",
    borderRadius: 5,
    overflow: "hidden",
    width: "min-content",
    // flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  tab: {
    height: 120,
    width: 240,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `.3px solid #f9f9f9`,
    borderBottom: `5px solid #fff`,
    cursor: "pointer",
    padding: theme.spacing(2),
    // transition: "all 300ms",
  },
  logo: {
    width: "100%",
    height: "100%",
    position: "relative",
    marginBlock: 0,
    marginInline: 0,
  },
  tab_selected: {
    backgroundColor: "#fff",
  },
  tab_unselected: {
    // backgroundColor: "#fcfcfc",
    backgroundColor: "#fff",
  },
}));
