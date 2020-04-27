import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Term extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <ul>
                                <li>BY ACCESSING OR USING THIS SITE YOU REPRESENT THAT YOU HAVE THE FULL AUTHORITY TO ACT TO BIND YOURSELF, ANY THIRD PARTY, COMPANY, OR LEGAL ENTITY, AND THAT YOUR USE AND/OR INTERACTION, AS WELL AS CONTINUING TO USE OR INTERACT, WITH THE SITE CONSTITUTES YOUR HAVING READ AND AGREED TO THESE TERMS OF USE AS WELL AS OTHER AGREEMENTS THAT WE MAY POST ON THE SITE.</li>
                                <li>BY VIEWING, VISITING, USING, OR INTERACTING WITH THIS SITE OR WITH ANY BANNER, POP-UP, OR ADVERTISING THAT APPEARS ON IT, YOU ARE AGREEING TO ALL THE PROVISIONS OF THIS TERMS OF USE POLICY AND THE PRIVACY POLICY OF this site.</li>
                                <li>THIS SITE SPECIFICALLY DENIES ACCESS TO ANY INDIVIDUAL THAT IS COVERED BY THE CHILDREN'S ONLINE PRIVACY PROTECTION ACT (COPPA) OF 1998.</li>
                                <li>THIS SITE RESERVES THE RIGHT TO DENY ACCESS TO ANY PERSON OR VIEWER FOR ANY LAWFUL REASON. UNDER THE TERMS OF THE PRIVACY POLICY, WHICH YOU ACCEPT AS A CONDITION FOR VIEWING, THIS SITE IS ALLOWED TO COLLECT AND STORE DATA AND INFORMATION FOR THE PURPOSE OF EXCLUSION AND FOR MANY OTHER USES.</li>
                            </ul>
                            <h3 className="aboutTitle">PARTIES TO THE TERMS OF USE AGREEMENT</h3>
                            <ul>
                                <li>Visitors, viewers, users, subscribers, members, affiliates, or customers, collectively referred to herein as “Visitors,” are parties to this agreement. The website and its owners and/or operators are parties to this agreement, herein referred to as “Website.”</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Term;