import { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Image from "next/image";

import useStyles from "./styles";
import { Container, Typography } from "@material-ui/core";

const Brands = ({ brands, selected, setSelected, setSelectedProduct }) => {
  const classes = useStyles();

  return (
    <section
      layout={true}
      className={classes.section + " grey"}
      id="brands"
      // key={`brands-${selected?.title}-selected`}
    >
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
              key={"tab--" + brand.title}
            >
              <Image
                src={`${process.env.BACKEND}/img/brands/${brand.logo.filename}`}
                width={150}
                height={120}
                objectPosition="center"
                objectFit="contain"
                placeholder="blur"
                key={`${brand.title}-logo`}
                blurDataURL={brand.logo.blur}
              />
            </div>
          ))}
        </div>
        {selected ? (
          <div className={classes.bio}>
            <Typography variant="h3" align="center" gutterBottom>
              <strong>
                About{" "}
                <span style={{ color: selected.color }}>{selected.title}</span>
              </strong>
            </Typography>
            <Typography variant="body2" align="center">
              {selected.bio}
            </Typography>
          </div>
        ) : (
          <Typography variant="body2">
            Learn more & sort products by selecting a brand.
          </Typography>
        )}
      </Container>
    </section>
  );
};

export default Brands;
