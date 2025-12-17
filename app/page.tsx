import ProductList from "./product-layout";
export const dynamic = "force-dynamic";

async function getProducts() {
  const res = await fetch(`https://normal-nextjs.vercel.app/api/products`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const { products } = await getProducts();
  return <ProductList products={products} />;
}
