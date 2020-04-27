import React, {Component, Fragment} from 'react';
import TopNavbar from "../components/TopNavbar/TopNavbar";
import PageTopContent from "../components/PageTop/PageTopContent";
import Footer from "../components/Footer/Footer";
import Policy from "../components/Policy/Policy";

class PolicyPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar pTitle="Policy"/>
                <PageTopContent pageTitle="Privacy Policy"/>
                <Policy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PolicyPage;