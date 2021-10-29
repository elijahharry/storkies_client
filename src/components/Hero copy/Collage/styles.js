import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  collage: {
    width: "100%",
    height: "100%",
    // animation: "$slow-zoom 45s infinite",
    position: "relative",
    zIndex: 2,
  },
  thumbnail: {
    "& img": {
      filter: "blur(20px) saturation(130%) contrast(150%)",
      transition: "opacity 500ms",
    },
  },
  "@keyframes slow-zoom": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.3)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
  views: {
    width: "100%",
    height: "100%",
    "& .react-swipeable-view-container": {
      width: "100%",
      height: "100%",
    },
  },
  collage_item: {
    position: "absolute",
    width: "100%",
    height: "100%",
    transition: "opacity 800ms",
  },
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
}));
