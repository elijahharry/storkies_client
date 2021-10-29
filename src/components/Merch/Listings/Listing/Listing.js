import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Typography, useTheme, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import useStyles from "./styles";

const Listing = ({ product, index }) => {
  const classes = useStyles();
  const theme = useTheme();
  const handle = product.node.handle;
  const title = product.node.title;
  const type = product.node.productType;
  const limited = product.node?.limited_edition;
  const price = product.node.variants.edges[0].node.price;
  const description = product.node.description;
  const descriptionShort =
    description.length > 45
      ? description.slice(0, 44).trim() + "..."
      : description;

  const image1 = product.node.images.edges[0].node;
  const image2 =
    product.node.images.edges.length > 1
      ? product.node.images?.edges[1].node
      : false;

  let color = theme.palette.secondary.main;
  // switch (index % 3) {
  //   case 0:
  //     color = theme.palette.primary.main;
  //     break;
  //   case 1:
  //     color = theme.palette.secondary.main;
  //     break;
  //   case 2:
  //     color = theme.palette.blue.main;
  //     break;
  // }

  const useBorders = makeStyles((theme) => ({
    main: {
      border: `4px solid transparent`,
      "&:hover": {
        // border: `4px solid ${color}`,
        border: `2px solid ${theme.palette.primary.main}`,
      },
    },
  }));
  const border = useBorders();

  return (
    <Link href={`/shop/${handle}`} passHref>
      <motion.a
        className={classes.holder}
        // initial={{ scale: 0 }}
        // animate={{ scale: 1 }}
        // exit={{ scale: 0 }}
        // transition={{ delay: index * 0.14 }}
        key={product.node.title + "-listing-link"}
      >
        <div className={`${classes.card} ${border.main}`}>
          <div className={classes.card__main}>
            <div className={classes.media}>
              <div
                className={`${classes.img} ${classes.img_1}`}
                transition={{ duration: 1 }}
                key={image1.originalSrc + "-img"}
              >
                <Image
                  src={image1.originalSrc}
                  alt={image1.altText}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  placeholder={image1?.blur ? "blur" : "empty"}
                  blurDataURL={image1?.blur ? image1.blur : ""}
                />
              </div>
              {image2 && (
                <div
                  className={`${classes.img} ${classes.img_2} image-2`}
                  transition={{ duration: 1 }}
                  key={image1.originalSrc + "-img"}
                >
                  <Image
                    src={image2.originalSrc}
                    alt={image2.altText}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder={image2?.blur ? "blur" : "empty"}
                    blurDataURL={image2?.blur ? image2.blur : ""}
                  />
                </div>
              )}
            </div>
            <div className={classes.content}>
              <Typography
                variant="body1"
                align="center"
                className={classes.details_title}
              >
                {title}
              </Typography>
              {/* {limited && (
                <span className={classes.limited_text}>Limited Edition!</span>
              )} */}
              <Typography
                variant="body2"
                align="center"
                className={classes.details_type}
              >
                {type}
              </Typography>

              <Button style={{ color: theme.palette.primary.main }}>
                <AddShoppingCartIcon /> Options
              </Button>
            </div>
            {limited && (
              <div
                className={classes.limited}
                // style={{
                //   backgroundColor: theme.palette.blue.main,
                //   background: `linear-gradient(20deg, ${theme.palette.blue.main}e6 0%, ${theme.palette.blue.main}F2 100%)`,
                // }}
              >
                <span>Limited Edition!</span>
              </div>
            )}
            <div
              className={classes.price + " price"}
              style={{
                backgroundColor: color,
                background: `linear-gradient(20deg, ${color} 0%, ${color}B3 100%)`,
              }}
            >
              ${price}
            </div>
          </div>
        </div>
      </motion.a>
    </Link>
  );
};

export default Listing;
