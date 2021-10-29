import AddProduct from "./AddProduct/AddProduct";
import ProductsList from "./ProductsList/ProductsList";

import { Grid, CircularProgress } from "@material-ui/core";

const ManageProducts = ({ brands, products, revalidate }) => {
  return (
    <div>
      <ProductsList products={products} revalidate={revalidate} />
      <AddProduct brands={brands} revalidate={revalidate} />
    </div>
  );
};

export default ManageProducts;
