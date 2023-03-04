import Banner from '@/component/Banner';
import ProductFeed from '@/component/ProductFeed';

export default async function Home() {
  const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Banner />
      <ProductFeed products={products} />
    </div>
  );
}
