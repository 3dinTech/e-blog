import React from "react";
import AboutAnimation from "../animation/AboutAnimation.js";
import ScrollToTopButton from '../includes/Scroll-to-top.js';
import Footer from '../includes/Footer.js';
import "../css/About.css";

function About() {
    return (
        <div>
            <header className="aboutheader">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="heading-container">
                                <h1 className="header mt-3 wow fadeInUp" data-wow-duration="1.5s">About Us</h1>
                            </div>
                            <div className="button-container mt-4">
                                <a href="#des" className="read-button wow fadeInLeftBig" data-wow-duration="2s">
                                    Read More
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
                            <div className="about-anim-container wow fadeInRightBig" data-wow-duration="2s">
                                <AboutAnimation />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="des-section bg-light" id="des">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="header wow fadeInUp" data-wow-duration="1s"><i class="fa-brands fa-edge-legacy fa-sm mx-2"></i>-Blog</h1>
                            <p className="des-text mt-4 wow fadeInUp" data-wow-duration="2s">
                                Welcome to e-Blog – Your Ultimate Resource for Web Development Tutorials!
                            </p>
                            <p className="des-text wow fadeInUp" data-wow-duration="2s">
                                Dive into the world of web development with our comprehensive collection of tutorials designed to empower both beginners and seasoned developers alike. Whether you're looking to master the basics or explore advanced techniques, our curated content covers a wide range of topics to enhance your skills.
                            </p>
                            <p className="des-text wow fadeInUp" data-wow-duration="2s">
                                Explore step-by-step guides, practical tips, and hands-on examples that demystify web development concepts. From HTML and CSS fundamentals to JavaScript, frameworks, and beyond, [e-blog] is your go-to hub for learning and staying updated in the ever-evolving field of web development.
                            </p>
                            <p className="des-text mt-5 wow fadeInUp" data-wow-duration="2s">
                                Why choose e-Blog?
                            </p>
                            <p className="des-text wow fadeInUp" data-wow-duration="2s">
                                <b>Expert Guidance:</b> Our tutorials are crafted by seasoned professionals in the industry, ensuring you receive high-quality, accurate information.
                            </p>
                            <p className="des-text wow fadeInUp" data-wow-duration="2s">
                                <b>Diverse Topics:</b> Whether you're interested in front-end development, back-end technologies, or the latest trends in web design, we've got you covered.
                            </p>
                            <p className="des-text wow fadeInUp" data-wow-duration="2s">
                                <b>Interactive Learning:</b> Engage with interactive examples and projects to reinforce your understanding and apply what you've learned in real-world scenarios.
                            </p>
                            <p className="des-text wow fadeInUp" data-wow-duration="2s">
                                <b>Community Support:</b> Connect with a vibrant community of learners, ask questions, and share your experiences as you embark on your web development journey.
                            </p>
                            <p className="des-text wow fadeInUp" data-wow-duration="2s">
                                Start your learning adventure today with e-Blog and unlock the skills you need to build powerful, responsive, and dynamic websites. Happy coding!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTopButton />
        </div>
    );
}

export default About;
