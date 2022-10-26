import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

import Spinner from "../spinner/spinner.component";
import CourseCard from "../course-card/course-card.component";
import ErrorPage from "../../pages/errorPage/errorPage.component";

const CoursesContainer = () => {
  const { categoryId } = useParams();
  
  let id = "";

  if (!categoryId) {
    id = "6s5df5sdsm";
  } else {
    id = categoryId;
  }
  const { isLoading, data, isError } = useQuery(id, () => {
    return axios.get(`http://localhost:5001/courses/${id}`);
  });

  if (isLoading) return <Spinner />;

  if (isError) return <ErrorPage />


  const courses = data.data;

  if (courses.length === 0) {
    return (
      <div className="p-8 text-2xl">No courses for this category</div>
    )
  }

  return (
    <div className="py-3 pl-0  lg:pl-3 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        courses.map(crs => <CourseCard key={crs.id} courseData={crs} />)
      }
    </div>
  );
};

export default CoursesContainer;
