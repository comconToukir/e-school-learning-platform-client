import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { PieChart } from "react-minimal-pie-chart";
import { FaStar } from "react-icons/fa";

import Spinner from "../spinner/spinner.component";
import ErrorPage from "./../../pages/errorPage/errorPage.component";
import Rating from "../rating/rating.component";

const CourseDetail = () => {
  const { categoryId, courseId } = useParams();

  const { isLoading, data, isError } = useQuery(courseId, () => {
    return axios.get(`http://localhost:5001/courses/${categoryId}/${courseId}`);
  });

  if (isLoading) return <Spinner />;

  if (isError) return <ErrorPage />;

  const { image_url, course_name, acceptance, price, description, reviews } =
    data.data;

  const chartData = [
    { title: "Happy students", value: acceptance, color: "#E38627" },
    { title: "Others", value: 100 - acceptance, color: "#C13C37" },
  ];

  console.log(acceptance);

  return (
    <div className="p-3 min-h-full">
      <h2 className="text-4xl font-semibold mb-7">{course_name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
        <div>
          <img src={image_url} className="h-64 w-full object-cover" alt="" />
        </div>
        <div className="p-4">
          <div className="mb-2">
            <p className="mb-2 text-3xl font-semibold">${price}</p>
            <span>Price</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <Rating className="mb-2" />
              <h6>Rating</h6>
            </div>
            <div>
              <PieChart
                className="h-28 w-28 mb-2"
                data={chartData}
                radius={50}
                totalValue={100}
                animate
                animationDuration={500}
              />
              <h6>Student feedback</h6>
            </div>
          </div>
        </div>
      </div>
        <p className="mb-7">{description}</p>
      <div className="text-end">
        <Link to="/checkout" className="btn btn-primary">
          <FaStar className="mr-2" />
          Get premium access
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
