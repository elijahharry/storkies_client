import React, { useState } from "react";
import Listings from "../Listings/Listings";

import { Container, Typography, makeStyles } from "@material-ui/core";
import AutorenewIcon from "@material-ui/icons/Autorenew";

const Related = ({ primary, related }) => {
  const classes = useStyles();
  const [products, setProducts] = useState([...related]);
  // const [products, setProducts] = useState([]);

  const handleClick = async () => {
    setProducts([]);
    try {
      const response = await fetch("/api/related-products", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          primary: primary,
        }),
      });
      const { related_products } = await response.json();
      setProducts([...related_products]);
    } catch (e) {
      console.log(e);
      setProducts([...related]);
    }
  };

  return (
    <section id="related">
      <Container maxWidth="lg" className={classes.container}>
        <Typography
          variant="subtitle2"
          align="left"
          className={classes.subtitle}
        >
          Related products you might like:
        </Typography>
        <Typography
          onClick={handleClick}
          component="a"
          variant="body2"
          className={`${classes.fetch}`}
        >
          <AutorenewIcon className={products.length < 1 ? classes.spin : ""} />
          Find more
        </Typography>
      </Container>
      <Listings
        dock={true}
        id="related-products"
        products={products}
        isRelated={true}
        skeletons={4}
      />
    </section>
  );
};

export default Related;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: theme.spacing(2),
    borderBottom: `2px solid #f7f7f7`,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  subtitle: {
    // fontFamily: "Satisfy",
    // fontSize: "1.8rem",
  },
  fetch: {
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 100ms",
    "&:hover": {
      color: theme.palette.blue.main,
      "& svg": {
        transform: "rotate(100deg) scale(1.3)",
      },
    },
    "& svg": {
      transition: "all 100ms",
      transform: "rotate(30deg)",
      height: 20,
      color: theme.palette.blue.main,
      width: 20,
      marginRight: theme.spacing(0.5),
      marginBottom: 2,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
    },
  },
  spin: {
    animation: "$spin-load 300ms infinite",
  },
  "@keyframes spin-load": {
    "0%": {
      transform: "rotate(100deg) scale(1.3)",
    },
    "100%": {
      transform: "rotate(460deg) scale(1.4)",
    },
  },
}));
