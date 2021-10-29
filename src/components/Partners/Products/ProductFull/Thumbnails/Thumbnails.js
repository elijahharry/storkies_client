import Image from "next/image";

import { makeStyles } from "@material-ui/core";
import useStyles from "./styles";

const Thumbnails = ({ images, selected, changeSelected, color }) => {
  const classes = useStyles();

  const useThumbnails = makeStyles(() => ({
    unselected: {
      border: `8px solid transparent`,
    },
    selected: {
      border: `5px solid ${color}`,
    },
  }));
  const thumbnails = useThumbnails();

  return (
    <div className={classes.thumbnails}>
      {images.map((image, index) => (
        <div
          className={`${classes.thumbnail} ${
            selected.filename === image.filename
              ? thumbnails.selected
              : thumbnails.unselected
          }`}
          onMouseEnter={() => changeSelected(image)}
          onClick={() => changeSelected(image)}
          key={"img-thumb-" + index}
        >
          <Image
            layout="responsive"
            height={150}
            width={"100%"}
            objectFit="cover"
            objectPosition="center"
            src={`${process.env.BACKEND}/img/products/${image.filename}`}
            placeholder="blur"
            blurDataURL={image.blur}
          />
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;
