import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import useStyles from "./styles";

export const Single = ({ photo }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.single}`}>
      <Image
        src={`${process.env.BACKEND}/img/fav/${photo.filename}`}
        layout="fill"
        placeholder="blur"
        blurDataURL={photo.blur}
        objectFit="cover"
        objectPosition="center"
        className={classes.img}
      />
    </div>
  );
};

export const Double = ({ photo1, photo2 }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.double} `}>
      <div className={classes.double_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo1.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo1.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
      <div className={classes.double_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo2.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo2.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
    </div>
  );
};

export const Quadruple = ({ photo1, photo2, photo3, photo4 }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.quadruple} `}>
      <div className={classes.quadruple_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo1.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo1.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
      <div className={classes.quadruple_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo2.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo2.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
      <div className={classes.quadruple_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo3.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo3.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
      <div className={classes.quadruple_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo4.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo4.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
    </div>
  );
};

export const Octuple = ({
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
}) => {
  const classes = useStyles();

  return (
    <div className={`${classes.octuple}`}>
      <div className={classes.octuple_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo1.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo1.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
      <div className={classes.octuple_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo2.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo2.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
      <div className={classes.octuple_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo3.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo3.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
      <div className={classes.octuple_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo4.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo4.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
      <div className={classes.octuple_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo5.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo5.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
      <div className={classes.octuple_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo6.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo6.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
      <div className={classes.octuple_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo7.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo7.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
      <div className={classes.octuple_img}>
        <Image
          src={`${process.env.BACKEND}/img/fav/${photo8.filename}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={photo8.blur}
          objectFit="cover"
          objectPosition="center"
          className={classes.img}
        />
      </div>
    </div>
  );
};

export default Single;
