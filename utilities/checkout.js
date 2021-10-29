export const createCheckout = async (newItem) => {
  const data = await fetch("/api/create-checkout", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: newItem["variantId"],
      quantity: newItem["variantQuantity"],
    }),
  });
  const response = await data.json();
  return response;
};

export async function updateCheckout(updatedCart, checkoutId) {
  const products = updatedCart.map((item) => {
    return {
      variantId: item["variantId"],
      quantity: item["variantQuantity"],
    };
  });

  const body = JSON.stringify({ checkoutId, products });
  await fetch("/api/update-checkout", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: body,
  });
}
