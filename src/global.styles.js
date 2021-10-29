import Storkies from "./theme";
import { createStyles, makeStyles } from "@material-ui/core";

const theme = Storkies;

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      html: {
        scrollBehavior: "smooth",
      },
      a: {
        textDecoration: "none",
      },
      // My custom classes and styles
      ".gradient-sunset": {
        backgroundColor: "#4f9cffc7",
        // background: "linear-gradient(180deg, #4f9cffc7 0%, #F49302B3 80%)",
        // background:
        //   "linear-gradient(180deg, rgba(48, 91, 209,.8) 5%, rgba(78, 131, 222,.8) 75%, rgba(72, 161, 219,.8) 100%)",
      },
      ".gradient-primary": {
        backgroundColor: theme.palette.primary.main,
        // background: `linear-gradient(30deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`,
      },
      ".gradient-secondary": {
        backgroundColor: theme.palette.secondary.main,
        // background: `linear-gradient(30deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.light} 100%)`,
      },
      ".overlay-blue": {
        backgroundColor: "#85baffC7",
      },
      ".overlay-yellow": {
        backgroundColor: `${theme.palette.secondary.dark}C7`,
      },
      ".overlay": {
        backgroundColor: "#416D4AD9",
      },
      ".container": {
        width: "100%",
        display: "block",
        boxSizing: "border-box",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 16,
        paddingRight: 16,
        [theme.breakpoints.up("xs")]: {
          maxWidth: "100vw",
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: 1280,
        },
        // [theme.breakpoints.up("xl")]: {
        //   maxWidth: 1280,
        // },
      },
      ".grey": {
        backgroundColor: "#f9f9f9",
      },
      ".block": {
        padding: "50px 0 50px 0",
      },
      ".padding-medium": {
        paddingTop: 50,
        paddingBottom: 50,
        [theme.breakpoints.down("sm")]: {
          paddingTop: 20,
          paddingBottom: 20,
        },
      },
      ".padding-large": {
        paddingTop: 80,
        paddingBottom: 80,
        [theme.breakpoints.down("sm")]: {
          paddingTop: 35,
          paddingBottom: 35,
        },
      },

      // Animations
      ".fadeload": {
        animation: "infinite-fade 1s infinite",
      },
      "@keyframes infinite-fade": {
        "0%": { opacity: 0.8 },
        "100%": { opacity: 0.4 },
      },

      ".spin": {
        animation: "infinite-spin .5s infinite",
      },
      "@keyframes infinite-spin": {
        "0%": { WebkitTransform: "rotate(0deg)" },
        "100%": { WebkitTransform: "rotate(360deg)" },
      },

      ".spacechange": {
        animation: "space-change .5s infinite",
      },
      "@keyframes space-change": {
        "0%": {},
        "50%": { letterSpacing: ".39rem" },
        "100%": {},
      },
      ".weightflash": {
        animation: "weight-change 1s infinite",
      },
      "@keyframes weight-change": {
        "0%": { fontWeight: 300 },
        "50%": { fontWeight: 500 },
        "100%": { fontWeight: 700 },
      },
      ".fontflash": {
        animation: "font-change .3s infinite",
      },
      "@keyframes font-change": {
        "0%": { fontFamily: "Josefin Sans" },
        "50%": { fontFamily: "Gilbert" },
        "100%": { fontFamily: "Satisfy" },
      },
      ".colorflash-primary": {
        animation: "colorflash-primary 1s infinite",
      },
      "@keyframes colorflash-primary": {
        "0%": { color: theme.palette.text.primary },
        "25%": { color: theme.palette.primary.main },
        "75%": { color: theme.palette.primary.main },
        "100%": { color: theme.palette.text.primary },
      },
      ".colorflash-secondary": {
        animation: "colorflash-secondary 1s infinite",
      },
      "@keyframes colorflash-secondary": {
        "0%": { color: theme.palette.text.primary },
        "25%": { color: theme.palette.secondary.main },
        "75%": { color: theme.palette.secondary.main },
        "100%": { color: theme.palette.text.primary },
      },
      // "@keyframes color-change": {
      //   "17%": { color: theme.palette.primary.dark },
      //   "34%": { color: theme.palette.secondary.light },
      //   "51%": { color: theme.palette.primary.main },
      //   "68%": { color: theme.palette.secondary.main },
      //   "85%": { color: theme.palette.primary.light },
      //   "100%": { color: theme.palette.secondary.dark },
      // },
      //Material UI specific styles

      ".MuiMenuItem-root": {
        fontFamily: "Josefin Sans !important",
        fontSize: "1.2rem",
      },
      ".MuiFormHelperText-root": {
        fontFamily: "Josefin Sans !important",
        fontSize: "1rem",
      },
      ".MuiFormLabel-root": {
        fontFamily: "Josefin Sans !important",
        fontSize: "1.2rem",
      },
      ".MuiInputLabel-shrink": {
        transform: "translate(0, -5px) scale(0.875)",
      },
      ".MuiInputBase-root": {
        fontFamily: "Josefin Sans !important",
        fontSize: "1.2rem",
      },
      ".MuiButton-root": {
        borderRadius: 20,
      },
      ".MuiSkeleton-root": {
        background: "linear-gradient(90deg, #e8e8e8, #e6e6e6, #e8e8e8)",
        zIndex: 10,
      },
      ".MuiSkeleton-wave": {
        background: "linear-gradient(90deg, #e8e8e8, #e6e6e6, #e8e8e8)",
      },
      ".MuiButton-label": {
        fontFamily: "Josefin Sans !important",
      },
      ".MuiButton-containedSecondary": {
        color: "#fff",
      },
      ".MuiAccordionSummary-content": {
        display: "flex",
        // justifyContent: "space-between",
      },
      ".MuiTypography-h1": {
        textShadow:
          "0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000",
      },
      ".MuiTypography-subtitle1": {
        textShadow:
          "0 0 2.5px #000, 0 0 2.5px #000, 0 0 2.5px #000, 0 0 2.5px #000, 0 0 2.5px #000, 0 0 2.5px #000",
      },
      ".signature": {
        fontFamily: "Satisfy",
        fontWeight: 500,
        fontSize: "1.8rem",
      },
      ".MuiButton-contained": {
        boxShadow: "0 0 0 0 #fff !important",
        borderBottom: `4px solid #a6a6a6`,
        transition: "all 0s",
        "&:hover": {
          borderBottom: "0px solid transparent",
          backgroundColor: "#a6a6a6",
          paddingTop: 12,
        },
      },
      ".MuiButton-containedPrimary": {
        boxShadow: "0 0 0 0 #fff !important",
        borderBottom: `4px solid ${theme.palette.primary.darker} !important`,
        transition: "all 0s",
        "&:hover": {
          borderBottom: "0px solid transparent !important",
          backgroundColor: theme.palette.primary.darke,
          paddingTop: 12,
        },
      },
      ".MuiButton-containedSecondary": {
        boxShadow: "0 0 0 0 #fff !important",
        borderBottom: `4px solid ${theme.palette.secondary.darker} !important`,
        transition: "all 0s",
        color: "#fff",
        "&:hover": {
          borderBottom: "0px solid transparent !important",
          backgroundColor: theme.palette.secondary.darker + " !important",
          paddingTop: 12,
        },
      },
      ".blue-button": {
        boxShadow: "0 0 0 0 #fff !important",
        borderBottom: `4px solid ${theme.palette.blue.dark} !important`,
        backgroundColor: theme.palette.blue.main,
        transition: "all 0s",
        color: "#fff",
        "&:hover": {
          borderBottom: "0px solid transparent !important",
          backgroundColor: theme.palette.blue.darker + " !important",
          paddingTop: 12,
        },
      },
      ".MuiPickersToolbarText-toolbarTxt": {
        textShadow: "0 0 0 #000 !important",
        fontFamily: "Josefin Sans !important",
        textTransform: "none !important",
        letterSpacing: "1px !important",
        fontSize: "1.5rem !important",
        lineHeight: "2.2rem !important",
        color: "#fff !important",
      },
      ".MuiPickersToolbarText-toolbarBtnSelected": {
        letterSpacing: `1px !important`,
        fontSize: "2.7rem !important",
      },
      ".MuiPickersYear-root": {
        textShadow: "0 0 0 #000 !important",
        fontSize: "1.5em !important",
        letterSpacing: `1px !important`,
      },
      ".MuiPickersYear-yearSelected": {
        fontSize: "1.8em !important",
      },
      ".MuiPickersToolbar-toolbar": {
        backgroundColor: `${theme.palette.secondary.dark} !important`,
      },
      ".MuiPickersCalendarHeader-dayLabel": {
        fontFamily: "Josefin Sans !important",
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
