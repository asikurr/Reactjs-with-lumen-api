import React, {Component, Fragment} from 'react';
import TopNavbar from "../components/TopNavbar/TopNavbar";
import PageTopContent from "../components/PageTop/PageTopContent";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";

class AboutUsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar pTitle="About"/>
                <PageTopContent pageTitle="About Page"/>
                <AboutUs/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutUsPage;