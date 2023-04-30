import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <Link><img className='mt-4 mb-3' src={logo} alt="" /></Link>
                <p className='text-secondary fs-5'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm A")}</p>
            </div>

            <div className='d-flex my-4 p-2 fs-5 rounded-1 bg-info bg-opacity-10'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={70} pauseOnHover={true}>I can be a React component, multiple React components, or just some text...</Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#profile" className='mt-1'>Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button className='py-1' variant="secondary">Log In</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;