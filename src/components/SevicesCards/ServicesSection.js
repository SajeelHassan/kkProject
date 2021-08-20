import React from 'react';
import Card from './Card';
import * as classes from './ServicesSection.module.css'

const DATA = [
    {
        title: 'Photography',
        description: 'We Provide our clients with ultimate business prosperity and data focused digital marketing services, backed by our custom-curated strategies',
        imgName: 'card1.png',
        bkg: classes.bgGreenish
    },
    {
        title: 'Photography',
        description: 'We Provide our clients with ultimate business prosperity and data focused digital marketing services, backed by our custom-curated strategies',
        imgName: 'card2.png',
        bkg: classes.bgBluish
    },
    {
        title: 'Photography',
        description: 'We Provide our clients with ultimate business prosperity and data focused digital marketing services, backed by our custom-curated strategies',
        imgName: 'card3.png',
        bkg: classes.bgGrayish
    },
    {
        title: 'Photography',
        description: 'We Provide our clients with ultimate business prosperity and data focused digital marketing services, backed by our custom-curated strategies',
        imgName: 'card4.png',
        bkg: classes.bgPinkish
    },
    {
        title: 'Photography',
        description: 'We Provide our clients with ultimate business prosperity and data focused digital marketing services, backed by our custom-curated strategies',
        imgName: 'card5.png',
        bkg: classes.bgBrownish
    },
    {
        title: 'Photography',
        description: 'We Provide our clients with ultimate business prosperity and data focused digital marketing services, backed by our custom-curated strategies',
        imgName: 'card6.png',
        bkg: classes.bgOrangish
    },
    {
        title: 'Photography',
        description: 'We Provide our clients with ultimate business prosperity and data focused digital marketing services, backed by our custom-curated strategies',
        imgName: 'card7.png',
        bkg: classes.bgYellowish
    },
    {
        title: 'Photography',
        description: 'We Provide our clients with ultimate business prosperity and data focused digital marketing services, backed by our custom-curated strategies',
        imgName: 'card8.png',
        bkg: classes.bgBluish2
    },
    {
        title: 'Photography',
        description: 'We Provide our clients with ultimate business prosperity and data focused digital marketing services, backed by our custom-curated strategies',
        imgName: 'card9.png',
        bkg: classes.bgPurplish
    },
]
const ServicesSection = () => {

    return (
        <div className={classes.sectionWrapper}>
            <div className={classes.sectionCards}>
                {DATA.map((d, index) => {
                    return <Card key={index} title={d.title} imgName={d.imgName} bkg={d.bkg} description={d.description} />
                })}
            </div>
        </div>
    )
}

export default ServicesSection;

