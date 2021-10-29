import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { makeStyles, Typography, useTheme } from "@material-ui/core";

const Collection = ({ collection, index }) => {
  const classes = useStyles();
  const theme = useTheme();
  const image = collection.image;

  let color;
  switch (index % 2) {
    case 0:
      color = theme.palette.blue.main;
      break;
    case 1:
      color = theme.palette.secondary.main;
      break;
    case 2:
      color = theme.palette.primary.main;
      break;
  }

  return (
    <motion.li
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.15 }}
      className={classes.li}
    >
      <Link href={`/collections/${collection.handle}`} passHref>
        <a>
          <div
            style={{ border: `5px solid ${color}` }}
            className={`${classes.collection}`}
          >
            <Image
              src={image.originalSrc}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder={image?.blur ? "blur" : "empty"}
              blurDataURL={image?.blur ? image.blur : ""}
            />
            <div className={classes.content}>
              <Typography
                variant="body1"
                align="center"
                className={classes.title}
              >
                {collection.title}
              </Typography>
            </div>
          </div>
        </a>
      </Link>
    </motion.li>
  );
};

export default Collection;

const useStyles = makeStyles((theme) => ({
  li: {
    listStyle: "none",
    flexBasis: "25%",
    height: 250,
    padding: theme.spacing(2),
    position: "relative",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      flexBasis: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      flexBasis: "100%",
      height: 220,
    },
  },
  collection: {
    position: "relative",
    width: "100%",
    height: "100%",
    boxShadow: theme.shadows[4],
    overflow: "hidden",
    borderRadius: 5,
    // transition: "100ms all",
    "&:hover": {
      transform: "scale(1.05) !important",
      boxShadow: theme.shadows[10],
    },
  },
  content: {
    position: "absolute",
    top: 0,
    height: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000080",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#00000033",
    },
  },
  title: {
    // "-webkit-text-stroke": "1px black",
    // textShadow: "0 0 10px #000, 0 0 10px #000",
    textTransform: "uppercase",
    fontSize: "1.2rem",
    fontWeight: 600,
    letterSpacing: 2,
    borderRadius: 5,
  },
}));
