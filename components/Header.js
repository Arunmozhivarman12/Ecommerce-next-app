"use client"

import Image from "next/image";
import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import logo from "public/img/logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const Header = () => {
    const cart = useSelector(state => state.cart.product)

    const path = usePathname();
    return (
        <div>
            <Container fluid className="bg-black1   pu-1 pd-1">
                <Container className="d-flex justify-content-between">
                    <ul className="text-white contact fw-3 fse-7">
                        <li className="d-inline me-3"><i className="fa-solid fa-phone"></i>+021-95-51-84</li>
                        <li className="d-inline me-3"><i className="fa-regular fa-envelope"></i>email@email.com</li>
                        <li className="d-inline me-3"><i className="fa-solid fa-location-dot"></i>1734 Stonecoal Road</li>
                    </ul>
                    <ul className="text-white contact fw-3 fse-7">
                        <li className="d-inline me-3"><i className="fa-regular fa-dollar-sign "></i>USD</li>
                        <li className="d-inline me-3"><i className="fa-regular fa-user"></i>My Account</li>
                    </ul>
                </Container>
            </Container>

            <Container fluid className="bg-black2 pt-3 pb-3 bb-red-3">
                <Container className="d-flex justify-content-between align-items-center">
                    <Image src={logo} priority alt="Electro"></Image>
                    <form className="searchbox d-flex align-items-center fse-6">
                        <select className="p-2 ps-3 pe-3 text-dark">
                        <option className="">All Categories</option>
                            <option>category 1</option>
                            <option>category 2</option>
                        </select>
                        <input type="text" placeholder="Search here" className="p-2"/>
                        <Button className="btn-header pt-2 pb-2 pe-4 ps-4">Search</Button>
                    </form>
                    <div className="d-flex store">
                        <div className="text-center pe-5">
                        <i className="fa-regular fa-heart "></i>
                        <sup className="bg-red text-white rounded-circle">2</sup>
                        <p className="text-white fse-7 fw-3 mb-0">Your Wishlist</p>
                        </div>
                        <div className="text-center">
                        <Link href="/cart"><i className="fa-solid fa-cart-shopping"></i>
                        <sup className="bg-red text-white rounded-circle">{cart.length}</sup>
                        <p className="text-white fse-7 fw-3 mb-0">Your cart</p></Link>
                        </div>
                    </div>
                </Container>
            </Container>

            <Navbar expand="lg" className=" bb-border-2">
      <Container className="pu-1 pd-1">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" className={`me-4 text-black1 fse-6 fw-3 ${path === '/'? 'active' : '' }`}>Home</Link>
            <Link href="/hot-deals" className="me-4 text-black1 fse-6 fw-3">Hot Deals</Link>
            <Link href="/categories" className="me-4 text-black1 fse-6 fw-3">Categories</Link>
            <Link href="/laptops" className="me-4 text-black1 fse-6 fw-3">Laptops</Link>
            <Link href="/smartphones" className="me-4 text-black1 fse-6 fw-3">Smartphones</Link>
            <Link href="/camers" className="me-4 text-black1 fse-6 fw-3">Cameras</Link>
            <Link href="/Accessories" className="me-4 text-black1 fse-6 fw-3">Accessories</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
    )
}

export default Header;