export default function Header() {
    return (
        <>
            {/* <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header> */}
            <div className="bg-primary text-white py-5">
                <div className="container py-5">
                    <h1>
                        Best products & <br />
                        brands in our store
                    </h1>
                    <p>
                        Trendy Products, Factory Prices, Excellent Service
                    </p>
                    <button type="button" className="btn btn-outline-light">
                        Learn more
                    </button>
                    <button type="button" className="btn btn-light shadow-0 text-primary pt-2 border border-white">
                        <span className="pt-1">Purchase now</span>
                    </button>
                </div>
            </div>
        </>
    )
}