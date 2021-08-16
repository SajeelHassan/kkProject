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
                <p>kk group of industries is the fastest growing unit of industries across the whole country. KK Marketing is the branch unit installed to maintain all the digital marketing platform</p>
            </div>
            <div className={classes.line}></div>
            <div className={classes.sectionCarousel}>
                <div className={classes.background}>
                    <Carousel indicators={false} pause={false}>
                        {CAROUSEL_IMGS.map((imgSrc) => {
                            return (
                                <Carousel.Item className={classes.carouselItem} interval={1000}>
                                    <div className={classes.carouselImage}>
                                        <img src={imgSrc} alt={imgSrc} />
                                    </div>
                                </Carousel.Item>)
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default KKGroupSection;