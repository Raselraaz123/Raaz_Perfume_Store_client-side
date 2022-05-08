import React from 'react';
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

import auth from '../../../firebase.init'

const RequierAuth = ({ children }) => {
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  
  if (loading) {
    return <Loading></Loading>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
}
  if (user.providerData[0].providerId === "password" && !user.emailVerified) {
   return (
     <div>
       <h4 className="text-danger text-center">Your email is not verified. </h4>
       <h5 className="text-success">Please verified your email address</h5>
       <button
         className="btn btn-primary"
         onClick={async () => {
           await sendEmailVerification();
           toast("send email");
         }}
       >
         send verification email Again
       </button>
     </div>
   );
}
 return children
};

export default RequierAuth;