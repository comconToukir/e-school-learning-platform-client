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
      .catch((error) => {
        if (error.message === `can't access property "getIdToken", user is null`) {
          toast.error("you are not logged in. Please log in first");
        }
        console.error(error)
      });
  };

  return (
    <div className="bg-base-200 mt-8 mb-80 p-8 rounded-md  shadow-sm">
      <p className="mb-8">
        Your email is not verified. Please verify your email address first
        before continuing.
      </p>
      <button className="btn btn-accent mr-3 capitalize" onClick={handleEmailVerification}>Send Verification email</button>
      <button className="btn  btn-outline capitalize" onClick={() => navigate('/')}>Go to Home page</button>
    </div>
  );
};

export default EmailNotVerified;
