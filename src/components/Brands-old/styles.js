import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  section: {
    paddingBottom: theme.spacing(2),
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
  },
  tab: {
    height: 150,
    width: 270,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `.3px solid #f9f9f9`,
    borderBottom: `5px solid #fff`,
    cursor: "pointer",
    // transition: "all 300ms",
  },
  bio: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: `${theme.spacing(5)}px 0`,
  },
  tab_selected: {
    backgroundColor: "#fff",
  },
  tab_unselected: {
    // backgroundColor: "#fcfcfc",
    backgroundColor: "#fff",
  },
}));
