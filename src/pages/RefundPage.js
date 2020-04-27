import React, {Component, Fragment} from 'react';
import TopNavbar from "../components/TopNavbar/TopNavbar";
import PageTopContent from "../components/PageTop/PageTopContent";
import Footer from "../components/Footer/Footer";
import Refund from "../components/RefundPolicy/Refund"

class RefundPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar pTitle="Refund"/>
                <PageTopContent pageTitle="Refund Policy"/>
                <Refund/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;