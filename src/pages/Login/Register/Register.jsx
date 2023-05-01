import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container>
            <Form className='w-50 mx-auto border pt-4 px-5 pb-4 mb-5 rounded shadow'>
                <h3 className='text-center'>Register your account</h3>
                <hr className='mt-4 mb-5 text-secondary' />
                
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" required />
                </Form.Group>
                
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="accept" label="Accept Term & Conditions" />
                </Form.Group>

                <Button className='w-100 rounded-1 mb-4' variant="dark" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="ms-5 ps-4 text-muted fw-semibold">
                    <span className='ms-5'>
                        Already Have an Account? <Link className="text-danger text-decoration-none" to="/login">LogIn</Link>
                    </span>

                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;