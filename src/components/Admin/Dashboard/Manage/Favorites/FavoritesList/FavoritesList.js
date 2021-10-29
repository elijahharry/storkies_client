import Image from "next/image";

import { makeStyles } from "@material-ui/core";

const FavoritesList = ({ favorites }) => {
  const classes = useStyles();
  return (
    <div className={classes.imgs}>
      {favorites.images.map((img) => (
        <div className={classes.img} key={img + "-img"}>
          <Image
            src={`${process.env.BACKEND}/img/fav/${img.filename}`}
            blurDataURL={img.blur}
            placeholder="blur"
            width={80}
            height={80}
            objectPosition="center"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  imgs: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    margin: theme.spacing(0.2),
  },
}));

export default FavoritesList;
