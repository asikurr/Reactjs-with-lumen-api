import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import review from '../../asset/images/review.jpg'

class Review extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows:true,
            autoplaySpeed:3000,
            autoplay:true,
            vertical:true,
            verticalSwiping: true,
            pauseOnHover:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceTitle">CLIENT SAYS</h1>

                    <Slider {...settings} >
                        <div className="review">
                            <Row className="justify-content-around">
                                <Col lg={6} md={6} sm={12}>
                                    <img src={review} alt=""/>
                                    <h4>Web Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a
                                        galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div className="review">
                            <Row className="justify-content-around">
                                <Col  lg={6} md={6} sm={12} >
                                    <img src={review} alt=""/>
                                    <h4>Web Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a
                                        galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div className="review">
                            <Row className="justify-content-around">
                                <Col  lg={6} md={6} sm={12} >
                                    <img src={review} alt=""/>
                                    <h4>Web Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a
                                        galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div className="review">
                            <Row className="justify-content-around">
                                <Col  lg={6} md={6} sm={12} >
                                    <img src={review} alt=""/>
                                    <h4>Web Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a
                                        galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>

                </Container>
                
            </Fragment>
        );
    }
}

export default Review;