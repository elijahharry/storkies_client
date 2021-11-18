import { getProducts } from "@lib/shopify";

export default async function createCheckoutHandler(req, res) {
  try {
    const products = await getProducts("all");
    res.status(200).json({ products });
  } catch (e) {
    res.status(500).json(e.message);
  }
}
