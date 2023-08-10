import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import style from "./card.module.scss"
const QUERY_PRODUCTS = gql`
  query products {
    products {
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
export default function CardProducts() {
  const { data, loading } = useQuery(QUERY_PRODUCTS);
  if (loading || !data) return <>Loading...</>;

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-4 row-cols-xl-5 justify-content-center">
            {data.products.map((product: any) => {
              return (
                <>
                  <div className={`col mb-5 `}>
                    <div className={`card h-100 ${style.card}`}>
                      <div style={{ height: '250px' }}>
                        <div
                          className="badge bg-dark text-white position-absolute"
                          style={{ top: '0.5rem', right: '0.5rem ' }}
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
                          <h5 className="fw-bolder">{product.product_name}</h5>
                        </div>
                        <div className="text-center">
                          <h5 className="">{product.summary}</h5>
                        </div>
                      </div>

                      <div className="card-footer pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <Link
                            className="btn btn-outline-dark mt-auto"
                            href={`products/` + product.id}
                          >
                            View options
                          </Link>
                        </div>
                      </div>
                    </div>
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
