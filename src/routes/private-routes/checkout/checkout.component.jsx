import axios from "axios";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

import Spinner from "../../../components/spinner/spinner.component";
import ErrorPage from "../../../pages/errorPage/errorPage.component";

const Checkout = () => {
  const { state: { from: { categoryId, courseId }}} = useLocation();
  console.log(categoryId, courseId);
  
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

  return (
    <div className='bg-base-200 mt-8 py-52 px-4 rounded-md text-center  shadow-sm'>
      <h2 className='text-4xl'>Thank You for purchasing <span className="text-green-600">{course_name}</span></h2>
    </div>
  );
};

export default Checkout;