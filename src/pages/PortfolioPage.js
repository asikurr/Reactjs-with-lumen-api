import React, {Component, Fragment} from 'react';
import TopNavbar from "../components/TopNavbar/TopNavbar";
import PageTopContent from "../components/PageTop/PageTopContent";
import AllProjects from "../components/Portfolio/AllProjects";
import Footer from "../components/Footer/Footer";

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar pTitle="Portfolio"/>
                <PageTopContent pageTitle="My Portfolio"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;