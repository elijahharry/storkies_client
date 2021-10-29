export const fetchTags = (products) => {
  const tags = [];
  products.map((p) => {
    p.node.tags.map((t) => tags.push(t));
  });
  const unique = [...new Set(tags)];
  return unique;
};

export const findRelated = async (products, primary) => {
  const filtered = products.filter((p) => p.node.id !== primary.id);
  await shuffle(filtered);
  const recommendations = [];
  filtered.forEach((product) => {
    if (
      product.node.productType === primary.productType &&
      product.node.vendor === primary.vendor
    ) {
      recommendations.push(product);
      const index = filtered.indexOf(product);
      if (index > -1) {
        filtered.splice(index, 1);
      }
    }
  });
  if (recommendations.length < 4) {
    filtered.forEach((product) => {
      if (product.node.vendor === primary.vendor) {
        recommendations.push(product);
        const index = filtered.indexOf(product);
        if (index > -1) {
          filtered.splice(index, 1);
        }
      }
    });
  }
  if (recommendations.length < 4) {
    filtered.forEach((product) => {
      if (product.node.productType === primary.productType) {
        recommendations.push(product);
        const index = filtered.indexOf(product);
        if (index > -1) {
          filtered.splice(index, 1);
        }
      }
    });
  }
  if (recommendations.length < 4) {
    filtered.forEach((product) => {
      product.node.tags.map((t) => {
        let added = false;
        if (primary.tags.includes(t) && !added) {
          recommendations.push(product);
          added = true;
          const index = filtered.indexOf(product);
          if (index > -1) {
            filtered.splice(index, 1);
          }
        }
      });
    });
  }
  return recommendations.slice(0, 4);
};

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
