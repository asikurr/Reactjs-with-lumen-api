import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Logo from '../../asset/images/logo.svg'
import logoBlue from '../../asset/images/logoscroll.svg'
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/style.css';
import {NavLink} from "react-router-dom";

class TopNavbar extends Component {
    constructor(props) {
        super();
        this.state={
            bandTitle:"bandColor",
            TopLogo : [Logo],
            navBgColor:"navBackground",
            navItem:"navItemColor",
            navVariant:"dark",
            pTitle:props.pTitle,
        }
    }

    Onscroll= () => {
        if(window.scrollY>100){
            this.setState({navVariant:'light',bandTitle:'onScroll',TopLogo:[logoBlue],navBgColor:'navBackgroundScroll',navItem:'navItemColorScroll'})
        }else if(window.scrollY<100)
        {
            this.setState({navVariant:'dark ',bandTitle:'bandColor',TopLogo:[Logo],navBgColor:'navBackground',navItem:'navItemColor'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.Onscroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pTitle}</title>
                <Navbar fixed="top" className={this.state.navBgColor} collapseOnSelect expand="lg" variant={this.state.navVariant}>
                    <Navbar.Brand className={this.state.bandTitle} href="#home"><img src={this.state.TopLogo}/>React JS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                          <Nav.Link>  <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/">HOME</NavLink>               </Nav.Link>
                          <Nav.Link>  <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/about">ABOUT</NavLink>         </Nav.Link>
                          <Nav.Link>  <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/service">SERVICES</NavLink>    </Nav.Link>
                          <Nav.Link>  <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/course">COURSE</NavLink>       </Nav.Link>
                          <Nav.Link>  <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/portfolio">PORTFOLIO</NavLink> </Nav.Link>
                          <Nav.Link>  <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/contact">CONTACT</NavLink>     </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavbar;