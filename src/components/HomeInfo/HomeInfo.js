import React from 'react';
import * as classes from './HomeInfo.module.css';
import homeInfoImg1 from '../../assets/images/homeinfo/homeinfo1.png';
import homeInfoImg2 from '../../assets/images/homeinfo/homeinfo2.png';
import homeInfoImg3 from '../../assets/images/homeinfo/homeinfo3.png';
const HomeInfo = () => {
    return (<div className={classes.sectionWrapper}>
        <div className={classes.sectionSections}>
            <div className={classes.sectionsInfo}>
                <p className={classes.sectionsTitle}>ECOMMERCE MARKETING</p>
                <p>We Provide our clients with ultimate business prosperity and data focused digital marketing services, backed by our custom-curated strategies. Our dedicated team puts in colossal efforts helping you scale your business, hyper growth, sales success, and a handful of qualified leads.</p>
            </div>
            <img className={classes.sectionsImg} src={homeInfoImg1} />
        </div>
        <div className={classes.sectionSections}>
            <div className={classes.sectionsInfo}>
                <p className={classes.sectionsTitle}>ECOMMERCE MARKETING</p>
                <p>We Provide our clients with ultimate business prosperity and data focused digital marketing services, backed by our custom-curated strategies. Our dedicated team puts in colossal efforts helping you scale your business, hyper growth, sales success, and a handful of qualified leads.</p>
            </div>
            <img className={classes.sectionsImg} src={homeInfoImg2} />
        </div>
        <div className={classes.sectionSections}>
            <div className={classes.sectionsInfo}>
                <p className={classes.sectionsTitle}>ECOMMERCE MARKETING</p>
                <p>We Provide our clients with ultimate business prosperity and data focused digital marketing services, backed by our custom-curated strategies. Our dedicated team puts in colossal efforts helping you scale your business, hyper growth, sales success, and a handful of qualified leads.</p>
            </div>
            <img className={classes.sectionsImg} src={homeInfoImg3} />
        </div>
    </div>)

}

export default HomeInfo;