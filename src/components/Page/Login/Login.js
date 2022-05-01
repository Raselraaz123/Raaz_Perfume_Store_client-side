import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from '../SocialLogin/SocialLogin';
import Or from '../Or/Or';
  


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const location = useLocation();

   const handleEmail = (event) => {
     setEmail(event.target.value);
   };

   const handlePassword = (event) => {
     setPassword(event.target.value);
   };

  let from = location.state?.from?.pathname || "/"; 

  let errorElement;

 const [signInWithEmailAndPassword, user, loading, error] =
   useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  
  if (loading || sending) {
  return <Loading></Loading>
}

      if (user) {
        navigate(from, { replace: true });
      }
  
   if (error) {
     errorElement = <p className="text-danger">Error: {error?.message}</p>;
   }




  const handleFormSubmit = event => {
    event.preventDefault();
      signInWithEmailAndPassword(email, password);
  }
  const navigateRegister = (event) => {
    navigate("/register");
  };

  const ResetPassword = (event) => {
    if (email) {
      sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };


  return (
    <div className="w-50 mx-auto mt-4">
      <h1 className="text-center">
        Please <span className="title-style">Login</span>
      </h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorElement}
        <Button
          className="w-50 mx-auto d-flex btn-font-style"
          variant="primary"
          type="submit"
        >
          Login <ArrowNarrowRightIcon className="icon-style text-blue-500" />
        </Button>
      </Form>
      <p className="mt-3">
        First time come our website ?{" "}
        <Link
          className="text-decoration-none"
          onClick={navigateRegister}
          to="/register"
        >
          Please Register
        </Link>
      </p>
      <p className="">
        Reset Password ?
        <button
          className="btn btn-link  pe-auto text-decoration-none "
          onClick={ResetPassword}
        >
          Reset Password
        </button>
      </p>
<Or></Or>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;