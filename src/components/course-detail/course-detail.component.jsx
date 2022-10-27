import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import ReactToPdf from "react-to-pdf";
import { PieChart } from "react-minimal-pie-chart";
import { FaStar, FaPrint } from "react-icons/fa";

import Spinner from "../spinner/spinner.component";
import ErrorPage from "./../../pages/errorPage/errorPage.component";
import Rating from "../rating/rating.component";

const CourseDetail = () => {
  const { categoryId, courseId } = useParams();
  const location = useLocation();
  const ref = React.createRef();

  const { isLoading, data, isError } = useQuery(courseId, () => {
    return axios.get(
      `https://learning-platform-server-side-eosin.vercel.app/courses/${categoryId}/${courseId}`
    );
  });

  if (isLoading) return <Spinner />;

  if (isError) return <ErrorPage />;

  if (!data.data) return <ErrorPage />;

  const { id, image_url, course_name, acceptance, price, description, reviews } =
    data.data;

  const chartData = [
    { title: "Happy students", value: acceptance, color: "#65c3c8" },
    { title: "Others", value: 100 - acceptance, color: "#eeaf3a" },
  ];

  return (
    <div className="p-3 pt-5 min-h-full" ref={ref}>
      <div className="flex justify-between">
        <h2 className="text-4xl font-semibold mb-7">{course_name}</h2>
        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="btn btn-accent py-1 mb-4 ml-auto text-xs rounded-md capitalize"
            >
              <FaPrint className="mr-2" />
              Generate pdf
            </button>
          )}
        </ReactToPdf>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-6">
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
      <p className="mb-7 font-light">{description}</p>
      <div className="text-end">
        <Link to={`/checkout/${id}`} state={{ from: location, categoryId, courseId }}>
          <button className="btn btn-primary rounded-md capitalize">
            <FaStar className="mr-2" />
            Get premium access
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
