import Layout from "../../components/layout";
import Product from "../../components/product.js";
import { getItems, getCategories } from "../../services/storeService";
import ShoppingCart from "../../components/shoppingCart";

import styleProduct from "../../styles/product.module.css";

export default function Index({ items }) {
  return (
    <Layout>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.sku} item={item} showAs="item" />
          ))}
      </div>
      <div>
       
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}
