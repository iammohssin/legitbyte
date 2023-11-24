import React from 'react'
import Card from 'react-bootstrap/Card';
import './Services.css'
import { FiMonitor } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { SiHiveBlockchain } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { LiaMedkitSolid } from "react-icons/lia";
import { CgWebsite } from "react-icons/cg";

function Services() {
    return (
        <div id='learnmore'>
            <h5 className='text-center welcome-heading'>Welcome To LegitByte</h5><br />
            <h2 className='text-center heading'>"Empowering Innovation Through Digital Solutions"
                Embrace The Future With Our Web App, Mobile App And Blockchain Services.</h2><br /><br /><br />
            <div className="services row">
                <Card style={{ width: '23rem' }} className="service-card">
                    <Card.Body>
                        <Card.Title className='card-title'><FiMonitor style={{ color: 'rgb(7, 177, 177)', marginRight: 15, fontSize: 28 }} />Responsive Web Applications</Card.Title>
                        <Card.Text className='card-text'>
                            "Seamless User Experience Across All Devices: Embrace the Power of Responsive Web Apps for Your Business Success."
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem' }} className="service-card">
                    <Card.Body>
                        <Card.Title className='card-title'><ImMobile style={{ color: 'rgb(7, 177, 177)', marginRight: 20, fontSize: 28 }} />Mobile Applications</Card.Title>
                        <Card.Text className='card-text'>
                            "Unleashing Mobility and Connectivity: Elevate Your Business with Cutting-Edge Mobile Applications for the Modern World."
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem' }} className="service-card">
                    <Card.Body>
                        <Card.Title className='card-title'><SiHiveBlockchain style={{ color: 'rgb(7, 177, 177)', marginRight: 20, fontSize: 28 }} />Blockchain Technologies</Card.Title>
                        <Card.Text className='card-text'>
                            "Empowering the Future of Trust and Decentralization: Embrace the Power of Blockchain Technologies for Secure, Transparent, and Innovative Solutions."
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem' }} className="service-card">
                    <Card.Body>
                        <Card.Title className='card-title'><FiSettings style={{ color: 'rgb(7, 177, 177)', marginRight: 20, fontSize: 28 }} />Application Evolution</Card.Title>
                        <Card.Text className='card-text'>
                            "Seamless Aftercare and Continuous Enhancements for Optimal Performance."
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem' }} className="service-card">
                    <Card.Body>
                        <Card.Title className='card-title'><LiaMedkitSolid style={{ color: 'rgb(7, 177, 177)', marginRight: 20, fontSize: 28 }} />Feature Enrichment</Card.Title>
                        <Card.Text className='card-text'>
                            "Seamlessly Expand Your Application's Capabilities and features with Additions and Enhancements."
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem' }} className="service-card">
                    <Card.Body>
                        <Card.Title className='card-title'><CgWebsite style={{ color: 'rgb(7, 177, 177)', marginRight: 20, fontSize: 28 }} />QA Testing Services</Card.Title>
                        <Card.Text className='card-text'>
                            "We meticulously assess and validate your applications, ensuring they meet the highest standards of functionality, performance, and security."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Services
