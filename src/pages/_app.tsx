import '@/styles/globals.css';
import AppProps from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/libs/apollo';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: any) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
