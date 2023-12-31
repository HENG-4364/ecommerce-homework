import Layout from '@/components/Layout';
import RelatedProduct from '@/components/Related-Products';
import { Title } from '@/components/Title';
import ProductDetailScreen from '@/screen/ProductDetail';
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
      {/* <section className="py-5">
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
        </section> */}

      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                {/* <a
                    data-fslightbox="mygalley"
                    className="rounded-4"
                    target="_blank"
                    data-type="image"
                    href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
                  > */}
                <img
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100vh',
                    margin: 'auto',
                  }}
                  className="rounded-4 fit"
                  src={data?.product.image}
                />
                {/* </a> */}
              </div>
              <div className="d-flex justify-content-center mb-3">
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2 item-thumb"
                  target="_blank"
                  data-type="image"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp"
                >
                  <img
                    width="60"
                    height="60"
                    className="rounded-2"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp"
                    alt=""
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2 item-thumb"
                  target="_blank"
                  data-type="image"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp"
                >
                  <img
                    width="60"
                    height="60"
                    className="rounded-2"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp"
                    alt=""
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2 item-thumb"
                  target="_blank"
                  data-type="image"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp"
                >
                  <img
                    width="60"
                    height="60"
                    className="rounded-2"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp"
                    alt=""
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2 item-thumb"
                  target="_blank"
                  data-type="image"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp"
                >
                  <img
                    width="60"
                    height="60"
                    className="rounded-2"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp"
                    alt=""
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2 item-thumb"
                  target="_blank"
                  data-type="image"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
                >
                  <img
                    width="60"
                    height="60"
                    className="rounded-2"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
                    alt=""
                  />
                </a>
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  {data?.product.product_name}
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">4.5</span>
                  </div>
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1"></i>154
                    orders
                  </span>
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">$75.00</span>
                  <span className="text-muted">/per box</span>
                </div>

                <p>{data?.product.summary}</p>

                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">Regular</dd>

                  <dt className="col-3">Color</dt>
                  <dd className="col-9">Brown</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">Cotton, Jeans</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Reebook</dd>
                </div>

                <hr />

                <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: '35px' }}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>

                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div
                      className="input-group mb-3"
                      style={{ width: '170px' }}
                    >
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder="14"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#" className="btn btn-warning shadow-0">
                  {' '}
                  Buy now{' '}
                </a>
                <a href="#" className="btn btn-primary shadow-0">
                  {' '}
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart{' '}
                </a>
                <a
                  href="#"
                  className="btn btn-light border border-secondary py-2 icon-hover px-3"
                >
                  {' '}
                  <i className="me-1 fa fa-heart fa-lg"></i> Save{' '}
                </a>
              </div>
            </main>
          </div>
        </div>
      </section>
      <ProductDetailScreen />
      <RelatedProduct category_id={data.product.category.id} />
    </>
  );
}
