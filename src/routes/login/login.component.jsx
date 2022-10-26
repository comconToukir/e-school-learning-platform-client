import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import { toast } from "react-hot-toast";
import AuthProviders from "../../components/auth-providers/auth-providers.component";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setLoading } = useContext(UserContext);

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    setLoading(true);
    signInAuthUserWithEmailAndPassword(email, password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="mt-20 px-4 py-6 bg-slate-900 max-w-md mx-auto rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your email address"
            className="input input-bordered w-full max-w-md h-9 rounded-sm"
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors?.name?.type === "required" && (
            <p className="text-red-500">This field is required</p>
          )}
          {errors?.name?.type === "pattern" && (
            <p className="text-red-500">Please provide a valid email address</p>
          )}
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Your password"
            className="input input-bordered w-full max-w-md h-9 rounded-sm"
            {...register("password", {
              required: true,
            })}
          />
          {errors?.password?.type === "required" && (
            <p className="text-red-500">This field is required</p>
          )}
          <input
            className="bg-purple-700 py-3 mt-7 rounded-md cursor-pointer"
            type="submit"
            value="Login"
            aria-label="submit"
          />
        </div>
      </form>
      <p className="mt-5 flex items-end">
        Don't have an account?{" "}
        <Link className="link ml-1" to="/sign-up">
          Login
        </Link>
        <Link to="/reset-password" className="link ml-auto text-sm">
          Forgot password?
        </Link>
      </p>
      <div className="mt-7">
        <h6 className="text-center">You can also log in with</h6>
        <AuthProviders />
      </div>
    </div>
  );
};

export default Login;
