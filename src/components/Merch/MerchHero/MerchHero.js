import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container, makeStyles, Typography, useTheme } from "@material-ui/core";

const MerchHero = ({ title, img, color, crumbs, sm }) => {
  const classes = useStyles();

  const liInit = { opacity: 0, scale: 0, y: 20 };
  const liAnimate = { opacity: 1, scale: 1, y: 0 };

  return (
    <section className={classes.section} key={title + "-collection-hero"}>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.content}>
          {crumbs && (
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
                    key={c.title + "-crumb"}
                    animate={liAnimate}
                    transition={{ delay: i * 0.2 + 0.2 }}
                    className={`${classes.crumb} ${
                      i === crumbs.length - 1 ? classes.current : classes.other
                    }`}
                    style={{
                      color: i === crumbs.length - 1 ? color : "inherit",
                    }}
                  >
                    <div className={classes.seperator}>\</div>
                    <span>{c.t}</span>
                  </motion.li>
                </Link>
              ))}
            </ul>
          )}
          <Typography
            variant="h1"
            className={`${classes.title} ${
              sm ? classes.title_sm : classes.title_default
            }`}
          >
            {title}
          </Typography>
        </div>
        {img && (
          <>
            <motion.figure
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`${classes.img} ${
                sm ? classes.img_sm : classes.img_default
              }`}
              style={{ border: `${sm ? 3 : 5}px solid ${color}` }}
              //   style={{
              //     filter: `drop-shadow(${sm ? 10 : 15}px ${
              //       sm ? 10 : 15
              //     }px 0 ${color})`,
              //   }}
            >
              <Image
                src={img.src}
                placeholder={img?.blur ? "blur" : "empty"}
                blurDataURL={img?.blur ? img.blur : ""}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </motion.figure>
            {/* <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 0.3, y: 0 }}
              transition={{ delay: 0.35 }}
              className={`${classes.backdrop} } ${
                sm ? classes.img_sm : classes.img_default
              }`}
            >
              <div className={`${classes.backdrop_img}`}>
                <Image
                  src={img.src}
                  placeholder={img?.blur ? "blur" : "empty"}
                  blurDataURL={img?.blur ? img.blur : ""}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </motion.div> */}
          </>
        )}
      </Container>
      {/* <div className={`${classes.backdrop_full}`}>
        <Image
          src={img.src}
          placeholder={img?.blur ? "blur" : "empty"}
          blurDataURL={img?.blur ? img.blur : ""}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div> */}
    </section>
  );
};

export default MerchHero;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    padding: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: `${theme.spacing(3)}px 0`,
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingTop: theme.spacing(20),
      filter:
        "drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #fff) drop-shadow(0 0 30px #fff) drop-shadow(0 0 40px #fff)",
      alignItems: "center",
      "& h1": {
        textAlign: "center !important",
      },
    },
  },
  "@keyframes object-position": {
    "0%": {
      objectPosition: "top",
    },
    "50%": {
      objectPosition: "bottom",
    },
    "100%": {
      objectPosition: "top",
    },
  },
  img: {
    position: "relative",
    marginBlock: 0,
    marginInline: 0,
    zIndex: 1,
    width: 400,
    height: 400,
    "& img": {
      animation: "$object-position 10s infinite",
    },
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down("sm")]: {
      width: 0,
      height: 0,
      display: "none",
      border: `0px solid transparent !important`,
    },
    borderRadius: "50%",
    // borderRadius: 8,
    "& div": {
      borderRadius: "50%",
    },
  },
  backdrop: {
    position: "absolute",
    bottom: -20,
    right: -4,
    opacity: 0.4,
    zIndex: 0,
    width: 500,
    height: 340,
    "& img": {
      animation: "$object-position 10s infinite",
    },
    "& div": {
      // borderRadius: 8,
    },
    [theme.breakpoints.down("sm")]: {
      zIndex: 0,
      opacity: `.3 !important`,
    },
  },
  backdrop_img: {
    width: "inherit",
    height: "inherit",
    position: "relative",
  },
  title: {
    textShadow: "none",
  },
  title_default: {
    fontSize: "6rem",
  },
  title_sm: {
    // fontSize: "6rem",
    fontSize: "4rem",
  },
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
    ...theme.typography.body2,
    textTransform: "uppercase",
    marginRight: theme.spacing(1.5),
    display: "flex",
    "&:hover": {
      "& span": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  },
  seperator: {
    marginRight: theme.spacing(1.5),
    opacity: 0.8,
    color: `${theme.palette.text.primary} !important`,
    fontWeight: 400,
    pointerEvents: "none",
  },
  section: {
    overflow: "hidden",
    position: "relative",
    // padding: `${theme.spacing(3)}px 0`,
  },
  backdrop_full: {
    opacity: 0.3,
    width: "50%",
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    "& img": {
      animation: "$object-position 20s infinite",
    },
  },
}));
