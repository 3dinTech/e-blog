import React from "react";
import { Link } from "react-router-dom";
import ConAnimation from "../animation/ConAnimation.js";
import HomeAnimation from "../animation/HomeHeaderAnim.js";
import ScrollToTopButton from '../includes/Scroll-to-top.js';
import Footer from '../includes/Footer.js';
import "../css/Home.css";

function Home() {
  return (
    <div>
      <header className="masterheader">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="heading-container">
                <h3 className="sub-heading wow fadeInUp" data-wow-duration="1s">Welcome to</h3>
                <h1 className="header mt-3 wow fadeInUp" data-wow-duration="2s">
                  <i className="fa-brands fa-edge-legacy fa-sm mx-2"></i>-Blog
                </h1>
              </div>
              <div className="button-container mt-4">
                <a href="#cat" className="explore-button wow fadeInLeftBig" data-wow-duration="2s">
                  Explore More
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
              <div className="home-anim-container">
                <HomeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="category-section bg-dark" id="cat">
        <div className="container position-relative">
          <div className="row mb-4 justify-content-center wow fadeInUp" data-wow-duration="2s">
            <div className="col-md-2">
              <div className="row mb-4">
                <i className="fa-brands fa-html5 prog-icon"></i>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row mb-4">
                <i className="fa-brands fa-css3-alt prog-icon"></i>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row mb-4">
                <i className="fa-brands fa-square-js prog-icon"></i>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row mb-4">
                <i className="fa-brands fa-react prog-icon"></i>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row mb-4">
                <i className="fa-brands fa-vuejs prog-icon"></i>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row mb-4">
                <i className="fa-brands fa-angular prog-icon"></i>
              </div>
            </div>
          </div>
          <div className="row justify-content-center wow fadeInUp" data-wow-duration="3s">
            <div className="col-md-2">
              <div className="row mb-4">
                <i className="fa-brands fa-node prog-icon"></i>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row mb-4">
                <i className="fa-brands fa-git prog-icon"></i>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row mb-4">
                <i className="fa-brands fa-github prog-icon"></i>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row mb-4">
                <i className="fa-brands fa-php prog-icon"></i>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row mb-4">
                <i className="fa-brands fa-python prog-icon"></i>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row mb-4">
                <i className="fa-brands fa-java prog-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="post-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3 className="sub-heading mb-5 wow fadeInUp" data-wow-duration="1s">New Post</h3>
              <div className="row mb-3">
                <div className="col wow fadeInUp" data-wow-duration="2s">
                  <a href="#" className="title">Basic PHP CRUD for beginners</a>
                </div>
                <span className="mb-3 text-muted wow fadeInUp" data-wow-duration="1s">
                  Posted on October 03, 2023
                </span>
              </div>
              <div className="row mb-3">
                <div className="col wow fadeInUp" data-wow-duration="3s">
                  <a href="#" className="title">PHP CRUD with Bootstrap Modal</a>
                </div>
                <span className="mb-3 text-muted wow fadeInUp" data-wow-duration="2s">
                  Posted on October 07, 2023
                </span>
              </div>
              <div className="row mb-3">
                <div className="col wow fadeInUp" data-wow-duration="4s">
                  <a href="#" className="title">
                    CRUD using PHP, AJAX + Loading Animation
                  </a>
                </div>
                <span className="mb-3 text-muted wow fadeInUp" data-wow-duration="3s">
                  Posted on October 10, 2023
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow wow fadeInRightBig" data-wow-duration="3s">
                <div className="card-header">Other Post</div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <a href="#" className="card-title">
                        HTML for beginners
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="#" className="card-title">
                        CSS for beginners
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="#" className="card-title">
                        React for beginners
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="#" className="card-title">
                        PHP tutorial
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="#" className="card-title">
                        JavaScript tutorial
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="row justify-content-center">
                <div className="row">
                  <h1 className="header text-white mt-4 wow fadeInUp" data-wow-duration="1s">
                    If you have something to say
                  </h1>
                  <span className="contact-description text-white wow fadeInUp" data-wow-duration="2s">
                    Contact me below, I will get back to you as soon as posible.
                  </span>
                </div>
                <div className="button-container mb-3">
                  <Link to="/contact" className="btn-contact wow fadeInLeftBig" data-wow-duration="3s">
                    Contact Us
                    <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                      <path
                        clip-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="contact-anim-container wow fadeInRightBig" data-wow-duration="3s">
                <ConAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>

        <Footer />
        <ScrollToTopButton />
    </div>
  );
}

export default Home;
