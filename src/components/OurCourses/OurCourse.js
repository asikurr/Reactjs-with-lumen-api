import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import business from '../../asset/images/business.jpg'

class OurCourse extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceTitle">Our Courses</h1>
                    <Row>
                        <Col style={{marginBottom:20}} lg={6} md={12} sm={12}>
                            <Row>
                                <Col  lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={business}/>
                                </Col>
                                <Col  lg={6} md={6} sm={12} className="p-2">
                                    <div className="courseDesc">
                                        <h1>Web Development</h1>
                                        <p>I build native and cross platfrom mobile app for your business app for your business</p>
                                        <a href="#">Details</a>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col  lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={business}/>
                                </Col>
                                <Col  lg={6} md={6} sm={12} className="p-2">
                                    <div className="courseDesc">
                                        <h1>Web Development</h1>
                                        <p>I build native and cross platfrom mobile app for your business app for your business</p>
                                        <a href="#">Details</a>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col  lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={business}/>
                                </Col>
                                <Col  lg={6} md={6} sm={12} className="p-2">
                                    <div className="courseDesc">
                                        <h1>Web Development</h1>
                                        <p>I build native and cross platfrom mobile app for your business app for your business</p>
                                        <a href="#">Details</a>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col  lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={business}/>
                                </Col>
                                <Col  lg={6} md={6} sm={12} className="p-2">
                                    <div className="courseDesc">
                                        <h1>Web Development</h1>
                                        <p>I build native and cross platfrom mobile app for your business app for your business</p>
                                        <a href="#">Details</a>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default OurCourse;