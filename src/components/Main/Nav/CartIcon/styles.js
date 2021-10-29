import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cart__icon: {
    height: 30,
    width: 30,
    color: "#fff",
    marginBottom: 4,
  },
  icon__badge: {
    "& .MuiBadge-badge": {
      color: "#fff",
      top: 4,
      right: -2,
      fontWeight: 500,
    },
  },
  dark: {
    color: "#000 !important",
  },
}));
