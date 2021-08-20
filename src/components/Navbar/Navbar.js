import React from 'react';
import { Link } from 'gatsby';
import '../../assets/css/global.css';
import * as  classes from './Navbar.module.css';
import navbarLogo from '../../assets/images/header/logo.png'
import { Navbar } from 'react-bootstrap';
const NavbarMain = () => {

    return (
        <Navbar collapseOnSelect expand="sm" bg="transparent" variant="dark" className={classes.navbarWrapper}>
            <div className={classes.navbar}>
                <Navbar.Brand ><Link to='/'> <img src={navbarLogo} className={classes.logo} alt='KK Marketing' /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <ul className={classes.navbarList}>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/services'>SERVICES</Link></li>
                        <li><Link to='/about-us'>ABOUT US</Link></li>
                    </ul>
                </Navbar.Collapse>
            </div>
        </Navbar>)
}

export default NavbarMain;