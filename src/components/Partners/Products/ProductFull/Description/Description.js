import { useState } from "react";
import Image from "next/image";
import { useScreenSize } from "context/ScreenSize";

import { Typography, Chip, Button } from "@material-ui/core";

import useStyles from "./styles";

const Description = ({ product, setProduct }) => {
  const classes = useStyles();
  const screen = useScreenSize();
  const width = screen.width;

  return (
    <div className={classes.description}>
      <Typography variant="h3" style={{ color: product.brand.color }}>
        {product.title}
      </Typography>
      {product?.type && (
        <Typography variant="subtitle2">{product.type}</Typography>
      )}
      {product?.genetics && (
        <Typography
          variant="body1"
          className={`${classes.genetics} ${classes.text}`}
        >
          <img src="/svg/dna.svg" />
          {product.genetics}
        </Typography>
      )}
      {product?.desc && (
        <Typography variant="body1" className={classes.text}>
          {product.desc}
        </Typography>
      )}
      {product?.source && (
        <Typography variant="body2" className={classes.source}>
          Sourced by {product.source}
        </Typography>
      )}

      <Button
        href="#brands"
        onClick={() => setProduct(null)}
        fullWidth
        style={{ backgroundColor: product.brand.color, color: "#fff" }}
      >
        Back to products
      </Button>
    </div>
  );
};

export default Description;
