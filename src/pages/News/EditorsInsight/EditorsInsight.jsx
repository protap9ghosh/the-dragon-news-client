import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import firstPic from '../../../assets/1.png';
import secondPic from '../../../assets/2.png';
import thirdPic from '../../../assets/3.png';
import moment from 'moment';
import { FaRegCalendar } from 'react-icons/fa';

const EditorsInsight = () => {
    // const { title, details, image_url, author, rating, total_view } = news;

    return (
        <div className='mt-5'>
            <h4>Editors Insight</h4>
            <Row xs={1} md={2} lg={3} className="g-4 pt-2">
                <Col>
                    <Card>
                        <Card.Img className='p-2' variant="top" src={firstPic} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='mt-3'>
                                Mercedes’ George Russell arrived at the Zandvoort paddock wearing a Daniel Ricciardo merchandise ahead of the Dutch GP.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <FaRegCalendar className='text-secondary fs-5 mx-2' /> <span className='text-secondary fw-semibold'>{moment().format('MMMM Do, YYYY')}</span>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img className='p-2' variant="top" src={secondPic} />
                        <Card.Body>
                            <Card.Title>9 Things to do in Colorado this Labor Day weekend</Card.Title>
                            <Card.Text className='mt-3'>
                                Strong rumors have linked him back to a move to Alpine. Team boss Otmar Szafnauer has not confirmed anything as of yet, but he remains the favorite.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <FaRegCalendar className='text-secondary fs-5 mx-2' /> <span className='text-secondary fw-semibold'>{moment().format('MMMM Do, YYYY')}</span>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img className='p-2' variant="top" src={thirdPic} />
                        <Card.Body>
                            <Card.Title>‘Self-obsessed liar’: Meghan mocked for Mandela story</Card.Title>
                            <Card.Text className='mt-3'>
                                This is especially because their junior driver Oscar Piastri, who was first choice to replace at the team is reportedly on his way to McLaren.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <FaRegCalendar className='text-secondary fs-5 mx-2' /> <span className='text-secondary fw-semibold'>{moment().format('MMMM Do, YYYY')}</span>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditorsInsight;