import React from 'react'
import { Link } from 'gatsby';
import * as classes from './Footer.module.css';
import logo from '../../assets/images/header/logo.png';
import facebook from '../../assets/images/social/fb.png';
import instagram from '../../assets/images/social/in.png';
import twitter from '../../assets/images/social/tw.png';
const Footer = () => {
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (<>
        <div className={classes.section}>
            <div className={classes.sectionWrapper}>
                <div className={classes.logoTag}>
                    <img src={logo} alt={logo} />
                    <p>"Growth is our passion"</p>
                </div>
                <div className={classes.footerInfo}>
                    <p>Information</p>
                    <ul className={classes.footerInfoUL}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                    </ul>
                </div>
                <div className={classes.footerSocial}>
                    <p>Social</p>
                    <div className={classes.socialImages}>
                        <img src={facebook} alt={facebook} />
                        <img src={instagram} alt={instagram} />
                        <img src={twitter} alt={twitter} />
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.copyrightSection}>
            <div className={classes.sectionWrapperCopyright}>
                <p>Copyright © 2021 KK Group All rights reserved.</p>
                <button onClick={backToTop}>Back to Top</button>
            </div>
        </div>
    </>)

}

export default Footer;