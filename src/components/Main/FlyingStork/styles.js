import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  figure: {
    position: "fixed",
    zIndex: 100,
    bottom: 20,
    left: "50%",
    marginInline: 0,
    marginBlock: 0,
    pointerEvents: "none",
    transform: "translateX(-50%)",
  },
  stork: {
    width: 400,
    height: 200,
    animation: "$fly-by 200s linear infinite",
    transform: "scaleX(-1)",
    [theme.breakpoints.down("sm")]: {
      animation: "$fly-by 50s linear infinite",
    },
    // transform: "scaleX(-1)",
  },
  "@keyframes fly-by": {
    "0%": {
      transform: "scaleX(-1) translateX(200vw)",
      filter: "drop-shadow(120px 50px 10px #0000001A)",
    },
    ".002%": {
      transform: "scaleX(-1) translateX(200vw)",
      filter: "drop-shadow(120px 50px 10px #0000001A)",
    },
    "10%": {
      transform: "scaleX(-1) translateX(-200vw)",
      filter: "drop-shadow(-120px 50px 10px #0000001A)",
    },
    "100%": {
      transform: "scaleX(-1) translateX(-200vw)",
      filter: "drop-shadow(-120px 50px 10px #0000001A)",
    },
  },
}));
