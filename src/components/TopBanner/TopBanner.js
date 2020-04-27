import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="bannerContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="bannerTitle">SOFTWARE ENGINEER</h1>
                                    <h4 className="bannerSubTitle">WEB DEVELOPER</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;