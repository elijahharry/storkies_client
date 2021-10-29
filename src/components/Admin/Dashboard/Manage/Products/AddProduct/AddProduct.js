import {
  Button,
  TextField,
  Chip,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState, useEffect } from "react";

const temp = {
  title: "",
  brand: "",
  type: "",
  desc: "",
  images: "",
  sizes: "",
  sizesArr: [],
  thc: "",
  source: "",
  genetics: "",
};

const AddProduct = ({ brands, revalidate }) => {
  const classes = useStyles();

  const [product, setProduct] = useState(temp);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("brand", JSON.stringify(product.brand));
    formData.append("type", product.type);
    formData.append("desc", product.desc);
    formData.append("sizes", JSON.stringify(product.sizesArr));
    formData.append("thc", product.thc);
    formData.append("source", product.source);
    formData.append("genetics", product.genetics);
    const imgArray = Array.from(product.images);
    imgArray.forEach((img) => formData.append("images", img));
    const res = await fetch("/api/access");
    res.json().then(async (data) => {
      try {
        const response = await fetch(`${process.env.BACKEND}/products`, {
          method: "post",
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
          body: formData,
        });
        revalidate();
        setProduct(temp);
        setSending(false);
      } catch (e) {
        console.log(e);
        setSending(false);
      }
    });
  };

  useEffect(() => {
    const sizesArr = product.sizes.split(", ");
    const filtered = sizesArr.filter((size) => {
      if (size !== "" || size !== " " || size !== "  ") {
        return size;
      }
    });
    setProduct({ ...product, sizesArr: filtered });
  }, [product.sizes]);

  return !sending ? (
    <div className={classes.holder}>
      <div className={classes.form}>
        <Typography variant="h5" gutterBottom color="primary" align="center">
          <strong>Add a New Product</strong>
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            variant="outlined"
            label="Product name"
            fullWidth
            value={product.title}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="brand-label">Brand</InputLabel>
            <Select
              labelId="brand-label"
              id="brand"
              name="brand"
              value={product.brand}
              onChange={(e) => {
                console.log(e.target.value);
                setProduct({ ...product, [e.target.name]: e.target.value });
              }}
            >
              {brands.map((b) => (
                <MenuItem key={b.title + "-item"} value={b}>
                  {b.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            name="type"
            variant="outlined"
            label="Type"
            fullWidth
            value={product.type}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
          <TextField
            name="genetics"
            variant="outlined"
            label="Genetics"
            fullWidth
            value={product.genetics}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
          <TextField
            name="source"
            variant="outlined"
            label="Source"
            fullWidth
            value={product.source}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
          <TextField
            name="thc"
            variant="outlined"
            label="THC Percentage"
            type="number"
            fullWidth
            value={product.thc}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
          <TextField
            name="sizes"
            variant="outlined"
            label="Sizes"
            fullWidth
            placeholder="3.5g, 7g, 14g"
            value={product.sizes}
            helperText="MUST be seperated with a comma and single space."
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
          <div className={classes.chips}>
            {product.sizesArr.map((size) => (
              <Chip key={size + "-chip"} label={size} color="primary" />
            ))}
          </div>
          <TextField
            name="desc"
            variant="outlined"
            label="Description"
            fullWidth
            multiline
            rows={3}
            value={product.desc}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
          <div className={classes.submit_row}>
            <input
              type="file"
              multiple
              name="images"
              onChange={(e) =>
                setProduct({ ...product, [e.target.name]: e.target.files })
              }
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className={classes.loading}>
      <CircularProgress thickness={6} size={60} color="secondary" />
      <Typography variant="h5" align="center" color="secondary">
        <strong>Saving product...</strong>
      </Typography>
      <Typography variant="body2" align="center">
        Any minute now...
      </Typography>
    </div>
  );
};

export default AddProduct;

const useStyles = makeStyles((theme) => ({
  loading: {
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing(8)}px 0`,
    "& h5": {
      marginTop: theme.spacing(3),
    },
    "& p": {
      marginTop: theme.spacing(0.5),
      width: "70%",
    },
  },
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
  chips: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    "& .MuiChip-root": {
      margin: theme.spacing(1),
      marginLeft: 0,
    },
    "& .MuiChip-label": {
      fontSize: "1rem",
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
}));
