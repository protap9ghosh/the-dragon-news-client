import React from 'react';
import { Button } from 'react-bootstrap';
import bg from '../../../assets/bg.png'
import { Link } from 'react-router-dom';

const Discover = () => {
    return (
        <div className='position-relative text-white text-center'>
            <img src={bg} alt="" />
            <div className='position-absolute top-0 pt-4 mt-5 px-4'>
                <h3 className='lh-base fw-bold'>Create an Amazing Newspaper</h3>
                <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Link to={'/learn-more'}><Button className='fs-5 py-3 px-4 rounded-0' variant="danger">Learn More</Button></Link>
            </div>
        </div>
    );
};

export default Discover;