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

const BrandsList = ({ brands, revalidate }) => {
  const classes = useStyles();
  const [confirm, setConfirm] = useState(null);

  const handleDeletion = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/access");
    res.json().then(async (data) => {
      try {
        const response = await fetch(`${process.env.BACKEND}/brands/delete`, {
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
      <div className={classes.brands}>
        {brands.map((brand) => (
          <div className={classes.brand} key={brand}>
            <Image
              src={`${process.env.BACKEND}/img/brands/${brand.logo.filename}`}
              width={120}
              height={120}
              placeholder="blur"
              blurDataURL={brand.logo.blur}
              objectFit="contain"
              objectPosition="center"
            />
            <Button
              className={classes.delete}
              onClick={() =>
                setConfirm({
                  title: brand.title,
                  id: brand._id,
                  logo: brand.logo,
                })
              }
            >
              <ClearIcon /> Delete
            </Button>
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
          <Typography variant="body2">
            Deletion is permenant. If you have products associated with{" "}
            {confirm?.title ? confirm.title : "this brand"}, you'll need to
            edit/delete those as well.
          </Typography>
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
  brands: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: 150,
    borderRadius: 20,
    boxShadow: theme.shadows[1],
    backgroundColor: "#fff",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
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

export default BrandsList;
