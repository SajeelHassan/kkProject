import React from 'react';
import clsx from 'clsx';
import * as classes from './Card.module.css'
const Card = ({ title, imgName, description, bkg }) => {

    return (
        <div className={clsx(classes.cardWrap, bkg)}>
            <div className={classes.cardInfo}>
                <img src={require(`../../assets/images/homecards/${imgName}`).default} alt={title} className={classes.cardImg} />
                <p className={classes.cardTitle}>{title}</p>
                <p className={classes.cardDescription}>{description}</p>
            </div>
        </div>
    )
}
export default Card;