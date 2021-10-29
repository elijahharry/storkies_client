import React, { useState, useEffect } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { fetchTags } from "@utils/products";

import Tag from "./Tag/Tag";

import { Container, Typography, makeStyles, useTheme } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Tags = ({
  open,
  tags,
  products,
  setMerch,
  selected,
  setSelected,
  toggleOpen,
  collectionHandle,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const [tabColor, setTabColor] = useState(0);
  useEffect(() => {
    handleTagChange();
    let tabColor;
    switch (tags.indexOf(selected) % 3) {
      case 0:
        tabColor = theme.palette.primary.main;
        break;
      case 1:
        tabColor = theme.palette.secondary.main;
        break;
      case 2:
        tabColor = theme.palette.blue.main;
        break;
      default:
        tabColor = theme.palette.blue.main;
        break;
    }
    setTabColor(tabColor);
  }, [selected]);

  const handleTagChange = async () => {
    setMerch([]);
    if (selected) {
      const response = await fetch("/api/sort-tag", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tag: selected,
          collection: collectionHandle,
        }),
      });
      const { sorted } = await response.json();
      setMerch(sorted);
    } else {
      setMerch(products);
    }
  };

  const handleClick = (tag) => {
    if (selected === tag) {
      setSelected(null);
    } else {
      setSelected(tag);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classes.section}
            key="tags-menu"
            onClick={() => toggleOpen()}
          >
            <Container maxWidth="md">
              <Typography variant="h3" align="center" gutterBottom>
                Sort Products by Tag
              </Typography>
              <Typography variant="body1" align="center">
                Select a tag to view related products. Click anywhere to close
                this menu.
              </Typography>
              <ul className={classes.tags}>
                <AnimateSharedLayout>
                  {tags.map((tag, i) => (
                    <Tag
                      tag={tag}
                      selected={selected}
                      handleClick={handleClick}
                      index={i}
                      key={tag}
                    />
                  ))}
                </AnimateSharedLayout>
              </ul>
            </Container>
          </motion.section>
        )}
        <motion.a
          onClick={toggleOpen}
          className={classes.selected}
          style={{
            backgroundColor: tabColor + "CC",
            borderRight: `5px solid ${tabColor}`,
            background: `linear-gradient(20deg, ${tabColor} 0%, ${tabColor}BF 100%)`,
          }}
        >
          <AnimateSharedLayout>
            {/* <ArrowUpwardIcon /> */}
            <Typography
              variant="body2"
              className={classes.sorting + " sort-tab"}
            >
              {selected ? "Sorting by:" : "Add filter"}
            </Typography>
            <Typography variant="body1" className={classes.selected_tag}>
              #{selected ? selected.replace(/\s/g, "") : "all"}
            </Typography>
          </AnimateSharedLayout>
        </motion.a>
      </AnimatePresence>
    </>
  );
};

export default Tags;

const useStyles = makeStyles((theme) => ({
  selected: {
    zIndex: 9,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    right: theme.spacing(4),
    flexDirection: "column",
    backgroundColor: theme.palette.blue.main,
    boxShadow: theme.shadows[5],
    color: "#fff",
    padding: theme.spacing(2),
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    paddingBottom: theme.spacing(0.5),
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(0.2),
    },
    "& svg": {
      display: "none",
      marginBottom: theme.spacing(2),
    },
    "&:hover": {
      //   paddingBottom: theme.spacing(1),
      boxShadow: theme.shadows[24],
      "& .sort-tab": {
        display: "block !important",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
      "& svg": {
        display: "block",
      },
    },
  },
  sorting: {
    fontSize: ".8rem",
    marginTop: -5,
    textTransform: "uppercase",
    display: "none",
  },
  selected_tag: {
    fontSize: "2rem",
    fontWeight: 600,
    letterSpacing: 5,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
      letterSpacing: 2,
    },
  },
  section: {
    width: "100%",
    height: "100%",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    backdropFilter: "blur(30px) brightness(60%)",
    top: 0,
    color: "#fff",
    left: 0,
    "& h3": {
      textShadow: "0 0 80px #000, 0 0 50px #000, 0 0 30px #000",
    },
    "& p": {
      textShadow: "0 0 80px #000, 0 0 50px #000, 0 0 30px #000, 0 0 20px #000",
    },
  },
  tags: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    marginBlock: 0,
    marginInline: 0,
    paddingInline: 0,
    filter: "drop-shadow(0 0 50px #000)",
    padding: `${theme.spacing(2)}px 0`,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
  tag: {
    display: "block",
    margin: theme.spacing(1),
    fontStyle: "italic",
    cursor: "pointer",
    position: "relative",
    color: "#fff",
    padding: `${theme.spacing(0.2)}px ${theme.spacing(1.3)}px`,
    borderRadius: 30,
  },
  tag_default: {
    ...theme.typography.body1,
    boxShadow: theme.shadows[5],
  },
  tag_selected: {
    // color: theme.palette.primary.main,
    ...theme.typography.h5,
    letterSpacing: 4,
    // fontWeight: 900,
    paddingRight: 5,
    display: "inline-flex",
    alignItems: "center",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    paddingRight: theme.spacing(4),
    boxShadow: theme.shadows[20],
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
