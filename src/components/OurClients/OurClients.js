import React from 'react'
import { Carousel } from 'react-bootstrap'
import clientLogo1 from '../../assets/images/ourclients/clientslogo1.png'
import clientLogo2 from '../../assets/images/ourclients/clientslogo2.png'
import clientLogo3 from '../../assets/images/ourclients/clientslogo3.png'
import * as classes from './OurClients.module.css'
const OurClients = () => {
    return <div className={classes.sectionWrapper}>
        <div className={classes.sectionInfo}>
            <p className={classes.sectionTitle}>Our Clients</p>
            <div className={classes.sectionCarousel}>
                <Carousel controls={false} className='ourClientsCarousel' pause={false} interval={2000}>
                    <Carousel.Item>
                        <div className={classes.carouselInfo}>
                            <img src={clientLogo1}></img>
                            <img src={clientLogo2}></img>
                            <img src={clientLogo3}></img>
                            <img src={clientLogo1}></img>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={classes.carouselInfo}>
                            <img src={clientLogo2}></img>
                            <img src={clientLogo3}></img>
                            <img src={clientLogo1}></img>
                            <img src={clientLogo2}></img>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={classes.carouselInfo}>
                            <img src={clientLogo3}></img>
                            <img src={clientLogo1}></img>
                            <img src={clientLogo2}></img>
                            <img src={clientLogo3}></img>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </div>

}

export default OurClients;