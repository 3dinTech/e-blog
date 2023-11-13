import React from "react";
import "../css/Footer.css";

function Footer() {
    return (
        <div>
            <footer class="footer py-3 custom-bg-light">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 text-lg-start copyright">
                            Copyright &copy; <i class="fa-brands fa-edge-legacy fa-xs"></i> -
                            Blog 2023
                        </div>
                        <div class="col-lg-4 my-3 my-lg-0">
                            <a
                                class="btn btn-dark btn-social mx-2 text-white"
                                href="#"
                                aria-label="Facebook"
                            >
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a
                                class="btn btn-dark btn-social mx-2 text-white"
                                href="#"
                                aria-label="Twitter"
                            >
                                <i class="fab fa-github"></i>
                            </a>
                            <a
                                class="btn btn-dark btn-social mx-2 text-white"
                                href="#"
                                aria-label="LinkedIn"
                            >
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <div class="col-lg-4 text-lg-end">
                            <a class="link me-3" href="#">
                                Privacy Policy
                            </a>
                            <a class="link" href="#">
                                Terms of Use
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
