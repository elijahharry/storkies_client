import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cart: {
    display: "flex",
    alignItems: "center",
    padding: "70px 0 100px 0",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 30,
    "& svg": {
      marginLeft: 20,
      width: 50,
      height: 50,
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
    },
  },
  header__title: {
    fontSize: "6rem",
    fontWeight: 65,
    textShadow: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4.5rem",
    },
  },
  icon__badge: {
    "& .MuiBadge-badge": {
      backgroundColor: theme.palette.secondary.main,
      boxShadow: theme.shadows[2],
      color: "#fff",
      fontSize: "1rem",
      height: "2rem",
      minWidth: "2rem",
      borderRadius: "50%",
      top: 4,
      right: -2,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 15,
    },
  },
  cart__items: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: `6px solid ${theme.palette.primary.darker}`,
    boxShadow: theme.shadows[2],
    borderRadius: 10,
  },
  cart__item: {
    position: "relative",
    minHeight: 200,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "4px solid #fafafa",
    flexGrow: 1,
    paddingRight: 25,
    paddingLeft: 10,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
      padding: 0,
      "& .MuiTypography-body1": {
        fontSize: "1.8rem",
      },
      "& .MuiTypography-body2": {
        fontSize: "1.3rem",
      },
    },
  },
  item__column: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
      marginTop: 0,
      marginBottom: 0,
    },
  },
  column_desc: {
    flexGrow: 1,
    color: "#000",
    width: "24%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  column_img: {
    flexGrow: 0,
    marginRight: "7%",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  col_start: {
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      marginTop: 15,
      marginBottom: 15,
    },
  },
  col_center: {
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "row",
      marginTop: 10,
      marginBottom: 10,
    },
  },
  col_end: {
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "row",
      marginTop: 15,
      marginBottom: 15,
      "& .MuiTypography-body2": {
        marginBottom: 5,
        marginLeft: 7,
      },
    },
  },
  item__img: {
    position: "relative",
    height: 180,
    width: 180,
    [theme.breakpoints.down("sm")]: {
      height: "400px",
      flexGrow: 2,
      width: "100%",
    },
  },
  item__quantity: {
    width: 70,
    "& input": {
      width: 70,
      fontWeight: 600,
      height: "1rem",
      marginLeft: 5,
      marginTop: -3,
    },
  },
  quantity_label: {
    width: 70,
  },
  item__remove: {
    position: "absolute",
    marginRight: 25,
    right: 0,
    bottom: 10,
    zIndex: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
    "& p": {
      fontSize: "1rem",
    },
    "& svg": {
      width: "1.1rem",
      height: "1.1rem",
      fontSize: "1.1rem",
      margin: "0 5px 4px 0",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      marginRight: 0,
      marginTop: 15,
    },
  },
  quantity_menu: {
    height: 300,
    "& .MuiPaper-root": {
      border: "3px solid #fafafa",
      backgroundColor: "#fcfcfc",
    },
  },
  checkout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: "flex-grow",
    padding: 15,
  },
  checkout__row: {
    margin: 10,
    display: "flex",
    alignItems: "center",
    "& a": {
      marginRight: 10,
      marginLeft: 10,
      "& span": {
        marginTop: 2,
      },
    },
    "& svg": {
      marginBottom: 5,
      marginRight: 10,
    },
  },
  items__bottom: {
    padding: "8px 25px 8px 25px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fcfcfc",
    width: "100%",
    alignItems: "center",
    "& div": {
      display: "flex",
      alignItems: "center",
    },
    "& h5": {
      marginLeft: 10,
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  hide_mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
      visibility: "hidden",
    },
  },
  empty: {
    marginTop: 30,
    marginBottom: 30,
  },
  checkout_button: {},
}));
