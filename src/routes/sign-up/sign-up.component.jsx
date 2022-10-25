import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { createAuthUserWithEmailAndPassword, updateUserProfile } from "../../utils/firebase.utils";
import { toast } from 'react-hot-toast';
import AuthProviders from "../../components/auth-providers/auth-providers.component";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const SignUp = () => {
  const navigate = useNavigate();
  const { setLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleUpdateProfile = (profile) => {
    updateUserProfile(profile)
      .then(() => {
        navigate('/verify-email')
      })
      .catch((error) => console.error(error));
  };

  const onSubmit = (data) => {
    const displayName = data.name;
    const photoURL = data.photoURL;
    const email = data.email;
    const password = data.password;

    setLoading(true);
    
    createAuthUserWithEmailAndPassword(email, password)
    .then(result => {
      handleUpdateProfile({ displayName, photoURL });
      toast.success("Please verify your email address before continuing.");
    })
    .catch(error => {
      console.error(error);
    })
  };

  return (
    <div className="mt-20 px-4 py-6 bg-slate-900 max-w-md mx-auto rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your name</span>
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="input input-bordered w-full max-w-md h-9"
            {...register("name", {
              required: true,
              maxLength: 30,
              pattern: /^[A-Za-z]/,
            })}
          />
          {errors?.name?.type === "required" && (
            <p className="text-red-500">This field is required</p>
          )}
          {errors?.name?.type === "maxLength" && (
            <p className="text-red-500">
              First name cannot exceed 30 characters
            </p>
          )}
          {errors?.name?.type === "pattern" && (
            <p className="text-red-500">Alphabetical characters only</p>
          )}
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Your photo url"
            className="input input-bordered w-full max-w-md h-9"
            {...register("photoURL", {
              required: false
            })}
          />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your email address"
            className="input input-bordered w-full max-w-md h-9"
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
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/,
            })}
          />
          {errors?.password?.type === "required" && (
            <p className="text-red-500">This field is required</p>
          )}
          {errors?.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must contain minimum eight characters, at least one
              uppercase letter, one lowercase letter, one number and one special
              character.
            </p>
          )}
          <input
            className="bg-purple-700 py-3 mt-7 rounded-md cursor-pointer"
            type="submit"
            value="Submit"
            aria-label="submit"
          />
        </div>
      </form>
      <p className="text-center mt-3">
        Already have an account?{" "}
        <Link className="link" to="/login">
          Login
        </Link>
      </p>
      <div className="mt-7">
        <h6 className="text-center">You can also sign up with</h6>
      <AuthProviders />
      </div>
    </div>
  );
};

export default SignUp;
