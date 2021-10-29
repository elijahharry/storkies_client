import Image from "next/image";

import useStyles from "./styles";

const SelectedImage = ({ selected }) => {
  const classes = useStyles();
  return (
    <div key={selected + "-img"} className={classes.container}>
      <div className={classes.selected}>
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          src={selected}
          key={selected + "-img-next"}
        />
      </div>
    </div>
  );
};

export default SelectedImage;
