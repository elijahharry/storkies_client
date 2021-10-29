import { useState, useEffect } from "react";

import { Chip, Container, Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import useStyles from "./styles";
import Product from "./Product/Product";
import ProductFull from "./ProductFull/ProductFull";

const Products = ({
  allProducts,
  selectedBrand,
  setSelectedBrand,
  selectedProduct,
  setSelectedProduct,
}) => {
  const classes = useStyles();
  const [products, setProducts] = useState([...allProducts]);

  useEffect(() => {
    if (!selectedBrand) {
      setProducts([...allProducts]);
    } else {
      const raw = [...allProducts];
      const filtered = raw.filter((p) => p.brand.title === selectedBrand.title);
      setProducts(filtered);
    }
  }, [selectedBrand]);

  return selectedProduct ? (
    <ProductFull product={selectedProduct} setProduct={setSelectedProduct} />
  ) : (
    <section
      id="products"
      key={selectedBrand ? `${selectedBrand.title}-products` : "all-products"}
      className="grey"
    >
      <Container maxWidth="lg" className={classes.container}>
        {/* {!selectedBrand ? (
          <Typography variant="h3">
            All<span className={classes.secondary}> Products </span>From Our
            <span className={classes.primary}> Partners</span>
          </Typography>
        ) : (
          <Typography variant="h3">{selectedBrand.title} Products</Typography>
        )} */}
        {selectedBrand && (
          <a
            className={classes.remove}
            onClick={() => setSelectedBrand(null)}
            style={{ backgroundColor: selectedBrand.color }}
          >
            <CancelIcon fontSize="small" /> <span>View All</span>
          </a>
        )}
        <ul className={classes.products}>
          {products.map((product, i) => (
            <Product
              product={product}
              key={`product-${i}-${product.title}`}
              openProduct={setSelectedProduct}
              setBrand={setSelectedBrand}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Products;
