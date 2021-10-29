import React, { useState } from "react";
import { motion } from "framer-motion";
import useInterval from "react-useinterval";

import useStyles from "./styles";

const FlyingStork = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(1);

  const handleChange = () => {
    if (index < 4) {
      setIndex(index + 1);
    } else {
      setIndex(1);
    }
  };

  useInterval(handleChange, 100);

  return (
    <figure className={classes.figure} key="stork-animation">
      <img src={`/svg/stork-0${index}.svg`} className={classes.stork} />
    </figure>
  );
};

export default FlyingStork;
