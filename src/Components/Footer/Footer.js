import React from 'react';
import './Footer.css';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <ul>
                                <li>
                                    <a href="#home">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#learnmore">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact">
                                        Contact
                                    </a>
                                </li >
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item social-links">
                            <ul>
                                <li>
                                    <a href="https://www.upwork.com/ag/legitbyte/" target='_blank' rel="noreferrer">
                                        <BiLogoUpwork />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/96117875/admin/feed/posts/" target='_blank' rel="noreferrer">
                                        <AiFillLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/legit.byte/" target='_blank' rel="noreferrer">
                                        <AiFillInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/legitbyte" target='_blank' rel="noreferrer">
                                        <FaFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <AiOutlineTwitter />
                                    </a>
                                </li >
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>LegitByte</h3>
                            <p>LegitByte is an IT company in Pakistan, Established in 2022. providing service in ERP Software Development & Consultancy, Android Application Development, E-Commerce Application & Web Development, Domain Registration & Web Hosting, IT Training Workshops.</p>
                        </div>
                        <hr />
                    </div>
                    <p class="copyright">Copyright © 2023 LegitByte | All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

