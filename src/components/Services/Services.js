import React, {Component, Fragment} from 'react';
import {Container, Col, Row} from "react-bootstrap";
import graphicsLogo from '../../asset/images/graphics.svg'
import mobileLogo from '../../asset/images/mobile.svg'
import webLogo from '../../asset/images/web.svg'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceTitle">My Services</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={webLogo}/>
                                <h2>Web Development</h2>
                                <p>I design and develop static and dynamic web sites as
                                    per your requirements as we believe, “web is world’s next home”.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={mobileLogo}/>
                                <h2>JS Development</h2>
                                <p>I design and develop static and dynamic web sites as
                                    per your requirements as we believe, “web is world’s next home”.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={graphicsLogo}/>
                                <h2>Node Developer</h2>
                                <p>I design and develop static and dynamic web sites as
                                    per your requirements as we believe, “web is world’s next home”.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;