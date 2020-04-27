import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faHome, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerStyle text-center">
                    <Row >
                        <Col lg={3} md={6} sm={12} className="text-justify p-4 ">
                            <h4>Follow Me</h4>
                            <a className="socialLink" href=""><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
                            <a className="socialLink" href=""><FontAwesomeIcon icon={faTwitter}/> Youtube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-4">
                            <h4>Address</h4>
                            <address className="inFoAddress mb-2"><FontAwesomeIcon icon={faHome}/> House No#6/A,Post Office Road,East Rampura,Rampura, Dhaka-1219</address>
                            <span className="inFoAddress"><FontAwesomeIcon icon={faEnvelope}/> asikur.cse@gmail.com</span><br/>
                            <span className="inFoAddress"><FontAwesomeIcon icon={faPhone}/> +8801823980517</span>

                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-4 inFo">
                            <h4>Information</h4>
                            <Link to="/about"> About Me</Link><br/>
                            <a href=""> My Resume</a><br/>
                            <Link to="/contact"> Contact Me</Link>

                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-4 inFo">
                            <h4>Legal</h4>
                           <Link to="/refundPolicy"> Refund Policy</Link><br/>
                           <Link to="/termOfUse"> Terms And Condition</Link><br/>
                            <Link to="/policy"> Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>

                {/*CopyRight Section*/}

                <Container fluid={true} className="p-0">
                    <div className="copyRight">
                        <p>All Right Reserved @2020</p>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;