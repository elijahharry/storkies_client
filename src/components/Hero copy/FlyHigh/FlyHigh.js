import { motion } from "framer-motion";

import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const FlyHigh = () => {
  const classes = useStyles();

  //   <motion.img
  // initial={{ scale: 0 }}
  // animate={{ scale: 1 }}
  // transition={{
  //   duration: 4,
  //   delay: 0.2,
  //   type: "spring",
  // }}
  //   className={classes.logo}
  //   src="/svg/white-caps.svg"
  // />

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.4,
          type: "spring",
        }}
      >
        <Typography variant="h1" align="center">
          Storkies
        </Typography>
      </motion.div>
      <motion.div
        className={classes.subtitle}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1.06, 1] }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <Typography variant="subtitle1" align="center">
          Fly High
        </Typography>
      </motion.div>

      <motion.img
        initial={{ x: -250 }}
        animate={{ x: 50 }}
        transition={{
          duration: 15,

          repeat: Infinity,
          repeatType: "mirror",
        }}
        className={classes.cloud__bottom_right}
        src="/svg/cloud1.svg"
      />
      <motion.img
        initial={{ x: -250 }}
        animate={{ x: 50 }}
        transition={{
          duration: 15,

          repeat: Infinity,
          repeatType: "mirror",
        }}
        className={classes.cloud__bottom_left}
        src="/svg/cloud3.svg"
      />
      <motion.img
        initial={{ x: -50 }}
        animate={{ x: 50 }}
        transition={{
          duration: 15,

          repeat: Infinity,
          repeatType: "mirror",
        }}
        className={classes.cloud__top_right}
        src="/svg/cloud4.svg"
      />
      <motion.img
        initial={{ x: -50 }}
        animate={{ x: 50 }}
        transition={{
          duration: 15,

          repeat: Infinity,
          repeatType: "mirror",
        }}
        className={classes.cloud__top_left}
        src="/svg/cloud2.svg"
      />
      <motion.img
        initial={{ x: -50 }}
        animate={{ x: 50 }}
        transition={{
          duration: 15,

          repeat: Infinity,
          repeatType: "mirror",
        }}
        className={classes.cloud__center}
        src="/svg/cloud2.svg"
      />
    </>
  );
};

export default FlyHigh;
