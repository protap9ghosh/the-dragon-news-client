import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <Container>
            <Form className='w-25 mx-auto'>
                <h3>Please LogIn</h3>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Form.Text className="text-success">
                    
                </Form.Text>
                <Form.Text className="text-success">
                    
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;