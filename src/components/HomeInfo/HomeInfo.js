import React from 'react';
import * as classes from './HomeInfo.module.css';
import homeInfoImg1 from '../../assets/images/homeinfo/homeinfo1.png';
import homeInfoImg2 from '../../assets/images/homeinfo/homeinfo2.png';
import homeInfoImg3 from '../../assets/images/homeinfo/homeinfo3.png';
const HomeInfo = () => {
    return (<div className={classes.sectionWrapper}>
        <div className={classes.sectionSections}>
            <div className={classes.sectionsInfo}>
                <p className={classes.sectionsTitle}>Ecommerce Marketing</p>
                <p>To gather the trust of audience it is important to first make yourself visible to them and then gain their trust. This process can be achieved by an effective marketing strategy.</p>
            </div>
            <img className={classes.sectionsImg} src={homeInfoImg1} />
        </div>
        <div className={classes.sectionSections}>
            <div className={classes.sectionsInfo}>
                <p className={classes.sectionsTitle}>Expand Social Reach</p>
                <p>Visibility is the key to make yourself stand out in competitive market. With an effective Marketing campaign, you can reach potential audience faster and can increase your leads significantly.</p>
            </div>
            <img className={classes.sectionsImg} src={homeInfoImg2} />
        </div>
        <div className={classes.sectionSections}>
            <div className={classes.sectionsInfo}>
                <p className={classes.sectionsTitle}>Increase Return on Investment</p>
                <p>With people able to trust your brand and products with your good marketing strategies, you’ll be able to convert more audience that will exponentially increase your fanbase and revenue.</p>
            </div>
            <img className={classes.sectionsImg} src={homeInfoImg3} />
        </div>
    </div>)

}

export default HomeInfo;