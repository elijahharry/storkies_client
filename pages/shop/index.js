import { useState } from "react";
import * as shopify from "@lib/shopify";
import * as api from "@utils/server";
import {
  generateProductPlaceholders,
  generateCollectionsPlaceholders,
} from "@utils/placeholders";
import { fetchTags } from "@utils/products";

import Collections from "@components/Merch/Collections/Collections";
import Listings from "@components/Merch/Listings/Listings";
import Hero from "@components/Hero/Hero";
import Main from "@components/Main/Main";
import Tags from "@components/Merch/Tags/Tags";

function MerchStore({ products, tags, collections, favorites }) {
  const [merch, setMerch] = useState([...products]);
  const [showTags, setShowTags] = useState(false);
  const [tag, setTag] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleTagsMenu = () => {
    setShowTags(!showTags);
  };

  const resetTags = () => {
    setTag(null);
    setMerch([...products]);
  };

  return (
    <Main>
      <Hero
        id="merch"
        title="Merch Store"
        subtitle="Fly high"
        collage={{ images: favorites, slides: 3 }}
      />
      <Collections collections={collections} />
      <Tags
        open={showTags}
        tags={tags}
        products={products}
        setMerch={setMerch}
        selected={tag}
        setSelected={setTag}
        toggleOpen={toggleTagsMenu}
        collectionHandle="all"
        setLoading={setLoading}
      />
      <Listings
        loading={loading}
        title={true}
        products={merch}
        toggleTagsMenu={toggleTagsMenu}
        tag={tag}
        resetTags={resetTags}
      />
    </Main>
  );
}

export default MerchStore;

export async function getStaticProps() {
  const collectionsRes = await shopify.getCollections();
  const productsRes = await shopify.getProducts("All");
  const favorites = await api.fetchFavorites();
  const tags = await fetchTags(productsRes);

  const collectionsTrim = [];
  collectionsRes.forEach((c) => {
    if (c.node.handle !== "all" && c.node.handle !== "featured-items") {
      collectionsTrim.push(c.node);
    }
  });

  try {
    const collections = await generateCollectionsPlaceholders(collectionsTrim);
    const products = await generateProductPlaceholders(productsRes);
    return {
      props: {
        products: products,
        collections: collections,
        favorites: favorites,
        tags: tags,
      },
      revalidate: 60,
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        products: productsRes,
        collections: collectionsTrim,
        favorites: favorites,
        tags: tags,
      },
      revalidate: 60,
    };
  }
}
