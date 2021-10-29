module.exports = {
  images: {
    domains: ["cdn.shopify.com", process.env.BACKEND_DOMAIN, "localhost"],
  },
  env: {
    WORDPRESS: "https://storkies.info/",
    WOOCOMMERCE_KEY: "ck_6044a30bbafdf701998cf3383d24af7011e327e1",
    WOOCOMMERCE_SECRET: "cs_7a4a9786f14e5fcf925869704c1555af2cc5bf4c",
    SHOPIFY_TOKEN: process.env.SHOPIFY_API_TOKEN,
    SHOPIFY_DOMAIN: process.env.SHOPIFY_API_DOMAIN,
    CART_LOCAL_STORAGE: process.env.CART_LS_NAME,
    BACKEND: process.env.BACKEND_URL,
    BACKEND_D: process.env.BACKEND_DOMAIN,
    MAILCHIMP_API_KEY: process.env.MC_API,
    MAILCHIMP_API_SERVER: process.env.MC_SERVER,
    MAILCHIMP_AUDIENCE_ID: process.env.MC_ID,
  },
  async redirects() {
    return [
      {
        source: "/shop/collection",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/merch",
        destination: "/shop",
        permanent: true,
      },
    ];
  },
};
