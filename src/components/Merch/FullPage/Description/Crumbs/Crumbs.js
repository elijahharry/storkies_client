import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";

const Crumbs = ({ crumbs }) => {
  const classes = useStyles();
  const liInit = { opacity: 0, scale: 0, y: 20 };
  const liAnimate = { opacity: 1, scale: 1, y: 0 };
  return (
    <ul className={classes.breadcrumbs}>
      <Link href="/" passHref>
        <motion.li
          initial={liInit}
          animate={liAnimate}
          className={`${classes.crumb} ${classes.other}`}
        >
          <span>Home</span>
        </motion.li>
      </Link>
      {crumbs.map((c, i) => (
        <Link href={c.a} passHref>
          <motion.li
            initial={liInit}
            animate={liAnimate}
            transition={{ delay: i * 0.2 + 0.2 }}
            key={c.title + "-crumb"}
            className={`${classes.crumb} ${
              i === crumbs.length - 1 ? classes.current : classes.other
            }`}
          >
            <div className={classes.seperator}>\</div>
            <span>{c.t}</span>
          </motion.li>
        </Link>
      ))}
    </ul>
  );
};

export default Crumbs;

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    listStyle: "none",
    marginBlock: 0,
    marginInline: 0,
    paddingInline: 0,
    display: "flex",
    marginBottom: theme.spacing(2),
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  crumb: {
    // ...theme.typography.body2,
    textTransform: "uppercase",
    marginRight: theme.spacing(1.2),
    display: "flex",
    fontSize: "1.1rem",
    "&:hover": {
      "& span": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  },
  current: {
    "& span": {
      color: theme.palette.blue.main,
    },
  },
  seperator: {
    marginRight: theme.spacing(1.2),
    opacity: 0.8,
    color: `${theme.palette.text.primary} !important`,
    fontWeight: 400,
    pointerEvents: "none",
  },
}));
