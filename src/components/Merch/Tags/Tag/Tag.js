import React from "react";
import { motion } from "framer-motion";

import { Container, Typography, makeStyles, useTheme } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const Tag = ({ tag, selected, handleClick, index }) => {
  const classes = useStyles();
  const theme = useTheme();

  let color;
  switch (index % 3) {
    case 0:
      color = theme.palette.primary.main;
      break;
    case 1:
      color = theme.palette.secondary.main;
      break;
    case 2:
      color = theme.palette.blue.main;
      break;
  }
  return (
    <motion.li
      layout={true}
      transition={{ delay: 0.02 * index }}
      onClick={() => handleClick(tag)}
      style={{ backgroundColor: color }}
      className={`${classes.tag} ${
        selected === tag ? classes.tag_selected : classes.tag_default
      }`}
    >
      #{tag.replace(/\s/g, "")}
      {selected === tag && (
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={classes.deselect}
        >
          <CloseIcon style={{ color: color }} />
        </motion.a>
      )}
    </motion.li>
  );
};

export default Tag;

const useStyles = makeStyles((theme) => ({
  tag: {
    display: "block",
    margin: theme.spacing(1),
    fontStyle: "italic",
    cursor: "pointer",
    position: "relative",
    color: "#fff",
    padding: `${theme.spacing(0.2)}px ${theme.spacing(1.7)}px`,
    borderRadius: 30,
  },
  tag_default: {
    ...theme.typography.h6,
    fontWeight: 400,
    boxShadow: theme.shadows[2],
  },
  tag_selected: {
    // color: theme.palette.primary.main,
    ...theme.typography.h6,
    letterSpacing: 4,
    // fontWeight: 900,
    paddingRight: 5,
    display: "inline-flex",
    alignItems: "center",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    paddingRight: theme.spacing(4),
    boxShadow: theme.shadows[3],
  },
  deselect: {
    position: "absolute",
    right: 8,
    width: 20,
    height: 20,
    // color: "#fff",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    boxShadow: theme.shadows[2],
    "& svg": {
      width: 16,
      height: 16,
    },
  },
}));
