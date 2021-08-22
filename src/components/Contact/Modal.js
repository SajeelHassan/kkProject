import React from 'react'
import ReactDOM from 'react-dom'
import * as classes from './Modal.module.css';
export default function Modal({ modalState }) {

    if (modalState) {

        return ReactDOM.createPortal(<div className={classes.cardModalWrapper} >

            <div className={classes.card}>
                <div className={classes.header}>
                    <h1>Thank you!</h1>
                </div>
                <div className={classes.body}>

                    <p>Your form submission has been received.</p>

                    <p>
                        <a id="back-link" href="https://kkmarketing.netlify.app/about-us">← Back to our site</a>
                    </p>
                </div>
            </div>


        </div>, document.getElementById('portal')
        )
    } else {
        return null
    }
}
