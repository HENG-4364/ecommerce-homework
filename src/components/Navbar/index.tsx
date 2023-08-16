import { useState } from "react"

export default function Navbar() {
    const [isShow,setIshow]=useState(false)
    const handleClick=()=>{
        setIshow(!isShow);
    }
    return (
        <>
            <div className="p-3 text-center bg-white border-bottom">
                <div className="container">
                    <div className="row gy-3">

                        <div className="col-lg-2 col-sm-4 col-4">
                            <a href="https://mdbootstrap.com/" target="_blank" className="float-start">
                                <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" />
                            </a>
                        </div>

                        <div className="order-lg-last col-lg-5 col-sm-8 col-8">
                            <div className="d-flex float-end">
                                <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-user-alt m-1 me-md-2"></i><p className="d-none d-md-block mb-0">Sign in</p> </a>
                                <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-heart m-1 me-md-2"></i><p className="d-none d-md-block mb-0">Wishlist</p> </a>
                                <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-shopping-cart m-1 me-md-2"></i><p className="d-none d-md-block mb-0">My cart</p> </a>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="input-group float-center">
                                <div className="form-outline">
                                    <input type="search" id="form1"  placeholder="Search" className="form-control" />                     
                                </div>
                                <button type="button" className="btn btn-primary shadow-0">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container justify-content-center justify-content-md-between">
                    <button
                        className="navbar-toggler border py-2 text-dark "
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarLeftAlignExample"
                        aria-controls="navbarLeftAlignExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={handleClick}
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className={`navbar-collapse collapse ${isShow? "show":""}`} id="navbarLeftAlignExample">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-dark" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Hot offers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Gift boxes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Menu item</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Menu name</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    Others
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}