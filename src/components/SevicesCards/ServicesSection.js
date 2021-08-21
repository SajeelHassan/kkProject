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
        title: 'Content Writing',
        description: 'Content is one of the most important pillars to create understanding between you and your audience.   We provide professional content writing services for Websites, Facebook posts and ads, and Blogs.',
        imgName: 'card2.png',
        bkg: classes.bgBluish
    },
    {
        title: 'Graphic Designing',
        description: 'Showcasing your product in the best possible way with the help of appealing posts and ads graphics. Appealing visuals put a Lasting effect on the customers and thus increasing the converted leads.',
        imgName: 'card3.png',
        bkg: classes.bgGrayish
    },
    {
        title: 'Videography',
        description: 'Advertisement through videos is the best way to convey the message to the audience. We provide Videography services that include Social media videos, product videos and review videos.',
        imgName: 'card4.png',
        bkg: classes.bgPinkish
    },
    {
        title: 'Content Calendar',
        description: 'It includes making complete marketing plan of the month or project to get a clear picture of your tasks that needs to be done in the entire process. Having a plan earlier not only helps you to achieve your goals faster but also gives you direction to proceed easily.',
        imgName: 'card5.png',
        bkg: classes.bgBrownish
    },
    {
        title: 'Data Analytics',
        description: 'Providing you complete assistance in creating content strategies to appeal your targeted audience, evaluating your ad campaigns, and doing the research and development of your product.',
        imgName: 'card6.png',
        bkg: classes.bgOrangish
    },
    {
        title: 'Animation',
        description: 'Through animations the audience can get better understanding of the message that you are trying to convey. More audience can be provoked through 2D and 3D animations and that will give you a solid edge from your competitors.',
        imgName: 'card7.png',
        bkg: classes.bgYellowish
    },
    {
        title: 'Market Research',
        description: 'To excel in any field the most important step is to analyze what others in the market are offering. We’ll be doing complete market and competitors research for you to make sure that you’re not missing out on anything.',
        imgName: 'card8.png',
        bkg: classes.bgBluish2
    },
    {
        title: 'SEO',
        description: 'Through accurate Search engine Optimization, you can rank in organic search results that will help you reach more audience, Increase your leads and sales. With SEO optimized content and link building you can grow your business exponentially.',
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

