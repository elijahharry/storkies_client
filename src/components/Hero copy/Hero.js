import { useState, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { motion, AnimatePresence } from "framer-motion";
import { Blurhash } from "react-blurhash";
import router, { useRouter } from "next/router";

import FlyHigh from "./FlyHigh/FlyHigh";
import Titles from "./Titles/Titles";
import Collage from "./Collage/Collage";

import useStyles from "./styles";

const Hero = ({
  id,
  video,
  img,
  blurhash,
  title,
  subtitle,
  main,
  collage,
  color,
}) => {
  const router = useRouter();
  const classes = useStyles();
  const [videoLoading, setVideoLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(true);

  const height = main ? classes.main : classes.sub;
  let backgroundColor;
  let backdropClass;
  if (!color) {
    if (router.pathname === "/") {
      backgroundColor = "";
      backdropClass = ` gradient-sunset`;
    } else {
      backgroundColor = "#416D4AD9";
    }
  } else {
    backgroundColor = `${color}D9`;
  }

  const primaryColor = router.pathname === "/" ? "primary" : "secondary";

  return (
    <motion.section
      transition={{ duration: 0.2 }}
      className={`${classes.hero} ${height}`}
      id={`${id}-hero`}
      key={`${id}-hero`}
    >
      {collage && <Collage collage={collage} />}
      <div
        className={`${classes.overlay} ${classes.fill} ${backdropClass}`}
        style={{ backgroundColor: backgroundColor }}
      >
        {router.pathname === "/" ? (
          <FlyHigh />
        ) : (
          <Titles title={title} subtitle={subtitle} />
        )}
      </div>
      <div
        className={`${classes.border} gradient-${primaryColor}`}
        style={{
          backgroundColor: primaryColor === "primary" ? "#396643" : "#F49302",
        }}
      />
    </motion.section>
  );
};

export default Hero;
