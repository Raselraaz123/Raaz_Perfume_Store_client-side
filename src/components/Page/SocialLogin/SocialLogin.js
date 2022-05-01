import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SocialLogin.css'
import facebook from '../../../img/social_icon/facebook.png'
import google from '../../../img/social_icon/google.png'
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user1, loading1, error1] =
    useSignInWithFacebook(auth);
  
  let errorElement;
  if (loading || loading1) {
    return <Loading></Loading>
  }
  if (error || error1) {
    errorElement = (
      <p className='text-danger'>Error : {error?.message} {error1?.message }</p>
    )
  }
  if (user || user1) {
    navigate("/home")
  }
  
  
  return (
    <div>
      {errorElement}
      <div className="btn-container">
        <div>
          <button
            onClick={() => signInWithFacebook()}
            className="facebook-style"
          >
            <img height={50} src={facebook} alt="" />
          </button>
        </div>
        <div>
          <button onClick={() => signInWithGoogle()} className="google-style">
            <img height={50} src={google} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;