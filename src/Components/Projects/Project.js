import React, { useState } from 'react';
import './Project.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../../images/11.png'
import image2 from '../../images/09.png'
import image3 from '../../images/13.png'
import image4 from '../../images/12.png'
import image5 from '../../images/13.webp'
import image6 from '../../images/14.png'
import image7 from '../../images/15.jpeg'
import { AiOutlineLine } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';

function ProjectCard({ project, onCardClick }) {
    return (
        <Card
            key={project.id}
            className="project-card"
            style={{ backgroundColor: '#205b6d', color: 'white', borderRadius: '18px' }}
            onClick={() => onCardClick(project)}
        >
            <div style={{ height: '370px', overflow: 'hidden' }}>
                <Card.Img variant="top" src={project.image} className='card-img my-3' />
            </div>
            <Card.Body style={{ height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <Card.Title style={{ fontSize: 18 }}>{project.title}</Card.Title>
                </div>
                <div className="card-buttons" style={{ marginBottom: '10px' }}>
                    <Button
                        variant="dark-outline"
                        className='card-btn'
                        onClick={(e) => {
                            e.stopPropagation();
                            onCardClick(project);
                        }}
                        style={{ width: '80px', borderColor: '#fff', color: 'white' }}
                    >
                        Details
                    </Button>
                    <Button
                        variant="light-outline"
                        href={project.visitLink}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="mx-2 card-btn-2"
                        style={project.visitBtn}
                    >
                        Visit
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

function Project() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const projects = [
        {
            id: 1,
            title: 'Photographer Booking App',
            image: image1,
            img: image1,
            details: 'A premier photography platform linking users and photographers. Streamlined bookings, secure payments, and photographer payment assurance post-shoot.',
            visitLink: 'https://www.photele.com',
        },
        {
            id: 2,
            title: 'Messenger For Photele',
            image: image4,
            img: image4,
            details: 'Photographer’s can chat with customers about photoshoots and share ideas directly through Photele Messenger.',
            visitBtn: { visibility: 'hidden' },
        },
        {
            id: 3,
            title: 'Food Ordering Platform',
            image: image2,
            img: image2,
            details: 'd-vour is an online fresh food delivery service in the United States.The only platform which offers a unique search capability that allows users to access hundreds of unique and popular dishes based on country or dish reference, you can order your favorite food made by the chef of your choice, home-cooked, restaurant or professional.',
            visitLink: 'https://d-vour.com',
        },
        {
            id: 4,
            title: 'Restaurant Dashboard',
            image: image3,
            img: image3,
            details: 'Chefs and restaurant owners can use their dashboard to manage their menus, track orders and manage payments.',
            visitLink: 'https://console.d-vour.com',
        },
        {
            id: 5,
            title: 'Supportive Hearts',
            image: image7,
            img: image7,
            details: 'Supportive Hearts NGO is a compassionate organization dedicated to providing assistance and hope to those in need.',
            visitLink: 'https://play.google.com/store/apps/details?id=com.whetcloud.de_vour_chef',
            style: { width: '19vh', maxHeight: 400, margin: 'auto', display: 'block' },
            visitBtn: { visibility: 'hidden' },
        },
        {
            id: 6,
            title: 'Forunpoint',
            image: image6,
            img: image6,
            details: 'Forunpoint is a delivery service that is making it easier for you to get everything you need delivered in one simple mobile app. Based in Frisco, Texas, USA',
            visitBtn: { visibility: 'hidden' },
        },
    ];

    return (
        <div className='projects row'>
            <h1 className="text-center">Projects</h1>
            <AiOutlineLine className='text-center' style={{ fontSize: 60, color: "#205b6d", marginBottom: 50, marginTop: '-30px' }} />
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onCardClick={handleCardClick} />
            ))}

            {selectedProject && (
                <Modal show={showModal} onHide={handleCloseModal} dialogClassName="modal-dialog">
                    <Modal.Header closeButton>
                        <Modal.Title className='modal-title'>Project Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <h4 className='text-center'>{selectedProject.title}</h4>
                            <img src={selectedProject.img} alt={selectedProject.title} style={selectedProject.style} className="modal-image" />
                            <p className='text-center proj-desc'>{selectedProject.details}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light-outline" onClick={handleCloseModal} className='card-btn-2'>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default Project;
