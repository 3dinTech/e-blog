import React from "react";
import BlogAnimation from "../animation/BlogAnimation.js";
import Footer from '../includes/Footer.js';
import ScrollToTopButton from '../includes/Scroll-to-top.js';
import "../css/Blog.css";

function Blog() {
    return (
        <div>
            <header className="blogtheader">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="heading-container">
                                <h1 className="header mt-3 wow fadeInLeftBig" data-wow-duration="1.5s">Blog</h1>
                                <p className="blog-des wow fadeInUp" data-wow-duration="2.5s">List of web development toturials</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog-anim-container wow fadeInRightBig" data-wow-duration="1.5s">
                                <BlogAnimation />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="category-section bg-light">
                <div className="container">
                    <div className="row cat-containers">
                        <div className="col-md-5 cat-container">
                            <button class="btn btn-primary btn-lg btn-cat wow fadeInLeftBig" data-wow-duration="2s" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-bars"></i> Categories</button>

                            <div class="offcanvas offcanvas-start shadow" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Category List</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <p>
                                        <div class="align-items-center">
                                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                <button className="nav-link btn-text active" id="v-pills-html-tab" data-bs-toggle="pill" data-bs-target="#v-pills-html" type="button" role="tab" aria-controls="v-pills-html" aria-selected="false">HTML</button>
                                                <button className="nav-link btn-text" id="v-pills-css-tab" data-bs-toggle="pill" data-bs-target="#v-pills-css" type="button" role="tab" aria-controls="v-pills-css" aria-selected="false">CSS</button>
                                                <button className="nav-link btn-text" id="v-pills-js-tab" data-bs-toggle="pill" data-bs-target="#v-pills-js" type="button" role="tab" aria-controls="v-pills-js" aria-selected="false">JavaScript</button>
                                                <button className="nav-link btn-text" id="v-pills-php-tab" data-bs-toggle="pill" data-bs-target="#v-pills-php" type="button" role="tab" aria-controls="v-pills-php" aria-selected="false">PHP</button>
                                            </div>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="tab-content tab-content-container wow fadeInUp" data-wow-duration="2s" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-html" role="tabpanel" aria-labelledby="v-pills-html-tab" tabindex="0">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Introduction</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Basics</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Elements</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Attributes</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Headings</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Paragraphs</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Styles</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Formatting</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Comments</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Colors</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML CSS</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Links</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Images</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Page Title</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Tables</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Lists</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Div</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Classes</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML File Paths</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Head</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Layout</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML Semantics</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">HTML URL Encode</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-css" role="tabpanel" aria-labelledby="v-pills-css-tab" tabindex="0">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Introduction</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Syntax</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Selectors</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Comments</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Colors</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Backgrounds</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Borders</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Margins</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Padding</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Height/Width</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Box Model</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Outline</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Text</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Fonts</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Icons</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Links</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Lists</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Tables</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Display</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Max-width</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Position</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Z-index</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">CSS Overflow</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-js" role="tabpanel" aria-labelledby="v-pills-js-tab" tabindex="0">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Introduction</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Output</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Statements</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Syntax</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Variables</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Let</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Const</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Operators</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Data Types</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Functions</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Objects</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Events</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Strings</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Numbers</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Arrays</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Dates</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Math</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Booleans</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript If Else</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Switch</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Loop For</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Break</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript JSON</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">JavaScript Style Guide</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-php" role="tabpanel" aria-labelledby="v-pills-php-tab" tabindex="0">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Introduction</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Install</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Syntax</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Variables</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Echo/Print</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Data Types</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Strings</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Numbers</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Math</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Constants</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Operators</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP If Else</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Switch</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Loops</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Functions</a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <a href="#" className="title">PHP Arrays</a>
                                        </div>
                                    </div>
                                </div>
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

export default Blog;
