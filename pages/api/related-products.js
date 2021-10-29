import { getProducts } from "@lib/shopify";
import { findRelated } from "@utils/products";

export default async function createCheckoutHandler(req, res) {
  const { primary } = req.body;
  const products = await getProducts("all");
  const related = await findRelated(products, primary);
  res.status(200).json({ related_products: related });
}
