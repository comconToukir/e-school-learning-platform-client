import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import Spinner from "../../components/spinner/spinner.component";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  let category, course;

  if (location.state) {
    const {
      state: { categoryId, courseId },
    } = location;

    category = categoryId;
    course = courseId;
  }
  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location, category, course }} />
    );
  }
  return children;
};

export default PrivateRoute;
