import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useScreenSize } from "@context/ScreenSize";

import { Button, Typography, useTheme } from "@material-ui/core";
import useStyles from "./styles";

const Block = ({
  link,
  title,
  subtitle,
  desc,
  color,
  size,
  img,
  subfolder,
  hoverCount,
  hoverUp,
  realHref,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const screen = useScreenSize();
  const [hover, setHover] = useState(false);
  const [zIndex, setZIndex] = useState(hoverCount);

  const handleMouseEnter = () => {
    if (screen.width > 960) {
      setHover(true);
      hoverUp();
      setZIndex(hoverCount + 2);
    }
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const blockClass = size === "lg" ? classes.block_lg : classes.block_sm;
  let buttonClass;
  let overlayClass;
  switch (color) {
    case "primary":
      overlayClass = classes.overlay_primary;
      buttonClass = classes.button_primary;
      break;
    case "secondary":
      overlayClass = classes.overlay_secondary;
      buttonClass = classes.button_secondary;
      break;
    case "blue":
      overlayClass = classes.overlay_blue;
      buttonClass = classes.button_blue;
      break;
    default:
      overlayClass = classes.overlay_black;
      buttonClass = classes.button_black;
  }

  let titleItem = [];
  let subtitleItem = [];
  switch (title) {
    case "Velvet Crush":
      titleItem.push(<img src="/svg/velvet.svg" className={classes.velvet} />);
      break;
    case "True Craft Cannabis Co.":
      titleItem.push(
        <Image
          src="/images/tcc.png"
          width={330}
          height={280}
          objectFit="contain"
          objectPosition="center"
          className={classes.ttc}
        />
      );
      break;
    default:
      titleItem.push(
        <Typography variant="h2" align="center">
          {title}
        </Typography>
      );
      subtitleItem.push(
        <Typography variant="subtitle2" align="center">
          {subtitle}
        </Typography>
      );
  }

  if (realHref) {
    return (
      <motion.a
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${classes.block} ${blockClass}`}
        style={{ zIndex: zIndex }}
        transition={{ duration: 0.4 }}
        href={link}
      >
        <AnimatePresence>
          {hover && (
            <a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.1 } }}
                transition={{ duration: 0.5 }}
                className={classes.block__hover}
                style={{ zIndex: zIndex + 1 }}
              >
                <motion.feature
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{
                    scale: 0,
                    transition: { delay: 0 },
                  }}
                  transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
                  className={classes.hover__content}
                >
                  <Typography variant="h3" align="center" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body1" align="center" gutterBottom>
                    {desc}
                  </Typography>
                  <Link href={link} passHref>
                    <Button
                      variant="contained"
                      color={color}
                      className={buttonClass}
                    >
                      Learn more
                    </Button>
                  </Link>
                </motion.feature>
              </motion.div>
            </a>
          )}
        </AnimatePresence>
        <div className={`${classes.block__content} ${overlayClass}`}>
          {subtitleItem}
          {titleItem}
        </div>
        <Image
          src={`/images/${img.src}`}
          placeholder={img?.blur ? "blur" : "empty"}
          blurDataURL={img?.blur ? img.blur : ""}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />{" "}
      </motion.a>
    );
  } else {
    return (
      <Link href={link} passHref>
        <motion.a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setHover(!hover)}
          className={`${classes.block} ${blockClass}`}
          style={{ zIndex: zIndex }}
          transition={{ duration: 0.4 }}
        >
          <AnimatePresence>
            {hover && (
              <a>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { delay: 0.1 } }}
                  transition={{ duration: 0.5 }}
                  className={classes.block__hover}
                  style={{ zIndex: zIndex + 1 }}
                >
                  <motion.feature
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{
                      scale: 0,
                      transition: { delay: 0 },
                    }}
                    transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
                    className={classes.hover__content}
                  >
                    <Typography variant="h3" align="center" gutterBottom>
                      {title}
                    </Typography>
                    <Typography variant="body1" align="center" gutterBottom>
                      {desc}
                    </Typography>
                    <Link href={link} passHref>
                      <Button
                        variant="contained"
                        color={color}
                        className={buttonClass}
                      >
                        Learn more
                      </Button>
                    </Link>
                  </motion.feature>
                </motion.div>
              </a>
            )}
          </AnimatePresence>
          <div className={`${classes.block__content} ${overlayClass}`}>
            {subtitleItem}
            {titleItem}
          </div>
          <Image
            src={`/images/${img.src}`}
            placeholder={img?.blur ? "blur" : "empty"}
            blurDataURL={img?.blur ? img.blur : ""}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />{" "}
        </motion.a>
      </Link>
    );
  }
};

export default Block;
