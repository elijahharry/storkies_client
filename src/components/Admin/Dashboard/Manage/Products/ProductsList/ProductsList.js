import { useState } from "react";
import Image from "next/dist/client/image";
import Router from "next/router";

import {
  makeStyles,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const ProductsList = ({ products, revalidate }) => {
  const classes = useStyles();
  const [confirm, setConfirm] = useState(null);

  const handleDeletion = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/access");
    res.json().then(async (data) => {
      try {
        const response = await fetch(`${process.env.BACKEND}/products/delete`, {
          method: "post",
          headers: {
            Authorization: `Bearer ${data.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(confirm),
        });
        revalidate();
      } catch (e) {
        console.log(e);
      }
    });
  };

  return (
    <>
      <div className={classes.products}>
        {products.map((product) => (
          <div key={product.title + "-block"} className={classes.product}>
            <Image
              src={`${process.env.BACKEND}/img/products/${product.images[0].filename}`}
              width={95}
              height={95}
              placeholder="blur"
              blurDataURL={product.images[0].blur}
              objectFit="cover"
              objectPosition="center"
            />
            <div className={classes.content}>
              <Typography variant="body1">{product.title}</Typography>
              <Button
                className={classes.delete}
                onClick={() =>
                  setConfirm({
                    title: product.title,
                    id: product._id,
                    images: product.images,
                  })
                }
              >
                <ClearIcon /> Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Dialog
        open={confirm !== null ? true : false}
        onClose={() => setConfirm(null)}
      >
        <DialogTitle>
          Are you sure you want to delete{confirm?.title && ` ${confirm.title}`}
          ?
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2">Deletion is permenant.</Typography>
          <DialogActions>
            <Button onClick={() => setConfirm(null)} color="primary">
              Nevermind
            </Button>
            <Button onClick={handleDeletion} color="secondary">
              I'm sure, delete it!
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  products: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  product: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: 90,
    borderRadius: 20,
    boxShadow: theme.shadows[1],
    backgroundColor: "#fff",
    margin: theme.spacing(1),
    overflow: "hidden",
    maxWidth: "100%",
  },
  content: {
    display: "flex",
    padding: theme.spacing(1),
    paddingRight: theme.spacing(2.2),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    "& p": {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(0.6),
    },
  },
  delete: {
    color: "#c6c6c6",
    "& span": {
      display: "inline-flex",
      alignItems: "center",
    },
    "& svg": {
      height: "1.2rem",
      width: "1.2rem",
      marginBottom: 3,
      marginRight: 2,
    },
  },
}));

export default ProductsList;
