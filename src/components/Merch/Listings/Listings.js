import { useState, useEffect } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import Listing from "./Listing/Listing";
import Skeleton from "./Skeleton/Skeleton";
import Titles from "./Titles/Titles";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const Listings = ({
  products,
  title,
  filter,
  selectedTag,
  toggleTagsMenu,
  isRelated,
  id,
  skeletons,
  tag,
  resetTags,
}) => {
  const classes = useStyles();

  return (
    <section
      id={id ? id : "products"}
      className={`${classes.section} ${
        isRelated ? classes.no_padding : classes.padding
      }`}
    >
      <div className="container">
        {title && (
          <Titles
            selectedTag={selectedTag}
            filter={filter}
            toggleTagsMenu={toggleTagsMenu}
            tag={tag}
            resetTags={resetTags}
          />
        )}
        <div className={classes.listings}>
          <AnimatePresence>
            <AnimateSharedLayout>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <Listing
                    product={product}
                    index={index}
                    key={product.node.title + "-listing-card"}
                  />
                ))
              ) : (
                <Skeleton count={skeletons} />
              )}
            </AnimateSharedLayout>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Listings;

const useStyles = makeStyles((theme) => ({
  section: {
    paddingBottom: theme.spacing(5),
  },
  no_padding: {
    paddingTop: 0,
  },
  padding: {
    paddingTop: theme.spacing(6),
  },
  listings: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  item: {},
}));
