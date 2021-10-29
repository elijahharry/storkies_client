import { useState } from "react";
import Image from "next/image";

import { Button, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Product = ({ product, openProduct, setBrand }) => {
  const classes = useStyles();
  const [img, setImg] = useState(product.images[0]);

  console.log(product);

  const handleHover = () => {
    if (product.images.length > 1) {
      setImg(product.images[1]);
    }
  };

  const handleExit = () => {
    if (product.images.length > 1) {
      setImg(product.images[0]);
    }
  };

  return (
    <li className={classes.container}>
      <a
        className={classes.product}
        onMouseEnter={handleHover}
        onMouseLeave={handleExit}
        onClick={() => {
          openProduct(product);
          setBrand(product.brand);
        }}
        // href={`#${product._id}-info`}
        // href="#brands"
      >
        <div className={classes.img}>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={`${process.env.BACKEND}/img/products/${img.filename}`}
            placeholder="blur"
            blurDataURL={img.blur}
            key={`${img.filename}-component`}
            className={classes.photo}
          />
          <div className={classes.logo}>
            <Image
              width={55}
              height={40}
              objectFit="contain"
              objectPosition="center"
              src={`${process.env.BACKEND}/img/brands/${product.brand.logo.filename}`}
              placeholder="empty"
              key={`${img.filename}-logo`}
            />
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.content_row}>
            <Typography variant="body1">
              <strong>{product.title}</strong>
            </Typography>
            <Button
              variant="contained"
              style={{
                color: "#fff",
                backgroundColor: product.brand?.color
                  ? product.brand.color
                  : "#416D4A",
              }}
            >
              More
            </Button>
          </div>
          <Typography variant="body2">{product.type}</Typography>
        </div>
      </a>
    </li>
  );
};

export default Product;
