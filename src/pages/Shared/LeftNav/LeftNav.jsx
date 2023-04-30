import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'
import firstPic from '../../../assets/1.png';
import secondPic from '../../../assets/2.png';
import thirdPic from '../../../assets/3.png';
import { Card, Col, Row } from 'react-bootstrap';
import { FaRegCalendar } from 'react-icons/fa';
import moment from 'moment';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])


    return (
        <div>
            <div>
                <h5>ALL Category</h5>
                <div>
                    {
                        categories.map(category => <p
                            key={category.id}
                            className='all-category'
                        >
                            <Link to={`/category/${category.id}`} className='category-name text-secondary text-dark-hover fs-5 fw-semibold text-decoration-none'>{category.name}</Link>
                        </p>)
                    }
                </div>
            </div>

            <div className='mt-3'>
                <Row xs={1} md={2} lg={1} className="g-4 pt-2">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={firstPic} />
                            <Card.Body>
                                <Card.Title className='mb-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                                <Card.Text>
                                    <span className='fw-semibold'>Sports</span> <FaRegCalendar className='text-secondary fs-5 mx-2' /> <span className='text-secondary'>{moment().format('MMMM Do, YYYY')}</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={secondPic} />
                            <Card.Body>
                                <Card.Title className='mb-4'>9 Things to do in Colorado this Labor Day weekend</Card.Title>
                                <Card.Text>
                                    <span className='fw-semibold'>Sports</span> <FaRegCalendar className='text-secondary fs-5 mx-2' /> <span className='text-secondary'>{moment().format('MMMM Do, YYYY')}</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={thirdPic} />
                            <Card.Body>
                                <Card.Title className='mb-4'>‘Self-obsessed liar’: Meghan mocked for Mandela story</Card.Title>
                                <Card.Text>
                                    <span className='fw-semibold'>Sports</span> <FaRegCalendar className='text-secondary fs-5 mx-2' /> <span className='text-secondary'>{moment().format('MMMM Do, YYYY')}</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LeftNav;