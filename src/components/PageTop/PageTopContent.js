import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class PageTopContent extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="pageTopFixBanner p-0">
                    <div className="pageTopBannerOverlay">
                        <Container className="pageTopBannerContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="pageTopBannerTitle">{this.props.pageTitle}</h1>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTopContent;