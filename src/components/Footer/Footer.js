import React from 'react'
import { Link } from 'gatsby';
import * as classes from './Footer.module.css';
import logo from '../../assets/images/header/logo.png';
import facebook from '../../assets/images/social/fb.png';
import instagram from '../../assets/images/social/in.png';
import twitter from '../../assets/images/social/tw.png';
const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const Footer = () => {

    return (<>
        <div className={classes.section}>
            <div className={classes.sectionWrapper}>
                <div className={classes.footerAddressAndPhone}>
                    <div className={classes.logoTag}>
                        <img src={logo} alt={logo} />
                        <p>"You Create, We MARKET"</p>
                    </div>
                    <div className={classes.footerAddress}>
                        <p className={classes.addressTitle}>Address</p>
                        <p className={classes.addressDescription}>
                            Plot 86,street 10 sector I 9/2,
                            Islamabad.
                        </p>
                    </div>

                </div>
                <div className={classes.footerInfo}>
                    <p>Information</p>
                    <ul className={classes.footerInfoUL}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                    </ul>
                </div>
                <div className={classes.footerSocialAndLogo}>
                    <div className={classes.footerSocial}>
                        <p>Social</p>
                        <div className={classes.socialImages}>
                            <img src={facebook} alt={facebook} />
                            <img src={instagram} alt={instagram} />
                            <img src={twitter} alt={twitter} />
                        </div>
                    </div>
                    <div className={classes.footerPhone}>
                        <p className={classes.addressTitle}>Email</p>
                        <a className={classes.addressDescription} href="mailto:kkmarketinggroup.pk@gmail.com">
                            kkmarketinggroup.pk@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>)

}

export default Footer;