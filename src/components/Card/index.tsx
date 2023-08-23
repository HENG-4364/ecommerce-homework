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
                          <p className="card-text fw-bold fs-4">$ {product.price}</p>
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
          </div>
        </div>
      </section>
    </>
  );
}
