import clsx from 'clsx'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Modal from './Modal'
import * as classes from './Contact.module.css'

const ContactForm = () => {
    const [modal, showModal] = useState(false);

    const showCardModal = (e) => {
        e.preventDefault();
        showModal(true)
    }
    return (<>
        {modal && <Modal modalState={modal} setModal={showModal} />}
        <div className={classes.sectionWrapper}>
            <p className={classes.title}>Contact Us</p>
            <form id='contact-form' name='contact-us-form' className={classes.formWrap} method='post' data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={showCardModal}>
                <input type="hidden" name="form-name" value="contact-us-form" />
                <div className={clsx(classes.nameDiv, classes.inputDiv)}>
                    <label for='your-name'>YOUR NAME:</label>
                    <div className={classes.nameInputs}>
                        <input type='text' name='your-name' id='fname' placeholder='First name' required />
                        <input type='text' name='your-name' id='lname' placeholder='Last name' />
                    </div>
                </div>
                <div className={clsx(classes.emailDiv, classes.inputDiv)}>
                    <label for='emailInput'>
                        EMAIL ADDRESS
                    </label>
                    <input type='email' name='emailInput' id="form-email" placeholder='Eg. example@email.com' required />
                </div>
                <div className={clsx(classes.phoneDiv, classes.inputDiv)}>
                    <label for='phoneInput'>
                        PHONE NUMBER
                    </label>
                    <input type='text' name='phoneInput' id="form-phone" placeholder='Eg. 03xxxxxxxxx' required />
                </div>
                <div className={clsx(classes.msgDiv, classes.inputDiv)}>
                    <label for='msgInput'>
                        MESSAGE
                    </label>
                    <textarea type='text-area' name='msgInput' id="form-msg" placeholder='Please enter your message...' required ></textarea>
                </div>
                <button type='submit' className={classes.submitBtn}>Submit  <span><FaArrowRight /></span></button>
            </form>
        </div>
    </>)

}
export default ContactForm;