import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import ShoppingCart from "../components/shoppingCart";
import Product from "../components/product.js";
import style from "../styles/Home.module.css";
import {
  getLatestItems,
  getCategories,
  getItemsByCat,
} from "../services/storeService";
import styleProduct from "../styles/product.module.css";

export default function Home({ items, itemsForBoys, itemsForGirls }) {
  return (
    <div>
      <Layout>
        <div className={style.banner}>
          <div className={style.bannerBackground}>
            <div className={style.bannerInfo}>
              <Image priority src="/img/logo.png" height={144} width={300} />
              <p>
                Level up your comfort this season with our new Winter Collection
                — all new joggers, beanies, drinkware, and for the first time
                ever, Octocookie cutters!
              </p>
            </div>
          </div>
        </div>

        <h2 className={style.cats}>Categories</h2>
        <div className={style.cats}>
          <a className={style.catsItems} href="/category?category=forBoys">
            <Image priority src="/img/boy.png" height={144} width={144} />
          </a>
          <a className={style.catsItems} href="/category?category=forGirls">
            <Image priority src="/img/girl.png" height={144} width={144} />
          </a>
          <a className={style.catsItems} href="/category?category=forBabies">
            <Image priority src="/img/baby.png" height={144} width={144} />
          </a>
          <a className={style.catsItems} href="/category?category=forHome">
            <Image priority src="/img/toys.png" height={144} width={144} />
          </a>
        </div>

        <h3>Latest Items</h3>
        <div className={styleProduct.items}>
          {items &&
            items.map((item) => (
              <Product key={item.sku} item={item} showAs="item" />
            ))}
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const items = await getLatestItems();
  const itemsForGirls = await getItemsByCat("forGirls");
  const itemsForBoys = await getItemsByCat("forBoys");
  const categories = await getCategories();
  return {
    props: {
      items: items,
      itemsForGirls,
      itemsForBoys,
      categories,
    },
  };
}
