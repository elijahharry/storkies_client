import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  age_verification: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 20,
    backdropFilter: "blur(15px)",
    backgroundColor: "rgba(11, 51, 8, .7)",
  },
  disclaimer: {
    color: "#d3d3d3",
    postion: "absolute",
    bottom: 0,
    left: 0,
    textAlign: "center",
    zIndex: 10,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  prompt: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "95%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "92%",
    },
  },
  logo: {
    width: 230,
  },
  paper: {
    border: `2px solid #242424`,
    backgroundColor: "#fff",
    position: "relative",
    borderRadius: "50%",
    boxShadow: theme.shadows[10],
    padding: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 500,
    width: 500,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      maxHeight: "80vh",
      width: "auto",
      maxWidth: "95vw",
      padding: 10,
      borderRadius: 50,
    },
  },
  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {},
  modalRoot: {
    backgroundImage: "url(/images/agegate.jpg)",
    backgroundSize: "cover",
  },
  largeRadio: {
    "& svg": {
      width: "1.5em",
      height: "1.5em",
    },
  },
  radios: {
    marginTop: 20,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0 0 0",
  },
  enter: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  enter_button: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  enter__button_text: {
    marginTop: 4,
    marginLeft: 4,
    fontSize: "1rem",
  },
}));
