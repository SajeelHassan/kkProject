import clsx from 'clsx';
import React, { useState } from 'react';
import * as classes from './Card.module.css';
import Modal from './Modal';

const Card = ({ imgName, title, description, cardClass }) => {

    const [modal, showModal] = useState(false);

    const showCardModal = (e) => {
        e.preventDefault();
        showModal(true)
    }
    return (<>
        {modal && <Modal modalState={modal} setModal={showModal} imgName={imgName} title={title} description={description} />}
        <div className={clsx(classes.cardMain, cardClass)}>
            <div className={classes.cardMainImageWrap}>
                <div className={classes.cardMainImage}>
                    <img src={require(`../../assets/images/services/images/${imgName}`).default} alt={title} />
                </div>
            </div>
            <div className={classes.cardHandleWrapper} onClick={showCardModal}>
                <div className={classes.cardHandle}>
                    <p className={classes.handleTitle}>{title}</p>
                    <img className={classes.handleImage} src={require(`../../assets/images/services/handles/${imgName}`).default} alt={title} />
                </div>
            </div>
        </div>
    </>
    )
}

export default Card;