import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Technology extends Component {
    constructor() {
        super();
        this.state ={
            data : [
                {Language:'JavaScript' , Progress: 60},
                {Language:'React Js' , Progress: 50},
                {Language:'Node Js' , Progress: 20},
                {Language:'PHP' , Progress: 80},
                {Language:'ASP .Net' , Progress: 60},
                {Language:'Python' , Progress: 60},
                {Language:'MongoDB' , Progress: 70},

            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Container className="text-center mb-5">
                    <h1 className="serviceTitle">Technology Used</h1>
                    <Row>
                        <Col style={{width:"100%", height:"300px"}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Language" />
                                    <Tooltip/>
                                    <Bar dataKey="Progress" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="technoDe text-justify">To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.</p>
                            <p className="technoDe text-justify">I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.</p>
                            <p className="technoDe text-justify">Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Technology;