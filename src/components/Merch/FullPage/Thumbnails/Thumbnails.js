import Image from "next/image";

import { useTheme } from "@material-ui/core";
import useStyles from "./styles";

const Thumbnails = ({ images, selected, changeSelected }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.thumbnails}>
      {images.map((image, index) => {
        let color;
        switch (index % 3) {
          case 0:
            color = theme.palette.secondary.main;
            break;
          case 1:
            color = theme.palette.primary.main;
            break;
          case 2:
            color = theme.palette.blue.main;
            break;
        }
        return (
          <div
            className={`${classes.thumbnail} ${
              image.node.originalSrc === selected && classes.thumbnail__selected
            }`}
            // style={{ border: `1px solid ${color}` }}
            style={{ borderColor: color }}
            onMouseEnter={() => changeSelected(image.node.originalSrc)}
            onClick={() => changeSelected(image.node.originalSrc)}
            key={index + "thumb"}
          >
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={image.node.originalSrc}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Thumbnails;
