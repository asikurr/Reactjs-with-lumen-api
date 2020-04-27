import React, {Component, Fragment} from 'react';
import TopNavbar from "../components/TopNavbar/TopNavbar";
import PageTopContent from "../components/PageTop/PageTopContent";
import Footer from "../components/Footer/Footer";
import OurCourse from "../components/OurCourses/OurCourse";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar pTitle="Course"/>
                <PageTopContent pageTitle="All Courses"/>
                <OurCourse/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AllCourses;