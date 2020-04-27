import React, {Component, Fragment} from 'react';
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import Technology from "../components/Technology/Technology";
import Summary from "../components/Summary/Summary";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import OurCourse from "../components/OurCourses/OurCourse";
import Video from "../components/Video/Video";
import Review from "../components/Review/Review";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar pTitle="Home"/>
                <TopBanner/>
                <Services/>
                <Technology/>
                <Summary/>
                <RecentProjects/>
                <OurCourse/>
                <Video/>
                <Review/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;