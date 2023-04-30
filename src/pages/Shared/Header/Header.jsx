import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <Container>
            <div className="text-center">
                <Link><img className='mt-4 mb-3' src={logo} alt="" /></Link>
                <p className='text-secondary fs-5'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm A")}</p>
            </div>

            <div className='d-flex my-4 p-2 rounded-1 bg-info bg-opacity-10'>
                <Button className='rounded-1 py-1' variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={70} pauseOnHover={true}>
                    <span className='me-5'>Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine...<Link>Read More</Link></span>
                    <span className='me-5'>US to name military mission in Ukraine and appoint commander - WSJ...<Link>Read More</Link></span>
                </Marquee>
            </div>

            <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fw-semibold">
                            <Nav.Link href="#home">
                                <Link className='text-secondary text-decoration-none' to="/">Home</Link>
                            </Nav.Link>

                            <Nav.Link href="#about">About</Nav.Link>

                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link className='fw-semibold' href="#profile">
                                <FaUserCircle className='fs-1' />
                            </Nav.Link>}

                            <Nav.Link eventKey={2} href="#memes">
                                {user ?
                                    <Button className='py-1' variant="secondary">Log Out</Button> :
                                    <Link to="/login"><Button className='py-1' variant="secondary">Log In</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;