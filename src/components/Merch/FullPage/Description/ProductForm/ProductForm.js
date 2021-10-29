import { useEffect, useState } from "react";
import { useCartContext, useAddToCartContext } from "context/Cart";
import Link from "next/link";

import {
  Input,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel,
  FormControl,
  Button,
  CircularProgress,
  Typography,
  TextField,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CachedIcon from "@material-ui/icons/Cached";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Snackbar from "@material-ui/core/Snackbar";
import useStyles from "./styles";

const ProductForm = ({
  title,
  handle,
  type,
  variants,
  setVariantPrice,
  img,
  quantity,
  setQuantity,
  changeSelectedImg,
}) => {
  const classes = useStyles();
  const [variantId, setVariantId] = useState(variants[0].node.id);
  const [variant, setVariant] = useState(variants[0]);
  const isLoading = useCartContext()[2];
  const success = useCartContext()[3];
  const addToCart = useAddToCartContext();

  const [failure, setFailure] = useState(null);

  const handleSizeChange = (size) => {
    console.log(size);
    setVariantId(size);
    const selectedVariant = variants.filter((v) => v.node.id === size).pop();
    setVariantPrice(selectedVariant.node.price);
    setVariant(selectedVariant);
    if (selectedVariant.node?.image?.originalSrc) {
      changeSelectedImg(selectedVariant.node.image.originalSrc);
    }
  };
  const handleAddToCart = async () => {
    const varId = variant.node.id;
    if (quantity !== "") {
      try {
        addToCart({
          productTitle: title,
          productHandle: handle,
          productImage: img,
          productType: type,
          variantId: varId,
          variantPrice: variant.node.price,
          variantTitle: variant.node.title,
          variantQuantity: quantity,
        });
      } catch (error) {
        console.log(error);
        setFailure("Something went wrong. Item wasn't added to your cart.");
      }
    }
  };

  const updateQuantity = (quant) => {
    if (quant === "") {
      setQuantity("");
    } else {
      setQuantity(Math.floor(quant));
    }
  };

  console.log(variants);

  return (
    <div className={classes.form}>
      <div className={classes.form__inputs}>
        <TextField
          variant="outlined"
          labelId="quantity-label"
          type="number"
          id="quantity"
          name="quantity"
          inputProps={{ min: 1, inputMode: "numeric", step: 1 }}
          value={quantity}
          onChange={(e) => updateQuantity(e.target.value)}
          className={classes.inputs_quantity}
          className={`${classes.inputs_quantity}${
            variant.node.title.includes("/")
              ? ` ${classes.quantity_shrink}`
              : ""
          }`}
          label="Quantity"
        />
        <FormControl variant="outlined">
          <InputLabel id="size-label">
            {variant.node.title.includes("/") ? "Fit & Style" : "Fit"}
          </InputLabel>
          <Select
            className={`${classes.inputs_size}`}
            labelId="size-label"
            id="size-input"
            name="size"
            value={variantId}
            input={
              <OutlinedInput
                label={variant.node.title.includes("/") ? "Fit & Style" : "Fit"}
              />
            }
            onChange={(e) => handleSizeChange(e.target.value)}
            MenuProps={{ className: classes.size_menu, elevation: 0 }}
          >
            {variants.map((item) => (
              <MenuItem
                id={item.node.id}
                key={item.node.id}
                value={item.node.id}
              >
                {item.node.title}
                <span className={classes.size_label__price}>
                  ${item.node.price}
                </span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.buttons}>
        <Link href="/shop" passHref>
          <Button
            variant="contained"
            onClick={handleAddToCart}
            fullWidth
            className={classes.back_button}
          >
            Back to all
          </Button>
        </Link>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          className={`${classes.button} ${classes.add_to_cart} ${
            isLoading && classes.opaque
          }`}
          fullWidth
          size="large"
        >
          {isLoading ? (
            <CachedIcon className={`${classes.button__icon} spin fadeload`} />
          ) : (
            <AddShoppingCartIcon className={classes.button__icon} />
          )}
          {isLoading ? "Adding to cart..." : "Add to cart"}
        </Button>
      </div>
      <Snackbar open={success} autoHideDuration={8000}>
        <div className={classes.alert}>
          <CheckCircleOutlineIcon color="primary" />
          <Typography variant="body2">
            Successfully added to your cart.
          </Typography>
          <Link href="/cart" passHref>
            <Button color="primary" className={classes.cart_alert_button}>
              View Cart
            </Button>
          </Link>
        </div>
      </Snackbar>
    </div>
  );
};

export default ProductForm;
