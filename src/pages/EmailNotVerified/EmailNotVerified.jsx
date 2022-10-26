import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'

import { verifyEmail } from '../../utils/firebase.utils';

const EmailNotVerified = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        toast.success('Verification email has been sent. Please check your email address')
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-slate-900 mt-8 p-8 rounded-md">
      <p className="mb-8">
        Your email is not verified. Please verify your email address first
        before continuing.
      </p>
      <button className="btn btn-accent mr-3" onClick={handleEmailVerification}>Send Verification email</button>
      <button className="btn  btn-outline" onClick={() => navigate('/')}>Go to Home page</button>
    </div>
  );
};

export default EmailNotVerified;
