import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: "50px" }} src={author?.img} roundedCircle />
                <div className='ps-3 flex-grow-1'>
                    <p className='mb-0 fw-bold'>{author?.name}</p>
                    <p className='m-0'><small>{moment(author?.published_date).format('YYYY-MM-DD')}</small></p>
                </div>
                <div>
                    <Link><FaRegBookmark className='me-3 fs-4 text-secondary' /></Link>
                    <Link><FaShareAlt className='fs-4 text-secondary' /></Link>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='my-4' variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 300 ? <>{details}</> : <>{details.slice(0, 300)}... <Link to={`/news/${_id}`} className='text-warning text-decoration-none fw-semibold'>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='d-flex align-items-center flex-grow-1'>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={Math.round(rating?.number || 0)} readOnly />
                    <span className='ms-2'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-1' /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;