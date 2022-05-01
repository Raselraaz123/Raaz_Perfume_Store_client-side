import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {


 const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(name, email, password)   
  
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


  if (loading) {
  return <Loading></Loading>
}

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  const handleName = event => {
  setName(event.target.value)
}
  const handleEmail = event => {
  setEmail(event.target.value)
}
  const handlePassword = event => {
   setPassword(event.target.value)
 }

  const navigateLogin = event => {
    navigate('/login')
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    navigate('/home')
}


  return (
    <div className="w-50 mx-auto mt-4">
      <h1 className="text-center">
        Please <span className="title-style"> Register</span>
      </h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
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
        Already have a account ?
        <Link
          className="text-decoration-none"
          onClick={navigateLogin}
          to="/login"
        >
          Please login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;