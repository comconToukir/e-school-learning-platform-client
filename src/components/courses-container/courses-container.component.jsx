import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

import Spinner from "../spinner/spinner.component";

const CoursesContainer = () => {
  const { id } = useParams();

  const { isLoading, data, isError } = useQuery(id, () => {
    return axios.get(`http://localhost:5001/courses/${id}`);
  });

  if (isLoading) return <Spinner />;

  // console.log(data.data);
  console.log('fetching')

  return (
    <div>
      <p>{id}</p>
      <ul>
        {data.data.map(dt => <li>{dt.course_Name}</li>)}
      </ul>
    </div>
  );
};

export default CoursesContainer;
