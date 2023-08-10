import Products from './products';
import Layout from '@/components/Layout';
import FeatureProducts from '@/components/FeatureProducts';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Layout>
        <Header/>
        <Products />
        <FeatureProducts />
      </Layout>
    </>
  );
}
