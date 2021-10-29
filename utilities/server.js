import axios from "axios";

export const fetchFavorites = async () => {
  const { data } = await axios.get(`${process.env.BACKEND}/fav/fetch`);
  return data.images;
};

export const fetchBrands = async () => {
  const { data } = await axios.get(`${process.env.BACKEND}/brands/fetch`);
  return data;
};

export const fetchProducts = async () => {
  const { data } = await axios.get(`${process.env.BACKEND}/products/fetch`);
  return data;
};

export const fetchAll = async () => {
  const { data: brands } = await axios.get(
    `${process.env.BACKEND}/brands/fetch`
  );
  const { data: products } = await axios.get(
    `${process.env.BACKEND}/products/fetch`
  );
  const { data: favorites } = await axios.get(
    `${process.env.BACKEND}/fav/fetch`
  );
  return { brands: brands, products: products, favorites: favorites };
};
