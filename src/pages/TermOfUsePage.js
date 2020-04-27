import React, {Component, Fragment} from 'react';
import TopNavbar from "../components/TopNavbar/TopNavbar";
import PageTopContent from "../components/PageTop/PageTopContent";
import Footer from "../components/Footer/Footer";
import Term from "../components/TermsOfUse/Term";

class TermOfUsePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar pTitle="Term Of Use"/>
                <PageTopContent pageTitle="Term Of Use"/>
                <Term/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermOfUsePage;