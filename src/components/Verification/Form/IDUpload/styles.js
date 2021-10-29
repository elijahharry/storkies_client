import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  uploads: {
    margin: `${theme.spacing(1)}px 0`,
    width: "100%",
    height: 200,
    backgroundColor: "#f5f5f5",
    border: `1px solid #d3d3d3`,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "& img": {
      width: "100%",
      height: 180,
      objectFit: "contain",
    },
    "& span": {
      ...theme.typography.body2,
    },
  },
  empty: {
    width: 30,
    height: 30,
    backgroundColor: "#8a3838",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: "50%",
    boxShadow: theme.shadows[2],
    color: "#fff",
  },
  verify: {
    margin: `${theme.spacing(1)}px 0`,
    fontSize: "1rem",
    width: "100%",
    textAlign: "center",
  },
  upload: {
    margin: `${theme.spacing(0.4)}px 0`,
    "& svg": {
      width: 18,
      height: 18,
      marginBottom: 3,
      marginRight: theme.spacing(1),
    },
  },
}));
