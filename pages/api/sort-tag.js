import { getProducts } from "@lib/shopify";

export default async function createCheckoutHandler(req, res) {
  const { tag, collection } = req.body;
  const products = await getProducts(collection);
  const sorted = products.filter((product) => product.node.tags.includes(tag));
  res.status(200).json({ sorted: sorted });
}
