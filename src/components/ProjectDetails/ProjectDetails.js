import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import js from "../../asset/images/js.png";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src={js} alt=""/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h3 className="projectDetailsTitle">JavaScript</h3>
                            <p className="projectCardDes">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                            <ul>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Admin Can Add, Edit, Delete Product Dynamically</li>
                                <li>Admin can send free message in app inbox</li>
                                <li>User can see order history and invoice also</li>
                                <li>Dynamic Product Slider</li>
                            </ul>
                            <Button variant="primary">Live Preview</Button>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;