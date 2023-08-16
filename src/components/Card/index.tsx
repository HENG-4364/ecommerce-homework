import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import style from './card.module.scss';
const QUERY_PRODUCTS = gql`
  query products($category_id: Int) {
    products(category_id: $category_id) {
      id
      product_name
      summary
      description
      image
      price
      category {
        id
        category_name
      }
    }
  }
`;
export default function CardProducts(props: any) {
  const { data, loading } = useQuery(QUERY_PRODUCTS, {
    variables: {
      category_id: props.category_id,
    },
  });
  if (loading || !data) return <>Loading...</>;

  return (
    <>
      {/* <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-4 row-cols-xl-5 justify-content-center">
            {data.products.map((product: any) => {
              return (
                <>
                  <div className={`col mb-5  `}>
                    <Link
                      className={`mt-auto text-decoration-none `}
                      href={`products/` + product.id}
                    >
                      <div className={`card h-100 ${style.card}`}>
                        <div style={{ height: '250px' }}>
                          <div
                            className="badge bg-dark text-white position-absolute"
                            style={{ top: '1rem', right: '1rem ' }}
                          >
                            Sale
                          </div>
                          <img
                            className="card-img-top p-3"
                            src={product.image}
                            alt="..."
                            style={{ height: '100%' }}
                          />
                        </div>
                        <div className="card-body">
                          <div className="text-center">
                            <h5 className="fw-bolder">
                              {product.product_name}
                            </h5>
                          </div>
                          <div className="text-center">
                            <h5 className="">{product.summary}</h5>
                          </div>
                        </div>

                        <div className="card-footer py-2 bg-transparent">
                          <div className="text-center fw-bold">{product.price}៛</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section> */}
      <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>New products</h3>
          </header>

          <div className="row ">
            {data.products.map((product: any) => {
              return (
                <>
                  <div className="col-lg-3 col-md-4 col-sm-6 ">
                    <Link
                      className={`mt-auto text-decoration-none `}
                      href={`/products/` + product.id}
                    >
                      <div
                        className={`card w-100 my-2 shadow-2-strong ${style.card}`}
                      >
                        <div
                          className="badge bg-dark text-white position-absolute"
                          style={{ top: '1rem', right: '1rem ' }}
                        >
                          In Stock
                        </div>
                        <img src={product.image} className="card-img-top" />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">{product.product_name}</h5>
                          <p className="card-text">$790.50</p>
                          <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                            <a
                              href="#!"
                              className="btn btn-primary shadow-0 me-1"
                            >
                              Add to cart
                            </a>
                            <a
                              href="#!"
                              className="btn btn-light border px-2 pt-2 icon-hover"
                            >
                              <i className="fas fa-heart fa-lg text-secondary px-1"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}

            {/* <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: '1rem', right: '1rem ' }}
                >
                  Out Stock
                </div>
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/2.webp"
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    Canon camera 20x zoom, Black color EOS 2000
                  </h5>
                  <p className="card-text">$320.00</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">
                      Add to cart
                    </a>
                    <a
                      href="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg text-secondary px-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/3.webp"
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    Xiaomi Redmi 8 Original Global Version 4GB
                  </h5>
                  <p className="card-text">$120.00</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">
                      Add to cart
                    </a>
                    <a
                      href="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg text-secondary px-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/4.webp"
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    Apple iPhone 12 Pro 6.1" RAM 6GB 512GB Unlocked
                  </h5>
                  <p className="card-text">$120.00</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">
                      Add to cart
                    </a>
                    <a
                      href="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg text-secondary px-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: '1rem', right: '1rem ' }}
                >
                  Sale
                </div>
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp"
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    Apple Watch Series 1 Sport Case 38mm Black
                  </h5>
                  <p className="card-text">$790.50</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">
                      Add to cart
                    </a>
                    <a
                      href="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg text-secondary px-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.webp"
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    T-shirts with multiple colors, for men and lady
                  </h5>
                  <p className="card-text">$120.00</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">
                      Add to cart
                    </a>
                    <a
                      href="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg text-secondary px-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp"
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    Gaming Headset 32db Blackbuilt in mic
                  </h5>
                  <p className="card-text">$99.50</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">
                      Add to cart
                    </a>
                    <a
                      href="#!"
                      className="btn btn-light border icon-hover px-2 pt-2"
                    >
                      <i className="fas fa-heart fa-lg text-secondary px-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp"
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    T-shirts with multiple colors, for men and lady
                  </h5>
                  <p className="card-text">$120.00</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">
                      Add to cart
                    </a>
                    <a
                      href="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg text-secondary px-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
