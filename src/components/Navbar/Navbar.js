import React from 'react';
import { Link } from 'gatsby';
import '../../assets/css/global.css';
import * as  classes from './Navbar.module.css';
import navbarLogo from '../../assets/images/header/logo.png'
const Navbar = () => {

    return <>
        <div className={classes.navbarWrapper}>
            <div className={classes.navbar}>
                <img src={navbarLogo} className={classes.logo} alt='KK Marketing' />
                <ul className={classes.navbarList}>
                    <li><Link to='#'>HOME</Link></li>
                    <li><Link to='#'>SERVICES</Link></li>
                    <li><Link to='#'>ABOUT US</Link></li>
                </ul>
            </div>
        </div>
    </>
}

export default Navbar;