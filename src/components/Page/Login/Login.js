import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import './Login.css'
const Login = () => {
  return (
    <div className="w-50 mx-auto mt-4">
      <h1 className="text-center">
        Please <span className='title-style'>Login</span>
      </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
        <Button
          className="w-25 mx-auto d-flex btn-font-style"
          variant="primary"
          type="submit"
        >
          Login <ArrowNarrowRightIcon className="icon-style text-blue-500" />
        </Button>
      </Form>
    </div>
  );
};

export default Login;