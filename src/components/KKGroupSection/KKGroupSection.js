import React from 'react';
import * as classes from './KKGroupSection.module.css';
import logo from '../../assets/images/header/logo.png';
import { Carousel } from 'react-bootstrap';

import cImage from '../../assets/images/kkgroup/cImage0.png';
const KKGroupSection = () => {
    return (
        <div className={classes.sectionWrapper} >
            <div className={classes.line}></div>
            <div className={classes.sectionInfo}>
                <img src={logo} alt='KK Group' />
                <p>kk group of industries is the fastest growing unit of industries across the whole country. KK Marketing is the branch unit installed to maintain all the digital marketing platform</p>
            </div>
            <div className={classes.line}></div>
            <div className={classes.sectionCarousel}>
                <Carousel className={classes.background}>
                    <Carousel.Item className={classes.carouselItem}>
                        <img src={cImage} className={classes.carouselImage} />
                    </Carousel.Item>
                    <Carousel.Item className={classes.carouselItem}>
                        <img src={cImage} className={classes.carouselImage} />
                    </Carousel.Item>
                    <Carousel.Item className={classes.carouselItem}>
                        <img src={cImage} className={classes.carouselImage} />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default KKGroupSection;