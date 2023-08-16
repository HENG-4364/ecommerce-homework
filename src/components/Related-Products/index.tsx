import React from 'react';

export default function RelatedProduct() {
  return (
    <>
      {/* <section classNameName="py-5 bg-light">
        <div classNameName="container px-4 px-lg-5 mt-5">
          <h2 classNameName="fw-bolder mb-4">Related products</h2>
          <div classNameName="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div classNameName="col mb-5">
              <div classNameName="card h-100">
                <img
                  classNameName="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div classNameName="card-body p-4">
                  <div classNameName="text-center">
                    <h5 classNameName="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>

                <div classNameName="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div classNameName="text-center">
                    <a classNameName="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div classNameName="col mb-5">
              <div classNameName="card h-100">
                <div
                  classNameName="badge bg-dark text-white position-absolute"
                  style={{ top: '0.5rem', right: ' 0.5rem' }}
                >
                  Sale
                </div>

                <img
                  classNameName="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div classNameName="card-body p-4">
                  <div classNameName="text-center">
                    <h5 classNameName="fw-bolder">Special Item</h5>
                    <div classNameName="d-flex justify-content-center small text-warning mb-2">
                      <div classNameName="bi-star-fill"></div>
                      <div classNameName="bi-star-fill"></div>
                      <div classNameName="bi-star-fill"></div>
                      <div classNameName="bi-star-fill"></div>
                      <div classNameName="bi-star-fill"></div>
                    </div>
                    <span classNameName="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                <div classNameName="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div classNameName="text-center">
                    <a classNameName="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div classNameName="col mb-5">
              <div classNameName="card h-100">
                <div
                  classNameName="badge bg-dark text-white position-absolute"
                  style={{ top: '0.5rem', right: ' 0.5rem' }}
                >
                  Sale
                </div>

                <img
                  classNameName="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div classNameName="card-body p-4">
                  <div classNameName="text-center">
                    <h5 classNameName="fw-bolder">Sale Item</h5>
                    <span classNameName="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>

                <div classNameName="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div classNameName="text-center">
                    <a classNameName="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div classNameName="col mb-5">
              <div classNameName="card h-100">
                <img
                  classNameName="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div classNameName="card-body p-4">
                  <div classNameName="text-center">
                    <h5 classNameName="fw-bolder">Popular Item</h5>
                    <div classNameName="d-flex justify-content-center small text-warning mb-2">
                      <div classNameName="bi-star-fill"></div>
                      <div classNameName="bi-star-fill"></div>
                      <div classNameName="bi-star-fill"></div>
                      <div classNameName="bi-star-fill"></div>
                      <div classNameName="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>

                <div classNameName="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div classNameName="text-center">
                    <a classNameName="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>New products</h3>
          </header>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: '1rem', right: '1rem ' }}
                >
                  In Stock
                </div>
                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp" className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">GoPro HERO6 4K Action Camera - Black</h5>
                  <p className="card-text">$790.50</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
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
               Out Stock
              </div>
                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/2.webp" className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Canon camera 20x zoom, Black color EOS 2000</h5>
                  <p className="card-text">$320.00</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/3.webp" className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Xiaomi Redmi 8 Original Global Version 4GB</h5>
                  <p className="card-text">$120.00</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/4.webp" className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Apple iPhone 12 Pro 6.1" RAM 6GB 512GB Unlocked</h5>
                  <p className="card-text">$120.00</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
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
                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp" className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Apple Watch Series 1 Sport Case 38mm Black</h5>
                  <p className="card-text">$790.50</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.webp" className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">T-shirts with multiple colors, for men and lady</h5>
                  <p className="card-text">$120.00</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp" className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Gaming Headset 32db Blackbuilt in mic</h5>
                  <p className="card-text">$99.50</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" className="btn btn-light border icon-hover px-2 pt-2"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">T-shirts with multiple colors, for men and lady</h5>
                  <p className="card-text">$120.00</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
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
