import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <Form className='w-50 mx-auto border p-5 rounded shadow'>
                <h3 className='text-center'>Login your account</h3>
                <hr className='my-5 text-secondary' />
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className='w-100 rounded-1 mb-4' variant="dark" type="submit">
                    LogIn
                </Button>
                <br />
                <Form.Text className="ms-5 ps-4 text-muted fw-semibold">
                    <span className='ms-5'>
                        Don&lsquo;t Have an Account? <Link className="text-danger text-decoration-none" to="/register">Register</Link>
                    </span>
                    
                </Form.Text>
                <Form.Text className="text-success">
                    
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;