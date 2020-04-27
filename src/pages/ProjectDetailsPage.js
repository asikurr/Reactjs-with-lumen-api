import React, {Component, Fragment} from 'react';
import TopNavbar from "../components/TopNavbar/TopNavbar";
import PageTopContent from "../components/PageTop/PageTopContent";
import Footer from "../components/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

class ProjectDetailsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar pTitle="Details"/>
                <PageTopContent pageTitle="JavaScript"/>
                <ProjectDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;