import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as api from "@utils/server";

import Main from "@components/Main/Main";
import Hero from "@components/Hero/Hero";
import Products from "@components/Partners/Products/Products";
import Brands from "@components/Partners/Brands/Brands";
import ProductPopup from "@components/Partners/Products/ProductFull/ProductFull";
import Partners from "@components/Partners/Partners";

const BrandsPage = ({ favorites, products, brands }) => {
  const [color, setColor] = useState(null);

  return (
    <Main color={color}>
      <Hero
        collage={{ images: favorites, slides: 3 }}
        title="Our Partners"
        subtitle="In-house brands"
        color={color}
      />
      <Partners brands={brands} products={products} setColor={setColor} />
    </Main>
  );
};

export default BrandsPage;

export async function getStaticProps() {
  const { favorites, brands, products } = await api.fetchAll();
  return {
    props: { favorites: favorites.images, products: products, brands: brands },
    revalidate: 5,
  };
}
