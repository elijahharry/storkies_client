import Image from "next/image";

import useStyles from "./styles";

const Multi = ({ flipped, img }) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.images} ${
        flipped ? classes.images_flipped : classes.images_normal
      }`}
    >
      <div
        className={`${classes.image} ${classes.image__1} ${
          flipped ? classes.image__1_flipped : classes.image__1_normal
        }`}
      >
        <Image
          src={img.src}
          placeholder={img?.blur ? "blur" : "empty"}
          blurDataURL={img?.blur ? img.blur : ""}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div
        className={`${classes.image} ${classes.image__2} ${
          flipped ? classes.image__2_flipped : classes.image__2_normal
        }`}
      >
        <Image
          src={img.src}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder={img?.blur ? "blur" : "empty"}
          blurDataURL={img?.blur ? img.blur : ""}
        />
      </div>
    </div>
  );
};

export default Multi;
