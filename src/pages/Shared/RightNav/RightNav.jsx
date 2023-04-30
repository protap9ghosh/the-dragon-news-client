import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import { Link } from 'react-router-dom';

const RightNav = () => {
    return (
        <div>
            <div>
                <h5>Login With</h5>
                <Button className='w-100 mt-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button className='w-100 mt-2 pe-3' variant="outline-dark"><FaGithub /> Login With Github</Button>
            </div>

            <div>
                <h5 className='mt-5 mb-3'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item action variant="primary" href="https://www.facebook.com/"><FaFacebookF /> Facebook</ListGroup.Item>
                    <ListGroup.Item action variant="info" href="https://www.twitter.com"> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item action variant="danger" href="https://www.instagram.com"> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
                <QZone></QZone>
                <div className='position-relative text-white text-center'>
                    <img src={bg} alt="" />
                    <div className='position-absolute top-0 pt-4 mt-5 px-4'>
                        <h3 className='lh-base fw-bold'>Create an Amazing Newspaper</h3>
                        <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <Link>
                            <Button className='fs-5 py-3 px-4 rounded-0' variant="danger">Learn More</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;