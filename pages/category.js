import Layout from "../components/layout";
import Product from "../components/product.js";
import {
  getItemsByCat,
  getCategories,
} from "../services/storeService";
import ShoppingCart from "../components/shoppingCart";

import styleProduct from "../styles/product.module.css";

export default function Index({ items2, category }) {
  return (
    <Layout>
      <h2>{category}</h2>
      <div className={styleProduct.items}>
        {items2 &&
          items2.map((item) => (
            <Product key={item.sku} item={item} showAs="item" />
          ))}
      </div>
      <div></div>
    </Layout>
  );
}

export async function getServerSideProps( context ) {
    var category = context.query["category"];
    const items2 = await getItemsByCat(category);
    return {
      props: {
        items2,
        category: category
      },
    };
}
