import React from "react";
import { useContext } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return (
      <InfinitySpin width="200" color="#4fa94d">
        <span className="invisible ">Loading...</span>
      </InfinitySpin>
    );
  }

  if (user && !user.emailVerified) {
    return <Navigate to="/verify-email" state={{ from: location }} replace />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
