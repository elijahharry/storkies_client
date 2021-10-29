import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  tag: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: 100,
    height: 40,
    borderRadius: "3px 4px 4px 3px",
    marginLeft: 19,
    position: "relative",
    color: "white",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: 38,
    padding: "0 10px 0 10px",
    "& h4": {
      fontFamily: "Satisfy",
      fontWeight: 700,
      marginTop: 5,
      fontSize: "1.5rem",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      display: "block",
      left: -19,
      width: 0,
      height: 0,
      borderTop: "20px solid transparent",
      borderBottom: "20px solid transparent",
    },
    "&::after": {
      content: "''",
      backgroundColor: "white",
      borderRadius: "50%",
      width: 4,
      height: 4,
      display: "block",
      position: "absolute",
      left: -6,
      top: 18,
    },
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    borderLeft: `1px solid ${theme.palette.primary.main}`,
    "&::before": {
      borderRight: `19px solid ${theme.palette.primary.main}`,
    },
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    borderLeft: `1px solid ${theme.palette.secondary.main}`,
    "&::before": {
      borderRight: `19px solid ${theme.palette.secondary.main}`,
    },
  },
  skeleton: {
    borderLeft: `1px solid #e8e8e8`,
    color: "transparent",
    "&::before": {
      borderRight: `19px solid #e8e8e8`,
      backgroundColor: "transparent",
    },
  },
}));
