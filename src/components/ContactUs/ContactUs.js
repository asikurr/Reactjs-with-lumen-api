import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactUs extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} >
                            <h2 className="aboutTitle">Quick Connect</h2>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label className="formLabel">Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="formLabel">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="formLabel">Your Message</Form.Label>
                                    <Form.Control as="textarea" rows="4" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>

                        <Col lg={6} md={6} sm={12} >
                            <h2 className="aboutTitle">Discuss Now</h2>
                            <address className="inFoAddress mb-1"><FontAwesomeIcon icon={faHome}/> House No#6/A,Post Office Road,East Rampura,Rampura, Dhaka-1219</address>
                            <span className="inFoAddress"><FontAwesomeIcon icon={faEnvelope}/> asikur.cse@gmail.com</span><br/>
                            <span className="inFoAddress"><FontAwesomeIcon icon={faPhone}/> +8801823980517</span>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactUs;