import clsx from 'clsx'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import * as classes from './Contact.module.css'

const ContactForm = () => {
    return (
        <div className={classes.sectionWrapper}>
            <p className={classes.title}>Contact Us</p>
            <form id='contact-form' className={classes.formWrap} method='post' netlify>
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
    )

}
export default ContactForm;