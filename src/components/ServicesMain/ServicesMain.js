import React from 'react'
import Card from './Card'
import * as classes from './ServicesMain.module.css'

const DATA = [
    {
        title: 'Graphic Designing',
        description: 'Showcasing your product in the best possible way with the help of appealing posts and ads graphics. Appealing visuals put a Lasting effect on the customers and thus increasing the converted leads.',
        image: 'graphic-designing.png'
    },
    {
        title: 'Content Writing',
        description: 'Content is one of the most important pillars to create understanding between you and your audience.   We provide professional content writing services for Websites, Facebook posts and ads, and Blogs.',
        image: 'content-writing.png'
    },
    {
        title: 'Product Photography',
        description: 'Providing professional and creative Product photography services to showcase your brand and products in front of the audience. We provide on demand and aesthetically pleasing shots that will make your audience notice you at first sight.',
        image: 'product-photography.png'
    },
    {
        title: 'Videography',
        description: 'Advertisement through videos is the best way to convey the message to the audience. We provide Videography services that includes Social media videos, product videos and review videos.',
        image: 'videography.png'
    },
    {
        title: 'Content Calendar',
        description: 'It includes making complete marketing plan of the month or project to get a clear picture of your tasks that needs to be done in the entire process. Having a plan earlier not only helps you to achieve your goals faster but also gives you direction to proceed easily.',
        image: 'content-calendar.png'
    },
    {
        title: 'Manage Media Workflow',
        description: 'Keeping track of what’s happening and the steps which can be taken to fill the areas that are lacking. Making sure every step is being followed smoothly and manage all the tasks that need any sort of required action.',
        image: 'manage-media.png'
    },
    {
        title: 'Digital Content Strategy',
        description: 'It includes analyzing background information that is required to create an effective plan ( Understanding audience, Drawing conclusions), creating content accordingly, monitoring the flow and managing all the steps to make your marketing campaign effective.',
        image: 'digital-content.png'
    },
    {
        title: 'Digital PR and KOL Engagement',
        description: 'Increase awareness about your brand online and reach a broader audience ( by using traditional public relation, content marketing, SEO and social media). Through KOL engagement Key opinion Leaders are involved to improve your Brand’s worth.',
        image: 'content-writing2.png'
    },
    {
        title: 'Guest Blogging',
        description: 'Guest Blogging is writing articles and blogs on someone else’s website. Through guest blogging those websites can be targeted that already have trust and following of audience, that will improve your chances to secure backlinks.',
        image: 'guest-blogging.png'
    },
    {
        title: 'Social Media Ads',
        description: 'Visibility is the key to reach maximum people. Through social media ads we target the audience that is more likely to show interest in your products, and by using re-targeting technique the potential audience is never missed out.',
        image: 'social-media-ads.png'
    },
    {
        title: '2D and 3D Animation',
        description: 'Through animations the audience can get better understanding of the message that you are trying to convey. More audience can be provoked through 2D and 3D animations and that will give you a solid edge from your competitors.',
        image: 'youtube-audience.png'
    },
    {
        title: 'Data Analytics',
        description: 'Providing you complete assistance in creating content strategies to appeal your targeted audience, evaluating your ad campaigns, and doing the research and development of your product.',
        image: 'data-analytics.png'
    },
    {
        title: 'YouTube Audience Engagement',
        description: 'With the platform like YouTube you can target a lot of potential audience and create your brands image. With description videos about your products (or services) and by engaging YouTube influencers maximum audience can be reached.',
        image: 'youtube.png'
    },
    {
        title: 'Market Research',
        description: 'To excel in any field the most important step is to analyze what others in the market are offering. We’ll be doing complete market and competitors research for you to make sure that you’re not missing out on anything.',
        image: 'market-research.png'
    },
    {
        title: 'Media Buying',
        description: 'Media buying includes Digital Media Buying (acquiring ad placements on apps, websites and other platforms), Outdoor Media Buying (billboards and posters) and Electronic Media Buying (Television and Radio Ads).',
        image: 'alt-blt-tlt.png'

    },
    {
        title: 'ATL, BTL and TTL advertising',
        description: 'Providing advertisement services that include Television advertisements, print media, radio, billboards, banners, SMS, Emails, social media posts, pamphlets, Event organization, Product sampling, Sales Promotions, online banners, social media posts and blogs.',
        image: 'media-buying.png'

    },
    {
        title: 'SEO',
        description: 'Through accurate Search engine Optimization, you can rank in organic search results that will help you reach more audience, Increase your leads and sales. With SEO optimized content and link building you can grow your business exponentially.',
        image: 'seo.png'
    },

]

const ServicesMain = () => {
    return (
        <div className={classes.sectionWrapper}>
            <div className={classes.sectionMain}>
                <div className={classes.sectionInfo}>
                    <p className={classes.sectionTitle}>Services We Provide</p>
                    <p className={classes.sectionTitleDescription}>
                        Go through the list of services we offer to get a clear idea of different aspects through which you can make your business reach its maximum potential.
                    </p>
                </div>
                <div className={classes.sectionCards}>
                    {DATA.map((d, index) => <Card imgName={d.image} title={d.title} description={d.description} cardClass={classes.sectionCard} key={index} />)}
                </div>
            </div>
        </div>
    )
}
export default ServicesMain;