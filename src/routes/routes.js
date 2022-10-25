import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./home/home.component";
import Main from "./main.component";
import Login from './login/login.component';
import SignUp from './sign-up/sign-up.component';
import Courses from "./courses/courses.component";
import FaqPage from "./faqPage/faqPage.component";
import Blog from "./blog/blog.component";
import ErrorPage from "./errorPage/errorPage.component";
import EmailNotVerified from './EmailNotVerified/EmailNotVerified';
import Checkout from "./private-routes/checkout/checkout.component";
import PrivateRoute from "./private-routes/private-route.component";
import ResetPassword from "./reset-password/reset-password.component";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
      <Route path="/verify-email" element={<EmailNotVerified />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/*" element={<ErrorPage />} />
    </Route>
  )
)

export default router;