import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const Storkies = createMuiTheme({
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiCard: {
      disableElevation: true,
    },
  },
  palette: {
    border: {
      light: "#fafafa",
      medium: "#f0f0f0",
    },
    primary: {
      light: "#55875f",
      main: "#416D4A",
      dark: "#396643",
      darke: "#365c3e",
      darker: "#26422c",
    },
    blue: {
      main: "#4f9cff",
      dark: "#3a7bcf",
      darker: "#2a63ad",
    },
    secondary: {
      light: "#ffb03d",
      main: "#F49302",
      dark: "#e68b05",
      darker: "#bd7000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Gilbert", "Satisfy"].join(","),
    h1: {
      fontFamily: "Satisfy",
      letterSpacing: ".2rem",
      fontSize: "12rem",
    },
    h2: {
      fontFamily: "Gilbert",
      letterSpacing: ".5rem",
      fontSize: "5.5rem",
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: "Gilbert",
      letterSpacing: ".4rem",
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: "Gilbert",
      letterSpacing: ".3rem",
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: "Josefin Sans",
    },
    h6: {
      fontFamily: "Josefin Sans",
      fontSize: "1.4rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "3rem",
      fontWeight: 600,
      letterSpacing: ".7rem",
      fontFamily: "Josefin Sans",
      textTransform: "uppercase",
    },
    overline: {
      fontSize: "1.4rem",
      letterSpacing: ".3rem",
    },
    subtitle2: {
      fontFamily: "Josefin Sans",
      textTransform: "uppercase",
      fontWeight: 600,
      fontSize: "1.3rem",
      letterSpacing: ".35rem",
    },
    body1: {
      fontFamily: "Josefin Sans",
      fontSize: "1.3rem",
    },
    body2: {
      fontFamily: "Josefin Sans",
      fontSize: "1.15rem",
    },
  },
});

const theme = responsiveFontSizes(Storkies);

export default theme;
