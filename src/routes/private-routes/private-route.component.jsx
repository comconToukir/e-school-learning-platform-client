import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import Spinner from "../../components/spinner/spinner.component";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  console.log(location);

  const {
    state: { categoryId, courseId },
  } = location;

  if (loading) {
    return <Spinner />;
  }

  if (user && !user.emailVerified) {
    return (
      <Navigate
        to="/verify-email"
        state={{ from: location, categoryId, courseId }}
      />
    );
  }

  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location, categoryId, courseId }} />
    );
  }
  return children;
};

export default PrivateRoute;
