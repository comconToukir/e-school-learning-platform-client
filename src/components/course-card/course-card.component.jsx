import { Link, useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

import Rating from "../rating/rating.component";

import "./course-card.styles.css";

const CourseCard = ({
  courseData: { id, course_name, description, image_url, price, rating },
}) => {
  let { categoryId } = useParams();
  if (!categoryId) {
    categoryId = "6s5df5sdsm";
  }
  return (
    <div className="card bg-base-300 shadow-sm rounded-md">
      <div className="card image-full card-image-holder h-60 md:h-48 rounded-none">
        <figure>
          <img
            className="w-full object-cover"
            src={image_url}
            alt={`${course_name}`}
          />
        </figure>
        <div className="card-body p-2 mt-auto">
          <Rating className="ml-auto" />
        </div>
      </div>
      <div className="card-body p-4">
        <h2 className="card-title">{course_name}</h2>
        <p className="text-sm">{description.slice(0, 90)}...</p>
        <div className="flex justify-between mt-3">
          <Link
            to={`/courses/${categoryId}/${id}`}
            className="btn btn-primary w-70 rounded-md"
          >
            <button>View Details</button>
          </Link>
          <Link to="/checkout" className="btn btn-primary w-10 px-0 rounded-md">
            <FaCartPlus />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
