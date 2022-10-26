import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { resetPassword } from '../../utils/firebase.utils';

const ResetPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    const email = data.email;
    resetPassword(email)
      .then((result) => {
        toast.success("A password reset email has been sent to your email address.");
        navigate(-1);
      })
      .catch((error) => {
        toast.error(error.code);
        console.error(error);
      });
  };

  return (
    <div className="bg-slate-900  mt-8 p-8 rounded-md text-center">
      <h2 className="text-5xl font-semibold mb-5">Oops!</h2>
      <p className="mb-4">It seems that you have forgotten your password.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
          <input
            type="email"
            placeholder="Your email address"
            className="input input-bordered w-full max-w-md h-9 mx-auto mb-4 rounded-sm"
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
        </div>
        <input type="submit" className="btn btn-accent" aria-label="send password reset email" value="Send password reset email" />
      </form>
    </div>
  );
};

export default ResetPassword;