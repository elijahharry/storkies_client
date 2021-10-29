import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  description: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      alignItems: "center",
    },
  },
  row: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  type_row: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 20,
    "& h6": {
      fontSize: "1.1rem",
      letterSpacing: 3,
    },
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center !important",
    },
  },

  trademark: {
    marginBottom: theme.spacing(0.38),
    marginLeft: theme.spacing(0.4),
    fontStyle: "italic",
    fontWeight: "500",
    fontSize: ".9rem",
    lineHeight: ".9rem",
    display: "inline-flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  copyright: {
    height: 15,
    marginLeft: 5,
    marginBottom: 3,
  },
  source: {
    fontSize: "1rem",
    letterSpacing: 5,
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  badges: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: 5,
    },
  },
  chip: {
    paddingTop: 5,
    color: "#fff",
  },
  chip__thc: {
    marginRight: 20,
  },
  info: {
    [theme.breakpoints.down("sm")]: {
      margin: 10,
    },
  },
  skeleton__chip: {
    borderRadius: 16,
  },
  thc: {
    fontSize: "1.3rem",
  },
  accordian__subtitle: {
    width: "100%",
  },
  desc_row: {
    padding: theme.spacing(2),
    border: `1px solid #d3d3d3`,
    borderRadius: 8,
    // boxShadow: theme.shadows[1],
    boxShadow: "0px 1.5px 0px 0px #A6A6A6",
    position: "relative",
    backgroundColor: "#fff",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    "&:before": {
      content: "''",
      backgroundColor: "#fff",
      position: "absolute",
      top: -1,
      height: 3,
      left: theme.spacing(2) - 5,
      width: 137,
      zIndex: 0,
    },
  },
  desc: {
    // fontSize: "1rem",
  },
  desc_label: {
    position: "absolute",
    top: -14,
    left: theme.spacing(2) - 5,
    fontSize: ".9rem",
    padding: 5,
    color: "rgba(0, 0, 0, 0.54)",
    zIndex: 1,
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      margin: 5,
      textAlign: "center",
    },
  },
  product_type: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 6,
    },
  },
  title: {
    fontFamily: "Satisfy",
    textTransform: "none",
    fontWeight: 500,
    fontSize: "4.5rem",
    letterSpacing: 0.2,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.7rem",
    },
  },
  price: {
    fontFamily: "Satisfy !important",
    fontWeight: 900,
  },
}));
