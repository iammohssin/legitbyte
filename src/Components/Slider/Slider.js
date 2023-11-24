import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../images/02.jpg";
import image2 from "../../images/03.jpg";
import "./Slider.css";
import { FiChevronsDown } from "react-icons/fi";

function MainSlider() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="home">
            <div className="slider-container">
                <Carousel data-bs-theme="light">
                    <Carousel.Item className="carousel-sec">
                        <img className="d-block w-100" src={image1} alt="First slide" />
                        <Carousel.Caption>
                            <h1 className="image-caption">Empowering Innovation<br />for a Digital Universe</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-sec">
                        <img className="d-block w-100" src={image2} alt="Second slide" />
                        <Carousel.Caption>
                            <h2 className="image-caption">We Transform Visions into Reality<br />Embrace the Future with our<br />Services</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="learnmore-section">
                    <a href="#learnmore" className="learnmore-btn" id="symbol" style={{ marginBottom: 25, fontSize: 28 }}><FiChevronsDown /></a>
                    <a href="#learnmore" className="learnmore-btn">Learn More</a>
                </div>
            </div>
            <div className={`back-to-top ${scrolling ? "scrolling" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <span></span>
            </div>
        </div>
    );
}

export default MainSlider;