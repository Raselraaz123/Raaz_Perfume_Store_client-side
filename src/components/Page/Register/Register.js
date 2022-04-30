import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {



  const navigate = useNavigate();

  const navigateLogin = event => {
    navigate('/login')
  }
  return (
    <div className="w-50 mx-auto mt-4">
      <h1 className="text-center">
        Please <span className="title-style"> Register</span>
      </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          className="w-50 mx-auto d-flex btn-font-style"
          variant="primary"
          type="submit"
        >
          Register <ArrowNarrowRightIcon className="icon-style text-blue-500" />
        </Button>
      </Form>
      <p className="mt-3">
        Already have a account ?{" "}
        <Link
          className="text-decoration-none"
          onClick={navigateLogin}
          to="/login"
        >
          Please login
        </Link>
      </p>
    </div>
  );
};

export default Register;