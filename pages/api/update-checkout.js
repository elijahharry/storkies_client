import { updateCheckout } from "@lib/shopify";

export default async function updateCheckoutHandler(req, res) {
  try {
    const checkout = await updateCheckout(
      req.body.checkoutId,
      req.body.products
    );
    res.status(200).json({ checkout: JSON.stringify(checkout) });
  } catch (error) {
    console.log(error);
  }
}
