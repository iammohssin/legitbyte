import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonials.css'

export default class Testimonials extends Component {
    render() {
        return (
            <>
                <h2 className="text-center heading">Testimonials</h2>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >
                    <div>
                        <div className="myCarousel">
                            <h3>Fabio / Photele</h3>
                            <p>
                                I have been working with LegitByte for about a year now. They are great to work with, highly recommended.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="myCarousel">
                            <h3>Shirley</h3>
                            <p>
                            I am delighted to share my positive experience with LegitByte. Their professionalism, expertise, and commitment to excellence are truly commendable. From start to finish, the level of service and communication exceeded my expectations.
                            </p>
                        </div>
                    </div>
                </Carousel>
            </>
        );
    }
}
