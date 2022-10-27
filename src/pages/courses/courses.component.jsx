import axios from "axios";
import { useQuery } from "react-query";
import { Link, NavLink, Outlet } from "react-router-dom";

import Spinner from "../../components/spinner/spinner.component";
import ErrorPage from "../errorPage/errorPage.component";

import "./courses.styles.css";

const Courses = () => {
  const { isLoading, data, isError } = useQuery("categories", () => {
    return axios.get(`https://learning-platform-server-side-eosin.vercel.app/`);
  });
  
  if (isLoading) return <Spinner />;
  
  if (isError) return <ErrorPage />;

  if (!data.data) return <ErrorPage />;

  const categories = data.data;

  return (
    <div className="bg-base-200 mt-8 rounded-md shadow-sm">
      <div className="w-full navbar bg-base-300 rounded-t-md shadow-sm">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2 text-xl">Select a course</div>
      </div>
      <div className="drawer drawer-mobile h-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {categories.map((cat) => (
              <li key={cat.id}>
                <NavLink to={cat.id} className={`${(isActive) => isActive ? "active" : null}`}>{cat.subject}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
