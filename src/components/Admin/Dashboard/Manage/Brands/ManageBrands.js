import AddBrand from "./AddBrand/AddBrand";
import BrandsList from "./BrandsList/BrandsList";

import { Grid } from "@material-ui/core";

const ManageBrands = ({ brands, revalidate, loading }) => {
  return (
    <div>
      <BrandsList brands={brands} revalidate={revalidate} />
      <AddBrand revalidate={revalidate} />
    </div>
  );
};

export default ManageBrands;
