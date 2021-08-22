import React from 'react'
import * as classes from './ServicesHeader.module.css'
import headerImg from '../../assets/images/services/header/servicesheader.png';

const ServicesHeader = () => {
    return (
        <div className={classes.sectionWrapper}>
            <div className={classes.sectionMain}>
                <div className={classes.mainImage}>
                    <img src={headerImg} />
                </div>
                <div className={classes.headerInfo}>
                    <p className={classes.sectionTitle}>Our Services</p>
                    <div className={classes.sectionDescription}><p>Looking for a single stop that can answer all your marketing questions? You’ve landed on the right place. Our talented and experienced team is capable of providing their services for every type of marketing, be in social, digital or old school marketing.<br />With our services we have helped many businesses to grow, these shinning businesses are our true strength that motivate us to help more and more businesses.</p></div>
                </div>
            </div>
        </div>
    )
}
export default ServicesHeader;