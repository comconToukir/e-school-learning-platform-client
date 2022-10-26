import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../layout/main.component";
import Home from "../pages/home/home.component";
import ResetPassword from "../pages/reset-password/reset-password.component";
import Login from './../pages/login/login.component';
import SignUp from './../pages/sign-up/sign-up.component';
import Courses from './../pages/courses/courses.component';
import CoursesContainer from "../components/courses-container/courses-container.component";
import FaqPage from './../pages/faqPage/faqPage.component';
import Blog from './../pages/blog/blog.component';
import PrivateRoute from './private-routes/private-route.component';
import Checkout from './private-routes/checkout/checkout.component';
import EmailNotVerified from './../pages/EmailNotVerified/EmailNotVerified';
import ErrorPage from "../pages/errorPage/errorPage.component";
import CourseDetail from './../components/course-detail/course-detail.component';
import Profile from "../pages/profile/profile.component";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/courses" element={<Courses />}>
        <Route path="/courses/" element={<CoursesContainer />} />
        <Route path="/courses/:categoryId" element={<CoursesContainer />} />
        <Route path="/courses/:categoryId/:courseId" element={<CourseDetail />} />
      </Route>
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
      <Route path="/verify-email" element={<EmailNotVerified />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/*" element={<ErrorPage />} />
    </Route>
  )
)

export default router;