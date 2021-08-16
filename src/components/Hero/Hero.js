import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/bootstrapped.css'
import clsx from 'clsx'
import { Carousel } from 'react-bootstrap'
import * as classes from './Hero.module.css'
import cImage1 from '../../assets/images/header/side-image-one.png'
import cImage2 from '../../assets/images/header/side-image-two.png'
import cImage3 from '../../assets/images/header/logo.png'
import Navbar from '../Navbar/Navbar';


const Hero = () => {

    return (<>
        <Navbar />
        <Carousel className={clsx(classes.carousel)} controls={false}>
            <Carousel.Item interval={3000}>
                <div className={classes.carouselDiv}>
                    <img className="d-block "
                        src={cImage1}
                        alt="Company Tagline" />
                    <p>
                        Providing you <span>solutions</span> for your <span>digital marketing</span> assets and fulfilling the necessities of your <span>digital platforms</span>
                    </p>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000} >
                <div className={classes.carouselDiv}>
                    <img
                        className="d-block "
                        src={cImage2}
                        alt="Services" />
                    <ul className={classes.heroUL}>
                        <li>GRAPHIC DESIGNING</li>
                        <li>PHOTOGRAPHY</li>
                        <li>CONTENT WRITING</li>
                        <li>MEDIA BUYING</li>
                        <li>SEO TOOLS</li>
                        <li>ANIMATIONS</li>
                    </ul>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000} >
                <div className={classes.carouselDiv}>
                    <img
                        className="d-block "
                        src={cImage3}
                        alt="KK Industries" />
                    <div className={classes.verticalLine}></div>
                    <p>kk group of industries is the fastest growing unit of industries across the whole country. KK Marketing is the branch unit installed to maintain all the digital marketing platform </p>
                </div>
            </Carousel.Item>
        </Carousel>
    </>
    )
}

export default Hero;