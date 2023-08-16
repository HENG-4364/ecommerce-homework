import Products from './products';
import Layout from '@/components/Layout';
import FeatureProducts from '@/components/BlogProducts';
import Header from '@/components/Header';
import Content from '@/components/Contents';
import RelatedProduct from '@/components/Related-Products';
import BlogProducts from '@/components/BlogProducts';

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <RelatedProduct />
        <Products />
        <Content />
        <BlogProducts />
      </Layout>
    </>
  );
}
