import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ServicesPage from "../pages/ServicesPage";
import AllCourses from "../pages/AllCourses";
import ContactUsPage from "../pages/ContactUsPage";
import PortfolioPage from "../pages/PortfolioPage";
import RefundPage from "../pages/RefundPage";
import TermOfUsePage from "../pages/TermOfUsePage";
import PolicyPage from "../pages/PolicyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={AboutUsPage}/>
                    <Route exact path="/service" component={ServicesPage}/>
                    <Route exact path="/course" component={AllCourses}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactUsPage}/>
                    {/*--------Footer Link------------------------*/}
                    <Route exact path="/refundPolicy" component={RefundPage}/>
                    <Route exact path="/termOfUse" component={TermOfUsePage}/>
                    <Route exact path="/policy" component={PolicyPage}/>
                    {/*-------------card Route----------------------------*/}
                    <Route exact path="/projectDetails" component={ProjectDetailsPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;