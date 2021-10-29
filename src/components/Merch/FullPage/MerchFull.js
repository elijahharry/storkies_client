import { useState, useEffect } from "react";
import { useScreenSize } from "context/ScreenSize";

import SelectedImage from "./SelectedImage/SelectedImage";
import Thumbnails from "./Thumbnails/Thumbnails";
import Description from "./Description/Description";

import { Container, Grid, makeStyles } from "@material-ui/core";

const MerchFull = ({ product, crumbs }) => {
  const screen = useScreenSize();
  const classes = useStyles();
  const images = product.images.edges;
  const [selected, setSelected] = useState(images[0].node.originalSrc);
  const changeSelected = (image) => {
    setSelected(image);
  };

  return (
    <section
      key={product.title + "-fullpage"}
      id="product"
      style={{ padding: `10px 0` }}
      className=""
    >
      <Container maxWidth="lg" style={{ padding: 0 }}>
        <div className={classes.grid}>
          <div className={classes.description}>
            <Description
              crumbs={crumbs}
              product={product}
              setSelectedImg={setSelected}
              changeSelectedImg={changeSelected}
            />
          </div>
          <div className={classes.images}>
            <div className={classes.selected} key={product.title + "-selected"}>
              <SelectedImage selected={selected} />
            </div>
            <div className={classes.thumbnails}>
              <Thumbnails
                images={images}
                selected={selected}
                changeSelected={changeSelected}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MerchFull;

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap-reverse",
    },
  },
  description: {
    flexBasis: "50%",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
    },
  },
  images: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexBasis: "50%",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
    },
  },
  selected: {
    flexBasis: "90%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      height: 400,
    },
  },
  thumbnails: {
    flexBasis: "10%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      height: 100,
    },
  },
}));
