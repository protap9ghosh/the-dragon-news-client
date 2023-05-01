import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <Container>
            <div className="text-center">
                <Link to="/"><img className='mt-4 mb-3' src={logo} alt="" /></Link>
                <p className='text-secondary fs-5 mb-2'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm A")}</p>
            </div>

            <div className='d-flex mb-4 p-2 rounded-1 bg-info bg-opacity-10'>
                <Button className='rounded-1 py-1' variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={70} pauseOnHover={true}>
                    <span className='me-5'>Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine...<Link>Read More</Link></span>
                    <span className='me-5'>US to name military mission in Ukraine and appoint commander - WSJ...<Link>Read More</Link></span>
                </Marquee>
            </div>

            
        </Container>
    );
};

export default Header;