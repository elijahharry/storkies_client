import { useState, useEffect } from "react";
import Image from "next/image";

import useStyles from "./styles";
import { Button, Container, Typography } from "@material-ui/core";

const Brands = ({
  brands,
  selected,
  setSelected,
  setSelectedProduct,
  setColor,
}) => {
  const classes = useStyles();
  const [readMore, setReadMore] = useState(false);
  const [shortenedBio, setShortenedBio] = useState("");

  useEffect(() => {
    if (selected?.color) {
      setColor(selected.color);
    } else {
      setColor(null);
    }
    if (selected?.bio) {
      const trimmed = selected.bio.slice(0, 40).trim() + "...";
      setShortenedBio(trimmed);
    } else {
      setShortenedBio("");
    }
  }, [selected]);

  return (
    <section layout={true} className={classes.section + " grey"} id="brands">
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.tabs}>
          {brands.map((brand) => (
            <div
              className={`${classes.tab} ${
                selected?.title === brand.title
                  ? classes.tab_selected
                  : classes.tab_unselected
              }`}
              style={{
                borderBottom:
                  selected?.title === brand.title
                    ? `5px solid ${brand.color}`
                    : `5px solid #fff`,
              }}
              onClick={() => {
                setSelected(brand);
                setSelectedProduct(null);
              }}
              key={"tab-" + brand.title}
            >
              <figure className={classes.logo}>
                <Image
                  src={`${process.env.BACKEND}/img/brands/${brand.logo.filename}`}
                  layout="fill"
                  objectPosition="center"
                  objectFit="contain"
                  placeholder="blur"
                  key={`${brand.title}-logo`}
                  blurDataURL={brand.logo.blur}
                />
              </figure>
            </div>
          ))}
        </div>
        {selected ? (
          <Typography variant="body2" align="center" gutterBottom>
            {readMore ? selected.bio : shortenedBio}
            <Button
              style={{ color: selected.color }}
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read Full Bio"}
            </Button>
          </Typography>
        ) : (
          <Typography variant="body2" align="center">
            Learn more & sort products by selecting a brand.
          </Typography>
        )}
      </Container>
    </section>
  );
};

export default Brands;
