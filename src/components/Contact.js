import React, { useRef } from "react";
import { useState } from 'react';
import HomeNav from "./HomeNav";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        console.log("sendEmail", e.target)
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        emailjs
            .sendForm(
                'service_5hby1s2',
                'template_q0ppzsn',
                form.current,
                'Y_4K6tMxI1KMKJa1p'
            )
            .then(
                (result) => {
                    setStateMessage('Message sent!');
                    setIsSubmitting(false);
                    console.log("result", result)
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // hide message after 5 seconds
                },
                (error) => {
                    setStateMessage('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // hide message after 5 seconds
                }
            );

        // Clears the form after sending the email
        // e.target.reset();
    };
    return (
        <div data-aos="fade-down">
            <HomeNav primary={false} />
            <div className="container bg-primary max-w-[100%] fixed overflow-auto mx-auto pl-[10%] pr-[5%] h-screen">
                <div className="wrapper block max-w-[90%] relative mx-auto pl-[5%] pr-[5%] h-screen">
                    <div className="work-section max-w-[90%] relative mx-auto py-[10%] pr-[5%];">
                        <div className="content block text-accent text-left">
                            <div className="header-container overflow-hidden mb-[2vh] pt-[5%]">
                            <div data-aos="fade-left" className="header-item text-shadow-lg text-8xl max-sm:text-4xl">Contact</div>
                                <div className="flex flex-wrap pt-[2%]">
                                    <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                                        <h2 className="mb-6 text-3xl max-sm:text-2xl font-bold">Hello!</h2>
                                        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                                            If you're looking for an opportunity to foster mutual growth, feel free to reach out.
                                        </p>
                                        <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                                            <FontAwesomeIcon icon={faLocationDot} /> Toronto, Canada

                                        </p>
                                        <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                                            <FontAwesomeIcon icon={faEnvelope} /> shefyaneabraham@gmail.com
                                        </p>
                                    </div>
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                                        <form novalidate ref={form} onSubmit={sendEmail}>
                                            <div class="mb-6">
                                                <div class="mx-0 mb-1 sm:mb-4">
                                                    <div class="mx-0 mb-1 sm:mb-4">
                                                        <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label>
                                                        <input 
                                                        type="text" 
                                                        id="name" 
                                                        autocomplete="given-name" 
                                                        minlength="3"
                                                        required
                                                        placeholder="Your name" 
                                                        class="mb-2 w-full rounded-md py-2 pl-2 pr-4 shadow-md sm:mb-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary" 
                                                        name="name"/>
                                                    </div>
                                                    <div class="mx-0 mb-1 sm:mb-4">
                                                        <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label>
                                                        <input type="email" required id="email" autocomplete="email" placeholder="Your email address" class="mb-2 w-full rounded-md py-2 pl-2 pr-4 shadow-md sm:mb-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary" name="email"/>
                                                    </div>
                                                </div>
                                                <div class="mx-0 mb-1 sm:mb-4">
                                                    <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label>
                                                    <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md py-2 pl-2 pr-4 shadow-md sm:mb-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary"></textarea>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <button type="submit" class="w-full bg-secondary text-secondary px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                            </div>
                                            {stateMessage && <p>{stateMessage}</p>}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Contact;