import React from 'react'
import { Carousel } from 'react-bootstrap'
import clientLogo1 from '../../assets/images/ourclients/logo1.jpeg'
import clientLogo2 from '../../assets/images/ourclients/logo2.jpg'
import clientLogo3 from '../../assets/images/ourclients/logo3.jpg'
import clientLogo4 from '../../assets/images/ourclients/logo4.jpg'
import clientLogo5 from '../../assets/images/ourclients/logo5.jpg'
import clientLogo6 from '../../assets/images/ourclients/logo6.jpg'
import clientLogo7 from '../../assets/images/ourclients/logo7.jpg'
import clientLogo8 from '../../assets/images/ourclients/logo8.jpeg'
import clientLogo9 from '../../assets/images/ourclients/logo9.jpeg'
import clientLogo12 from '../../assets/images/ourclients/logo12.jpg'
import clientLogo14 from '../../assets/images/ourclients/logo14.jpg'
import clientLogo15 from '../../assets/images/ourclients/logo15.jpg'
import clientLogo16 from '../../assets/images/ourclients/logo16.jpg'
import clientLogo17 from '../../assets/images/ourclients/logo17.jpg'
import clientLogo18 from '../../assets/images/ourclients/logo18.jpg'
import clientLogo19 from '../../assets/images/ourclients/logo19.jpg'
import * as classes from './OurClients.module.css'
const OurClients = () => {
    return <div className={classes.sectionWrapper}>
        <div className={classes.sectionInfo}>
            <p className={classes.sectionTitle}>Our Clients</p>
            <div className={classes.sectionCarousel}>
                <Carousel controls={false} className='ourClientsCarousel' interval={2000}>
                    <Carousel.Item>
                        <div className={classes.carouselItem}>
                            <div className={classes.carouselInfo}>
                                <img src={clientLogo6}></img>
                                <img src={clientLogo14}></img>
                                <img src={clientLogo15}></img>
                                <img src={clientLogo16}></img>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={classes.carouselItem}>
                            <div className={classes.carouselInfo}>
                                <img src={clientLogo1}></img>
                                <img src={clientLogo2}></img>
                                <img src={clientLogo3}></img>
                                <img src={clientLogo4}></img>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={classes.carouselItem}>
                            <div className={classes.carouselInfo}>
                                <img src={clientLogo5}></img>
                                <img src={clientLogo17}></img>
                                <img src={clientLogo7}></img>
                                <img src={clientLogo8}></img>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={classes.carouselItem}>
                            <div className={classes.carouselInfo}>
                                <img src={clientLogo9}></img>
                                <img src={clientLogo18}></img>
                                <img src={clientLogo19}></img>
                                <img src={clientLogo12}></img>
                            </div>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    </div>

}

export default OurClients;