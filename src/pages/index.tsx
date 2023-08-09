import Navbar from '@/components/Navbar';
import Products from './products';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Products />
      </Layout>
    </>
  );
}
