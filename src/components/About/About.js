import React from 'react'
import * as classes from './About.module.css';

const About = () => {
    return (
        <div className={classes.sectionWrapper}>
            <p className={classes.title}>About Us</p>
            <p className={classes.description}>KK has been in the field of marketing for a long time now. With the experience we have in this field we have helped a lot of business to reach their maximum potential. With refined marketing strategies and client experience our team is determined to serve others too and make their business shine as well.</p>
        </div>
    )
}

export default About;
