import { getPlaiceholder } from "plaiceholder";

export default async function generatePlaceholder(source) {
  try {
    const { base64 } = await getPlaiceholder(source);
    return base64;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

export async function generateProductPlaceholders(products) {
  const productPromises = [];
  products.map((p) => {
    const iteration = new Promise(async (resolve, reject) => {
      try {
        const images = p.node.images.edges;
        const imagePromises = [];
        images.map((i) => {
          const imgIteration = new Promise(async (imgResolve, imgReject) => {
            try {
              const blur = await generatePlaceholder(i.node.originalSrc);
              imgResolve({ ...i, node: { ...i.node, blur: blur } });
            } catch (e) {
              console.log(e);
              imgResolve({ ...i });
            }
          });
          imagePromises.push(imgIteration);
        });
        const finishedProductImages = await Promise.all(imagePromises);
        resolve({
          ...p,
          node: {
            ...p.node,
            images: { ...p.node.images, edges: finishedProductImages },
          },
        });
      } catch (e) {
        console.log(e.message);
        resolve({ ...p });
      }
    });
    productPromises.push(iteration);
  });
  const finishedProducts = await Promise.all(productPromises);
  return finishedProducts;
}

export async function generateCollectionsPlaceholders(collections) {
  const collectionPromises = [];
  collections.map((c) => {
    const iteration = new Promise(async (resolve, reject) => {
      try {
        const blur = await generatePlaceholder(c.image.originalSrc);
        resolve({ ...c, image: { ...c.image, blur: blur } });
      } catch (e) {
        resolve({ ...c });
      }
    });
    collectionPromises.push(iteration);
  });
  const collectionsFinished = await Promise.all(collectionPromises);
  return collectionsFinished;
}
