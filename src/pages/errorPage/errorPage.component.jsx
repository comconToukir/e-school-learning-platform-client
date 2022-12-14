import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  
  return (
    <div className='mt-8 py-48 text-center bg-base-200 rounded-md shadow-sm'>
      <h2 className='text-4xl'>Oops! An error has occurred.</h2>
      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default ErrorPage;