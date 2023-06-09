import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <Container>
            <Navbar className='my-4' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fw-semibold">
                            <Link className='text-secondary text-decoration-none mt-2' to="/category/0">Home</Link>
                            <Link className='text-secondary text-decoration-none mx-4 mt-2'>About</Link>
                            <Link className='text-secondary text-decoration-none mt-2'>Career</Link>
                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle className='fs-1' />
                            }

                            {user ?
                                <Button onClick={handleLogOut} className='ms-3 rounded-1' variant="dark">Log Out</Button> :
                                <Link to="/login">
                                    <Button className='rounded-1' variant="dark">Log In</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;