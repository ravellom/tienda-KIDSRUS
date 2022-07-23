import Layout from "../../components/layout";
import Product from "../../components/product.js";
import ShoppingCart from "../../components/shoppingCart";
import { getItemData, getPathsFromTitle } from "../../lib/items";

export default function ProductPage({ productInfo }) {
  return (
    <Layout title={productInfo.data.title}>
      <Product item={productInfo.data} showAs="Page" />
      <ShoppingCart />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromTitle();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sku = params.sku;
  const productInfo = await getItemData(sku);

  return {
    props: {
      productInfo,
    },
  };
}
