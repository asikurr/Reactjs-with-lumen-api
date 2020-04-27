import React, {Component, Fragment} from 'react';
import TopNavbar from "../components/TopNavbar/TopNavbar";
import PageTopContent from "../components/PageTop/PageTopContent";
import Services from "../components/Services/Services";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar pTitle="Service"/>
                <PageTopContent pageTitle="Our Services"/>
                <Services/>
                <ContactUs/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicesPage;