import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  alert: {
    backgroundColor: "#fff",
    border: `2px solid #d3d3d3`,
    padding: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
    "& svg": {
      marginRight: theme.spacing(1),
    },
  },

  cart_alert_button: {
    marginTop: 6,
    marginLeft: theme.spacing(0.4),
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  form__inputs: {
    display: "flex",
    marginBottom: 20,
    width: "100%",
    "& .MuiFormControl-root": {
      flex: 1,
      backgroundColor: "#fff",
      // boxShadow: theme.shadows[1],
      boxShadow: "0px 1.5px 0px 0px #A6A6A6",
      borderRadius: 5,
    },
    "& label": {
      // backgroundColor: "#fff",
    },
    "& .MuiSelect-root": {
      "&:focus": {
        backgroundColor: "#fff",
      },
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  inputs_quantity: {
    marginRight: 20,
    maxWidth: "45%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      marginRight: 0,
      marginTop: 20,
    },
  },
  quantity_shrink: {
    maxWidth: "33%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  inputs_size: {
    flex: 1,
    "& .MuiSelect-root": {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
  },
  size_menu: {
    "& .MuiPaper-root": {
      border: "3px solid #fafafa",
      backgroundColor: "#fcfcfc",
    },
    "& .MuiListItem-root": {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      "& span": {
        display: "none",
      },
    },
  },
  size_label__price: {
    color: theme.palette.secondary.main,
  },
  back_button: {
    borderRadius: 5,
    marginRight: theme.spacing(2),
    flexBasis: "40%",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginTop: theme.spacing(2),
    },
  },
  buttons: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
    "& button": {
      // boxShadow: theme.shadows[2],
    },
  },
  button: {
    borderRadius: 5,
  },
  button__icon: {
    marginRight: 10,
  },
  button__loading: {
    color: "#fff",
    width: 71,
    height: 71,
  },
  opaque: {
    opacity: 0.8,
  },
  add_to_cart: {
    // backgroundColor: theme.palette.blue.main,
    // "&:hover": {
    //   backgroundColor: theme.palette.blue.main,
    //   opacity: 0.95,
    // },
  },
}));
