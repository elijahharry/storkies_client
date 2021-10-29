import { node } from "prop-types";

const domain = process.env.SHOPIFY_DOMAIN;
const token = process.env.SHOPIFY_TOKEN;

export const callShopify = async (query) => {
  const fetchUrl = `https://${domain}/api/2021-01/graphql.json`;

  const fetchOptions = {
    endpoint: fetchUrl,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch products!", domain);
  }
};

export const getCollections = async () => {
  const query = `{
      collections(first:250) {
        edges {
          node {
            id
            handle
            title
            description
            image {
             id
             originalSrc
           }
          }
        }
      }
    }`;
  const response = await callShopify(query);
  return response?.data?.collections?.edges
    ? response.data.collections.edges
    : response;
};

export const getProducts = async (collection) => {
  const query = `{
      collectionByHandle(handle: "${collection}") {
        id
        title
        products(first: 250) {
          edges {
            node {
              id
              title
              description
              handle
              productType
              tags
              vendor
              images(first: 250) {
                edges {
                  node {
                    id
                    originalSrc
                    height
                    width     
                    altText             
                  }
                }
              }
              variants(first: 250) {
                edges {
                  node {
                    id
                    title
                    price                
                  }
                }
              }
            }
          }
        }
      }
    }`;
  const response = await callShopify(query);
  const productsArray = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  const products = productsArray.map((product) => ({
    ...product,
    node: {
      ...product.node,
      limited_edition: product.node.tags.includes("limited edition"),
    },
  }));

  return products;
};

export const getProductSlugs = async (collection) => {
  const query = `{
      collectionByHandle(handle: "${collection}") {
        products(first: 250) {
          edges {
            node {
              handle              
            }
          }
        }
      }
    }`;

  const response = await callShopify(query);
  const slugs = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return slugs;
};

export const getProduct = async (handle) => {
  const query = `{
      productByHandle(handle: "${handle}") {
        id
        title
        handle
        description
        productType
        vendor
        tags
    collections(first: 250) {
      edges {
        node {
          title
          handle
          image {
            originalSrc
          }
        }
      }
    }
        images(first: 250) {
          edges {
            node {
              id
              originalSrc
              height
              width     
              altText             
            }
          }
        }
        variants(first: 250) {
          edges {
            node {
              id
              title
              price      
              image {
                id
                originalSrc
              }
            }
          }
        }
        seo {
          title
          description
        }
      }
    }`;
  const response = await callShopify(query);

  // metafield(namespace: 'my_fields', key: 'fit') {
  //   value
  // }

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];

  return product;
};

export async function createCheckout(id, quantity) {
  const query = `mutation 
      {
        checkoutCreate(input: {
          lineItems: [{ variantId: "${id}", quantity: ${quantity} }]
        }) {
          checkout {
             id
             webUrl
             lineItems(first: 250) {
               edges {
                 node {
                   id
                   title
                   quantity
                 }
               }
             }
          }
        }
      }      
    `;
  const response = await callShopify(query);

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];

  return checkout;
}

export async function updateCheckout(id, lineItems) {
  const formattedLineItems = lineItems.map((item) => {
    return `{
      variantId: "${item.variantId}",
      quantity:${item.quantity}
    }`;
  });

  const query = `mutation 
      {
        checkoutLineItemsReplace(lineItems: [${formattedLineItems}], checkoutId: "${id}") {
          checkout {
             id
             webUrl
             lineItems(first: 250) {
               edges {
                 node {
                   id
                   title
                   quantity
                 }
               }
             }
          }
        }
      }      
    `;

  const response = await callShopify(query);

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
}
