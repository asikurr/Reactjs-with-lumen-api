import React, {Component, Fragment} from 'react';
import TopNavbar from "../components/TopNavbar/TopNavbar";
import PageTopContent from "../components/PageTop/PageTopContent";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

class ContactUsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar pTitle="Contact"/>
                <PageTopContent pageTitle="Contact Us"/>
                <ContactUs/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactUsPage;