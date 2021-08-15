import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <Carousel.Item interval={5000}>
                <img className="d-block "
                    src={cImage1}
                    alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block "
                    src={cImage2}
                    alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block "
                    src={cImage3}
                    alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    </>
    )
}

export default Hero;