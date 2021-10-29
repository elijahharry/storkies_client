import React, { useState } from "react";
import * as shopify from "@lib/shopify";
import { fetchTags } from "@utils/products";
import { getPlaiceholder } from "plaiceholder";
import { generateProductPlaceholders } from "@utils/placeholders";

import Main from "@components/Main/Main";
import Listings from "@components/Merch/Listings/Listings";
import Tags from "@components/Merch/Tags/Tags";
import MerchHero from "@components/Merch/MerchHero/MerchHero";

import { useTheme } from "@material-ui/core";

const Collection = ({ products, collection, collections, tags }) => {
  const [merch, setMerch] = useState([...products]);
  const [showTags, setShowTags] = useState(false);
  const [tag, setTag] = useState(null);

  const node = collection.node;
  const theme = useTheme();

  const index = collections.indexOf(node.handle);
  let color;
  switch (index % 3) {
    case 0:
      color = theme.palette.blue.main;
      break;
    case 1:
      color = theme.palette.secondary.main;
      break;
    case 2:
      color = theme.palette.primary.main;
      break;
  }

  const toggleTagsMenu = () => {
    setShowTags(!showTags);
  };

  return (
    <Main dark={true}>
      <MerchHero
        title={node.title}
        img={{
          src: node.image.originalSrc,
          blur: node.image?.blur,
        }}
        color={color}
        crumbs={[
          { a: "/shop", t: "Shop" },
          { a: "#products", t: node.title },
        ]}
      />
      <Listings products={merch} />
      <Tags
        open={showTags}
        tags={tags}
        products={products}
        setMerch={setMerch}
        selected={tag}
        setSelected={setTag}
        toggleOpen={toggleTagsMenu}
      />
    </Main>
  );
};

export default Collection;

export async function getStaticProps({ params }) {
  try {
    const productsRes = await shopify.getProducts(params.collection);
    const collections = await shopify.getCollections();
    const tags = await fetchTags(productsRes);
    const filtered = collections.filter((c) => {
      if (c.node.handle === params.collection) {
        return c;
      }
    });
    const collectionHandlesRaw = collections.map((c) => c.node.handle);
    const collectionHandles = collectionHandlesRaw.filter((c) => c !== "all");
    const collection = filtered.length > 0 ? filtered[0] : undefined;

    try {
      const products = await generateProductPlaceholders(productsRes);
      const { base64 } = await getPlaiceholder(
        collection.node.image.originalSrc
      );
      const collectionWithBlur = {
        ...collection,
        node: {
          ...collection.node,
          image: { ...collection.node.image, blur: base64 },
        },
      };
      return {
        props: {
          products: products,
          // collection: {
          //   ...collection,
          //   image: { ...collection.image, blur: base64 },
          // },
          collection: collectionWithBlur,
          collections: collectionHandles,
          tags: tags,
        },
        revalidate: 60,
      };
    } catch (e) {
      return {
        props: {
          products: productsRes,
          collection: collection,
          collections: collectionHandles,
          tags: tags,
        },
        revalidate: 60,
      };
    }
  } catch (e) {
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  const collections = await shopify.getCollections();
  const filtered = collections.filter((c) => c.node.handle !== "all");
  const paths = filtered.map((c) => ({
    params: { collection: c.node.handle },
  }));
  return { paths, fallback: "blocking" };
}
