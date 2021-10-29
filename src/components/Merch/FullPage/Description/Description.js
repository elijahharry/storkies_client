import { useState } from "react";
import { useScreenSize } from "context/ScreenSize";

import ProductForm from "./ProductForm/ProductForm";
import Crumbs from "./Crumbs/Crumbs";

import { Typography, Chip } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import useStyles from "./styles";

const Description = ({ product, crumbs, changeSelectedImg }) => {
  const classes = useStyles();
  const screen = useScreenSize();
  const width = screen.width;

  const title = product.title;
  const type = product.productType;
  const description = product.description;

  let bodySkel = [];
  for (let i = 0; i < 3; i++) {
    bodySkel.push(
      <Skeleton animation="wave" width={width > 600 ? 450 : 330} />
    );
  }

  const [variantPrice, setVariantPrice] = useState(
    product.variants.edges[0].node.price
  );
  const [quantity, setQuantity] = useState(1);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={classes.description}>
      <div>
        {crumbs && <Crumbs crumbs={crumbs} />}

        <Typography variant="h2" className={`${classes.text} ${classes.title}`}>
          {title}
        </Typography>
        <div className={classes.type_row}>
          <Typography
            variant="subtitle2"
            align="left"
            className={classes.product_type}
          >
            {type}
          </Typography>
          <Typography variant="h5" className={classes.trademark}>
            by {product.vendor}
            <img src="/svg/copyright.svg" className={classes.copyright} />
          </Typography>
        </div>
        <div className={`${classes.row} ${classes.desc_row}`}>
          <Typography
            variant="body2"
            dangerouslySetInnerHTML={{ __html: description }}
            className={`${classes.text} ${classes.desc}`}
          />
          <label className={classes.desc_label}>Product Description</label>
        </div>
      </div>
      <ProductForm
        title={product.title}
        handle={product.handle}
        variants={product.variants.edges}
        type={product.productType}
        img={product.images.edges[0].node}
        setVariantPrice={setVariantPrice}
        quantity={quantity}
        setQuantity={setQuantity}
        changeSelectedImg={changeSelectedImg}
      />
    </div>
  );
};

export default Description;
