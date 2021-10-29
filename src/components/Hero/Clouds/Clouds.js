import { motion } from "framer-motion";

import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const Clouds = () => {
  const classes = useStyles();

  return (
    <>
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

export default Clouds;
