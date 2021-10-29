import { useState, useEffect } from "react";
import Brands from "./Brands/Brands";
import Products from "./Products/Products";

const Partners = ({ brands, products, setColor }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Brands
        brands={brands}
        selected={selectedBrand}
        setSelected={setSelectedBrand}
        setSelectedProduct={setSelectedProduct}
        setColor={setColor}
      />
      <Products
        allProducts={products}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </>
  );
};

export default Partners;
