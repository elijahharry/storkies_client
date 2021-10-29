import {
  Button,
  TextField,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ColorExtractor } from "react-color-extractor";
import { useState, useEffect } from "react";
import Router from "next/router";

const temp = {
  name: "",
  slug: "",
  bio: "",
  logo: "",
  color: "",
  logoSrc: null,
  colors: [],
};

const AddBrand = ({ revalidate }) => {
  const classes = useStyles();
  const [brand, setBrand] = useState(temp);
  const [sending, setSending] = useState(false);

  const handleLogoUpload = (e) => {
    setBrand({
      ...brand,
      [e.target.name]: e.target.files[0],
      logoSrc: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData();
    formData.append("title", brand.name);
    formData.append("slug", brand.slug);
    formData.append("bio", brand.bio);
    formData.append("logo", brand.logo);
    formData.append("color", brand.color);
    const res = await fetch("/api/access");
    res.json().then(async (data) => {
      try {
        const response = await fetch(`${process.env.BACKEND}/brands`, {
          method: "post",
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
          body: formData,
        });
        revalidate();
        setBrand(temp);
        setSending(false);
      } catch (e) {
        console.log(e);
        setSending(false);
      }
    });
  };

  return !sending ? (
    <div className={classes.holder}>
      <Typography variant="h5" gutterBottom color="primary" align="center">
        <strong>Add a New Brand</strong>
      </Typography>
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            variant="outlined"
            label="Brand name"
            fullWidth
            value={brand.name}
            onChange={(e) =>
              setBrand({ ...brand, [e.target.name]: e.target.value })
            }
            required
            color="secondary"
          />
          <TextField
            name="slug"
            variant="outlined"
            label="Slug"
            fullWidth
            value={brand.slug}
            onChange={(e) =>
              setBrand({ ...brand, [e.target.name]: e.target.value })
            }
            required
            color="secondary"
          />
          <TextField
            name="bio"
            variant="outlined"
            label="Bio"
            fullWidth
            value={brand.bio}
            onChange={(e) =>
              setBrand({ ...brand, [e.target.name]: e.target.value })
            }
            required
            multiline
            minRows={4}
            color="secondary"
          />
          <TextField
            name="color"
            variant="outlined"
            label="Primary Color"
            fullWidth
            value={brand.color}
            onChange={(e) =>
              setBrand({ ...brand, [e.target.name]: e.target.value })
            }
            required
            color="secondary"
            helperText="After uploading the brand logo, you'll be able to quickly select a color from a list of options."
            style={brand?.color ? { "& label": { color: brand.color } } : {}}
          />
          <div className={classes.logo_row}>
            {brand?.logoSrc ? (
              <ColorExtractor
                getColors={(colors) =>
                  setBrand({ ...brand, colors: [...colors] })
                }
              >
                <img src={brand.logoSrc} height={70} />
              </ColorExtractor>
            ) : (
              <Typography variant="body2">Upload logo</Typography>
            )}
            <input
              type="file"
              accept=".png"
              name="logo"
              onChange={handleLogoUpload}
              required
            />
          </div>
          {brand?.colors.length > 0 && (
            <div className={classes.colors}>
              {brand.colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setBrand({ ...brand, color: color })}
                  className={classes.color}
                  style={{
                    backgroundColor: color,
                    border: color === brand?.color ? `0px` : `3px solid #fff`,
                  }}
                />
              ))}
            </div>
          )}
          <div className={classes.submit_row}>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className={classes.loading}>
      <CircularProgress thickness={6} size={60} color="secondary" />
      <Typography variant="h5" align="center" color="secondary">
        <strong>Saving brand...</strong>
      </Typography>
      <Typography variant="body2" align="center">
        Any minute now...
      </Typography>
    </div>
  );
};

export default AddBrand;

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 800,
    boxShadow: theme.shadows[2],
    "& .MuiFormControl-root": {
      margin: `${theme.spacing(1)}px 0`,
    },
    "& form": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.down(810)]: {
      width: "100%",
    },
  },
  submit_row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(1),
  },
  holder: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  logo_row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img, p": {
      marginRight: theme.spacing(3),
    },
  },
  colors: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  color: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    cursor: "pointer",
    margin: `0 ${theme.spacing(0.5)}px`,
  },
}));
