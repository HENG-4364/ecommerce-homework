import Layout from '@/components/Layout';
import RelatedProduct from '@/components/Related-Products';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
const PRODUCT_DETAIL = gql`
  query productDetail($id: Int!) {
    product(id: $id) {
      id
      product_name
      summary
      description
      image
      category {
        id
        category_name
      }
    }
  }
`;
export default function ProductDetail() {
  const router = useRouter();
  const { data, loading } = useQuery(PRODUCT_DETAIL, {
    variables: {
      id: Number(router.query.id),
    },
  });
  if (loading || !data) return <>Loading...</>;

  return (
    <>
      <Layout>
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img
                  className="card-img-top mb-5 mb-md-0"
                  src={data?.product.image}
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="small mb-1">{data?.product.product_name}</div>
                <h1 className="display-5 fw-bolder">{data?.product.summary}</h1>
                <div className="fs-5 mb-5">
                  <span className="text-decoration-line-through">$45.00</span>
                  <span>$40.00</span>
                </div>
                <p className="lead">{data?.product.summary}</p>
                <div className="d-flex">
                  <input
                    className="form-control text-center me-3"
                    id="inputQuantity"
                    type="num"
                    value="1"
                    style={{ maxWidth: '3rem' }}
                  />
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <RelatedProduct />
      </Layout>
    </>
  );
}
