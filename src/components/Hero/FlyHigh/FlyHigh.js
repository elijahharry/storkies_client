import { motion } from "framer-motion";

import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const FlyHigh = () => {
  const classes = useStyles();

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
    </>
  );
};

export default FlyHigh;
