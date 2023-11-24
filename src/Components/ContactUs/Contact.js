import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [messageFocused, setMessageFocused] = useState(false);
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    return (
        <>
            <h2 className='my-5'>Contact Us</h2>
            <div className="contact-page" id='contact'>
                <div className="contact-form">
                    <form action="https://formsubmit.co/info@legitbyte.com" method="POST">
                        <div className={`input-container ${nameFocused ? 'focused' : ''}`}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onFocus={() => setNameFocused(true)}
                                onBlur={() => setNameFocused(false)}
                                onChange={(e) => setNameValue(e.target.value)}
                            />
                            <label
                                htmlFor="name"
                                className={nameValue ? "input-label" : ""}
                            >
                                Your Name
                            </label>
                        </div>
                        <div className={`input-container ${emailFocused ? 'focused' : ''}`}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onFocus={() => setEmailFocused(true)}
                                onBlur={() => setEmailFocused(false)}
                                onChange={(e) => setEmailValue(e.target.value)}
                            />
                            <label
                                htmlFor="email"
                                className={emailValue ? "input-label" : ""}
                            >
                                Your Email
                            </label>
                        </div>
                        <div className={`input-container ${messageFocused ? 'focused' : ''}`}>
                            <textarea
                                id="message"
                                name="message"
                                onFocus={() => setMessageFocused(true)}
                                onBlur={() => setMessageFocused(false)}
                                onChange={(e) => setMessageValue(e.target.value)}
                            ></textarea>
                            <label
                                htmlFor="message"
                                className={messageValue ? "input-label" : ""}
                            >
                                Your Message
                            </label>
                        </div>
                        <input type="hidden" name="_next" value="https://legitbyte.com"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="hidden" name="_template" value="table"></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
