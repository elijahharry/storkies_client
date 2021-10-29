import Image from "next/image";

import useStyles from "./styles";

const SelectedImage = ({ selected }) => {
  const classes = useStyles();
  return (
    <div className={classes.selected}>
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={`${process.env.BACKEND}/img/products/${selected.filename}`}
        placeholder="blur"
        blurDataURL={selected.blur}
      />
    </div>
  );
};

export default SelectedImage;
