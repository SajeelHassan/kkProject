import React from 'react';
import * as classes from './KKGroupSection.module.css';
import logo from '../../assets/images/header/logo.png';
import { Carousel } from 'react-bootstrap';

import cImage0 from '../../assets/images/kkgroup/cImage0.png';
import cImage1 from '../../assets/images/kkgroup/cImage1.png';
import cImage2 from '../../assets/images/kkgroup/cImage2.png';
import cImage3 from '../../assets/images/kkgroup/cImage3.png';
import cImage4 from '../../assets/images/kkgroup/cImage4.png';
import cImage5 from '../../assets/images/kkgroup/cImage5.png';
import cImage6 from '../../assets/images/kkgroup/cImage6.png';
const CAROUSEL_IMGS = [
    cImage0, cImage1, cImage2, cImage3, cImage4, cImage5, cImage6,
]
const KKGroupSection = () => {
    return (
        <div className={classes.sectionWrapper} >
            <div className={classes.line}></div>
            <div className={classes.sectionInfo}>
                <img src={logo} alt='KK Group' />
                <p>Your All in one Marketing agency will make you stand out among the potential competitors with the marketing strategies you need.</p>
            </div>
            <div className={classes.line}></div>
            <div className={classes.sectionCarousel}>
                <div className={classes.background}>
                    <Carousel indicators={false} pause={false} controls={false}>
                        {CAROUSEL_IMGS.map((imgSrc, index) => {
                            return (
                                <Carousel.Item className={classes.carouselItem} interval={1000} key={index}>
                                    <div className={classes.carouselImage}>
                                        <img src={imgSrc} alt={imgSrc} />
                                    </div>
                                </Carousel.Item>)
                        })}
                    </Carousel>
                </div>
            </div>
            <div className={classes.kkGroup}>
                <p className={classes.kkGroupTitle}> <span>KK</span> GROUP</p>
                <div className={classes.horizontalLine} />
                <p className={classes.kkGroupInfo}>KK helps clients to influence their audience with effective marketing techniques. Through marketing, we shape our customer’s brands worldwide. We have successfully provided Marketing services to our clients that helped them increase their popularity, sales, and Return on investment.</p>
            </div>
        </div>
    )
}

export default KKGroupSection;