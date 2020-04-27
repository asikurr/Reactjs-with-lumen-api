import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryBanner p-0">
                    <div className="summaryBannerOverlay">
                        <Container>
                            <Row className="text-center">
                                <Col lg={8} md={6} sm={12}>
                                    <Row>
                                        <Col className="summaryContent">
                                            <h1>
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4>Complete Projects</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col className="summaryContent">
                                            <h1>
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4>Total Clients</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card style={{ padding:'1rem', marginTop:'15%',borderRadius:'2px'}}>
                                        <Card.Body>
                                            <Card.Title  className="cardTitle text-justify">How i Work ?</Card.Title>
                                            <Card.Text>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="mr-1 cardSubTitleIcon" icon={faCheckCircle} spin/>Requirement Gathering</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="mr-1 cardSubTitleIcon" icon={faCheckCircle} pulse />System Analysis</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="mr-1 cardSubTitleIcon" icon={faCheckCircle} />Coding Testing</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="mr-1 cardSubTitleIcon" icon={faCheckCircle} />Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;