export async function getItems() {
  const request = await fetch("http://localhost:3000/api/items");
  const items = await request.json();
  return items;
}

export async function getLatestItems() {
  const items = await getItems();
  return items.slice(0, 3);
}

export async function getItemsByCat( category ) {
  const items = await getItems();
  const itemsCat = items.filter((element) => element.category === category);
  return itemsCat;
}

export async function getCategories() {
  const categories = ["forBoys", "forGirls", "forBabies", "forHome"];
  return categories;
}
