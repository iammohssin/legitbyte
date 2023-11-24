import React, { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Navbar.css';

function Header() {
    const [navbarBackground, setNavbarBackground] = useState('transparent');

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 80) {
            setNavbarBackground('black');
        } else {
            setNavbarBackground('transparent');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar className={`bg-${navbarBackground}`} data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    {/* <Nav className="me-auto mx-5">
                        <Nav.Link href="#home" className='mx-5'>Home</Nav.Link>
                        <Nav.Link href="#aboutus" className='mx-5'>About Us</Nav.Link>
                        <Nav.Link href="#projects" className='mx-5'>Projects</Nav.Link>
                        <Nav.Link href="#contactus" className='mx-5'>Contact Us</Nav.Link>
                    </Nav> */}
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
