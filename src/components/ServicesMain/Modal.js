import clsx from 'clsx';
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import * as classes from './Modal.module.css';
export default function Modal({ modalState, setModal, title, imgName, description }) {
    const closeModal = () => {
        setModal(false)
    }

    if (modalState) {

        return ReactDOM.createPortal(<div className={classes.cardModalWrapper} onClick={closeModal} >
            <div className={clsx(classes.cardModal, classes.cardModalAnimate)} >
                <div className={classes.modalContent}>
                    <div className={classes.modalTitleAndImage}>
                        <img src={require(`../../assets/images/services/images/${imgName}`).default} alt={title} />
                        <p className={classes.modalTitle}>{title}</p>
                    </div>
                    <div className={classes.modalDescription}>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>, document.getElementById('portal')
        )
    } else {
        return null
    }
}
