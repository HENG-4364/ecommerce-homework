import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
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

export default function ProductDetailScreen() {
  const [ishow, SetIshow] = useState(true);
  const handleClick = () => {
    SetIshow(!ishow);
    const router = useRouter();
    const { data, loading } = useQuery(PRODUCT_DETAIL, {
      variables: {
        id: Number(router.query.id),
      },
    });
    if (loading || !data) return <>Loading...</>;
  
  };
  return (
    <>
      <section className="bg-light border-top py-4">
        <div className="container">
          <div className="row gx-4">
            <div className="col-lg-8 mb-4">
              <div className="border rounded-2 px-3 py-2 bg-white">
                <div
                  className="tab-pane fade show active"
                  id="ex1-pills-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <p>
                    With supporting text below as a natural lead-in to
                    additional content. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="row mb-2">
                    <div className="col-12 col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <i className="fas fa-check text-success me-2"></i>
                          Some great feature name here
                        </li>
                        <li>
                          <i className="fas fa-check text-success me-2"></i>
                          Lorem ipsum dolor sit amet, consectetur
                        </li>
                        <li>
                          <i className="fas fa-check text-success me-2"></i>
                          Duis aute irure dolor in reprehenderit
                        </li>
                        <li>
                          <i className="fas fa-check text-success me-2"></i>
                          Optical heart sensor
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-6 mb-0">
                      <ul className="list-unstyled">
                        <li>
                          <i className="fas fa-check text-success me-2"></i>
                          Easy fast and ver good
                        </li>
                        <li>
                          <i className="fas fa-check text-success me-2"></i>
                          Some great feature name here
                        </li>
                        <li>
                          <i className="fas fa-check text-success me-2"></i>
                          Modern style and design
                        </li>
                      </ul>
                    </div>
                  </div>
                  <table className="table border mt-3 mb-2">
                    <tr>
                      <th className="py-2">Display:</th>
                      <td className="py-2">
                        13.3-inch LED-backlit display with IPS
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2">Processor capacity:</th>
                      <td className="py-2">2.3GHz dual-core Intel Core i5</td>
                    </tr>
                    <tr>
                      <th className="py-2">Camera quality:</th>
                      <td className="py-2">720p FaceTime HD camera</td>
                    </tr>
                    <tr>
                      <th className="py-2">Memory</th>
                      <td className="py-2">8 GB RAM or 16 GB RAM</td>
                    </tr>
                    <tr>
                      <th className="py-2">Graphics</th>
                      <td className="py-2">Intel Iris Plus Graphics 640</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="px-0 border rounded-2 shadow-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Similar items</h5>
                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp"
                          style={{ minWidth: '96px', height: '96px' }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          Rucksack Backpack Large <br />
                          Line Mounts
                        </a>
                        <strong className="text-dark"> $38.90</strong>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"
                          style={{ minWidth: '96px', height: '96px' }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          Summer New Men's Denim <br />
                          Jeans Shorts
                        </a>
                        <strong className="text-dark"> $29.50</strong>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                          style={{ minWidth: '96px', height: '96px' }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          {' '}
                          T-shirts with multiple colors, for men and lady{' '}
                        </a>
                        <strong className="text-dark"> $120.00</strong>
                      </div>
                    </div>

                    <div className="d-flex">
                      <a href="#" className="me-3">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                          style={{ minWidth: '96px', height: '96px' }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          {' '}
                          Blazer Suit Dress Jacket for Men, Blue color{' '}
                        </a>
                        <strong className="text-dark"> $339.90</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
