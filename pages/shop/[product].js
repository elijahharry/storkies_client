import { getProductSlugs, getProduct, getProducts } from "@lib/shopify";
import { findRelated } from "@utils/products";
import * as api from "@utils/server";

import Main from "@components/Main/Main";
import MerchFull from "@components/Merch/FullPage/MerchFull";
import MerchHero from "@components/Merch/MerchHero/MerchHero";
import Related from "@components/Merch/Related/Related";

const ProductPage = ({ product, related, collection }) => {
  return (
    <Main
      dark={true}
      title={`${product.title} | ${product.productType}`}
      desc={product.description}
      key={product.title + "-page"}
    >
      <MerchFull
        product={product}
        crumbs={[
          { a: "/shop", t: "Shop" },
          { a: `/collections/${collection.handle}`, t: collection.title },
          { a: "#products", t: product.title },
        ]}
      />
      <Related related={related} primary={product} />
    </Main>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const slugs = await getProductSlugs("All");

  const paths = slugs.map((slug) => {
    const product = String(slug.node.handle);
    return {
      params: { product },
    };
  });
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const products = await getProducts("all");
  const product = await getProduct(params.product);
  const related = await findRelated(products, product);
  const collectionsRaw = product.collections.edges;
  const collections = collectionsRaw.filter((c) => c.node.handle !== "all");

  return {
    props: {
      product: product,
      related: related,
      collection: collections[0].node,
    },
    revalidate: 5,
  };
}
