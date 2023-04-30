import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import Discover from '../Discover/Discover';

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
                <Discover></Discover>
            </div>
        </div>
    );
};

export default RightNav;