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
    <div>
      <p>
        Your email is not verified. Please verify your email address first
        before proceeding.
      </p>
      <button onClick={handleEmailVerification}>Send Verification email</button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default EmailNotVerified;
