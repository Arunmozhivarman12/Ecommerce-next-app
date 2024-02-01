'use client'

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import shop1 from "../public/img/shop01.png"
import shop2 from "../public/img/shop02.png"
import shop3 from "../public/img/shop03.png"
 import { Add_to_cart } from "@/redux/cartreducer";
import { useDispatch, useSelector } from "react-redux";




const Home = () => {

    const dispatch = useDispatch();
    const Products = useSelector(state => state.Pro);
    const Laptops = Products.filter( item => item.Category === "Laptops" );

    return (

        <div>
            <Container className="mt-4">
                <Row>
                    <Col lg="4" className="p-3 ">
                        <div className="bg-border shop-now">
                            <Image src={shop1} width={340} alt={"laptops"} className="d-block m-auto"></Image>
                            <div className="shop-body p-4">
                                <h4 className="text-white fw-5">Laptop<br /> Collection</h4>
                                <a href="#" className="text-white fse-6 fw-3">SHOP NOW <i className="fa-regular fa-circle-right text-light"></i></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" className="p-3 ">
                        <div className="bg-border shop-now">
                            <Image src={shop3} width={340} alt={"headphone"} className="d-block m-auto"></Image>
                            <div className="shop-body p-4">
                                <h4 className="text-white fw-5">Accessories<br /> Collection</h4>
                                <a href="#" className="text-white fse-6 fw-3">SHOP NOW <i className="fa-regular fa-circle-right text-light"></i></a>
                            </div>
                        </div>                    </Col>
                    <Col lg="4" className="p-3 ">
                        <div className="bg-border shop-now">
                            <Image src={shop2} width={340} alt={"camera"} className="d-block m-auto"></Image>
                            <div className="shop-body p-4">
                                <h4 className="text-white fw-5">Camera<br /> Collection</h4>
                                <a href="#" className="text-white fse-6 fw-3">SHOP NOW <i className="fa-regular fa-circle-right text-light"></i></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>

                <Container>
                    <Row>
                    {
                        Laptops.map(product => (
                            <Col key={product.id} lg={3} className="ps-3 pe-3  product-col">
                                <div className="border-border text-center product-grid">
                                    <Image src={ product.image} alt="products" width="265" height="265"/>
                                    <h6 className="text-secondary fw-2 fse-6">{product.Category}</h6>
                                    <h6 className="fw-4 ">{product.name}</h6>
                                <h5 className="text-red fse-5 fw-5 md-2">&#8377;{product.Price}</h5>
                                <div className="bt-border pu-2 pd-2 product-grid-details">
                                <i className="fa-regular fa-heart me-4"></i>
                                <i className="fas fa-exchange-alt"></i>
                                <i className="fa-solid fa-eye "></i>
                                </div>
                                </div>
                                <div className="bg-dark text-center py-2 w-97 d-block m-auto cart-btn">
                                    <button onClick={() =>dispatch(Add_to_cart(product)) } className="bg-red border-transparent text-white fw-5 px-4 py-2 fse-6 br-20">ADD TO CART</button>
                                </div>
                            </Col>
                            
                        ))
                    }
</Row>
                </Container>
            </Container>
        </div>

    )
}

export default Home;