import useStyles from "./styles";
import { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import SelectedImage from "./SelectedImage/SelectedImage";
import Description from "./Description/Description";
import Thumbnails from "./Thumbnails/Thumbnails";

const ProductFull = ({ product, setProduct }) => {
  const [selectedImg, setSelectedImg] = useState(product.images[0]);
  const classes = useStyles();
  const images = product.images;
  return (
    <section
      id={`${product._id}-info`}
      key={`${product._id}-info`}
      className={classes.section + " grey"}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="stretch" justify="center" spacing={0}>
          {images.length > 1 && screen.width >= 960 && (
            <Grid item sm={12} md={1}>
              <Thumbnails
                images={images}
                selected={selectedImg}
                changeSelected={setSelectedImg}
                color={product.brand.color}
              />
            </Grid>
          )}
          <Grid sm={12} md={images.length > 1 ? 6 : 7} item>
            <SelectedImage selected={selectedImg} />
            {images.length > 1 && screen.width < 960 && (
              <Grid item sm={12} md={1}>
                <Thumbnails
                  images={images}
                  selected={selectedImg}
                  changeSelected={setSelectedImg}
                />
              </Grid>
            )}
          </Grid>
          <Grid sm={12} md={5} item>
            <Description product={product} setProduct={setProduct} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductFull;
