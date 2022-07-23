 import { getItems } from "../services/storeService";

export async function getPathsFromTitle() {
  const items = await getItems();

  return items.map((item) => {
    return {
      params: {
        sku: convertToPath(item.title),
      },
    };
  });
}

export async function getItemData(sku) {
  const items = await getItems();
  const product = items.find((item) => convertToPath(item.title) === sku);
  return {
    sku,
    data: product,
  };
}

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}
