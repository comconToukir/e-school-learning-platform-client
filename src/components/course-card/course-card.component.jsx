import { Link } from "react-router-dom";
import "./course-card.styles.css";
import { FaCartPlus } from "react-icons/fa";

const CourseCard = ({
  courseData: { id, course_name, description, image_url, price, rating },
}) => {
  return (
    <div className="card bg-base-100 shadow-lg rounded-md">
      <div className="card image-full card-image-holder h-60 md:h-48 rounded-none">
        <figure>
          <img
            className="w-full object-cover"
            src={image_url}
            alt={`${course_name}`}
          />
        </figure>
        <div className="card-body p-2 mt-auto">
          <div className="rating rating-sm ml-auto">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              disabled
              checked
            />
          </div>
        </div>
      </div>
      <div className="card-body p-5">
        <h2 className="card-title">{course_name}</h2>
        <p className="text-sm">{description.slice(0, 90)}...</p>
        <div className="flex justify-between mt-3">

        <Link to={`${id}`} className="btn btn-primary w-70 rounded-md">
          View Details
        </Link>
        <Link to="/checkout" className="btn btn-primary w-10 px-0 rounded-md"><FaCartPlus /></Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
