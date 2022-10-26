import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import Spinner from "../../components/spinner/spinner.component";
import ErrorPage from "../errorPage/errorPage.component";

const Courses = () => {
  const navigate = useNavigate();

  const { isLoading, data, isError } = useQuery("categories", () => {
    return axios.get(`http://localhost:5001/`);
  });

  if (isError) return <ErrorPage />;

  if (isLoading) return <Spinner />;

  const categories = data.data;

  return (
    <div className="bg-slate-900 mt-8 rounded-md p-4">
      <div className="w-full navbar bg-base-300">
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
        <div className="flex-1 px-2 mx-2">Navbar Title</div>
      </div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
