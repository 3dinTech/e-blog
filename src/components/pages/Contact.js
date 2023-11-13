import React from "react";
import ContactUSAnimation from "../animation/ContactUSAnimation.js";
import ScrollToTopButton from '../includes/Scroll-to-top.js';
import Footer from '../includes/Footer.js';
import "../css/Contact.css";

function Contact() {
    return (
        <div>
            <header className="contactheader">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="heading-container">
                                <h1 className="header mt-3 wow fadeInUp" data-wow-duration="2s">Contact Us</h1>
                            </div>
                            <div className="button-container mt-4">
                                <a href="#contact-input" className="contact-button wow fadeInLeftBig" data-wow-duration="2s">
                                    Contact Below
                                    <div className="icon">
                                        <svg
                                            height="24"
                                            width="24"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path
                                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contactus-anim-container">
                                <ContactUSAnimation />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="contact-input-section bg-light" id="contact-input">
                <div className="container">
                    <div className="row input-container">
                        <h1 className="header wow fadeInUp" data-wow-duration="1.5s">Get in touch</h1>
                        <div className="input-row">
                            <form>
                                <div className="mb-4">
                                    <label className="form-label input-label wow fadeInUp" data-wow-duration="2s">Name <span className="required">*</span></label>
                                    <input type="text" className="form-control form-control-lg" placeholder="Full name" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label input-label wow fadeInUp" data-wow-duration="2s">Contact No. <span className="required">*</span></label>
                                    <input type="email" className="form-control form-control-lg" placeholder="Contact no." />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label input-label wow fadeInUp" data-wow-duration="2s">Email <span className="required">*</span></label>
                                    <input type="email" className="form-control form-control-lg" placeholder="Email address" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label input-label wow fadeInUp" data-wow-duration="2s">Message <span className="required">*</span></label>
                                    <textarea type="email" className="form-control form-control-lg" rows={10} placeholder="Message"></textarea>
                                </div>
                                <button className="btn-send wow fadeInUp" data-wow-duration="2s">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTopButton />
        </div>
    )
}

export default Contact;