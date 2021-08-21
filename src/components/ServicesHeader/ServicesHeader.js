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
                    <div className={classes.sectionDescription}><p>Want to step it up on social? Technology is just one piece of the puzzle. With Hootsuite, you’re not just getting the right tools—you’re getting a partner dedicated to boosting your confidence, strengthening your skills, and supporting you every step of the way.<br />We’ve been leading the social media management space since 2008, and we’ve trained 200,000+ marketing pros just like you. Come learn with us.</p></div>
                    <button className={classes.btn}>Get Started</button>
                </div>
            </div>
        </div>
    )
}
export default ServicesHeader;