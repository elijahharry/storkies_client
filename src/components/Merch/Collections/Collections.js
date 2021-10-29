import React from "react";
import Collection from "./Collection/Collection";

import { Container, makeStyles } from "@material-ui/core";

const Collections = ({ collections }) => {
  const classes = useStyles();
  return (
    <section id="collections" className={""}>
      <Container maxWidth="lg">
        <ul className={classes.ul}>
          {collections.map((c, i) => (
            <Collection key={c + "-div"} collection={c} index={i} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Collections;

const useStyles = makeStyles((theme) => ({
  ul: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBlock: 0,
    marginInline: 0,
    paddingInline: 0,
    width: `calc(100% + ${theme.spacing(4)}px)`,
    position: "relative",
    left: theme.spacing(2) * -1,
    top: -100,
    marginBottom: -130,
  },
}));
