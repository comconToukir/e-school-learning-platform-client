import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import {
  updateUserEmail,
  updateUserProfile,
  updateUserPassword,
} from "../../utils/firebase.utils";
import { UserContext } from "../../contexts/user.context";

const Profile = () => {
  const { user, setLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleUpdateProfile = (profile) => {
    updateUserProfile(profile)
      .then(() => {
        toast("User info updated successfully");
      })
      .catch((error) => {
        console.error(error);
        toast("Error updating user info", error.code);
      });
  };

  // setLoading(true);
  const onNameSubmit = (data) => {
    const displayName = data.name;
    handleUpdateProfile({ displayName });
  };

  const onPhotoUrlSubmit = (data) => {
    const photoURL = data.photoURL;
    handleUpdateProfile({ photoURL });
  };

  const onEmailSubmit = (data) => {
    const email = data.email;
    console.log(email);
    updateUserEmail(email)
      .then(() => {
        toast("User info updated successfully");
      })
      .catch((error) => {
        console.error(error);
        toast(`Error updating user info ${error.code}`);
      });
  };

  const onPasswordSubmit = (data) => {
    const password = data.password;
    updateUserPassword(password)
      .then(() => {
        toast("User info updated successfully");
      })
      .catch((error) => {
        console.error(error);
        toast(`Error updating user info ${error.code}`);
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-base-200 mt-8 mb-56 p-4">
      <div className="lg:max-w-lg bg-base-300 p-4 w-full rounded-md">
        <h1 className="text-4xl font-semibold mb-4">Profile Info</h1>
        <img
          src={user.photoURL}
          className="h-56 object-contain rounded-md"
          alt="profile"
        />
        <h3 className="mt-5">Name: {user.displayName}</h3>
        <h3 className="mt-3">Photo URL: {user.photoURL}</h3>
        <h3 className="mt-3">Email: {user.email}</h3>
      </div>

      <div className="p-4">
        <form onSubmit={handleSubmit(onNameSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full lg:max-w-md h-9 rounded-sm"
              {...register("name", {
                maxLength: 30,
                pattern: /^[A-Za-z]/,
              })}
              required
            />
            {errors?.name?.type === "maxLength" && (
              <p className="text-red-500">
                First name cannot exceed 30 characters
              </p>
            )}
            {errors?.name?.type === "pattern" && (
              <p className="text-red-500">Alphabetical characters only</p>
            )}
            <input
              className="bg-purple-700 py-1 mt-3 rounded-md cursor-pointer lg:max-w-md "
              type="submit"
              value="Update name"
              aria-label="submit"
            />
          </div>
        </form>

        <form onSubmit={handleSubmit(onPhotoUrlSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Your photo url"
              className="input input-bordered w-full lg:max-w-md  h-9 rounded-sm"
              {...register("photoURL")}
              required
            />
            <input
              className="bg-purple-700 py-1 mt-3 rounded-md cursor-pointer lg:max-w-md "
              type="submit"
              value="Update photo url"
              aria-label="submit"
            />
          </div>
        </form>

        <form onSubmit={handleSubmit(onEmailSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email address"
              className="input input-bordered w-full lg:max-w-md  h-9 rounded-sm"
              {...register("email", {
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              required
            />
            {errors?.name?.type === "pattern" && (
              <p className="text-red-500">
                Please provide a valid email address
              </p>
            )}
            <input
              className="bg-purple-700 py-1 mt-3 rounded-md cursor-pointer lg:max-w-md "
              type="submit"
              value="Update email address"
              aria-label="submit"
            />
          </div>
        </form>

        <form onSubmit={handleSubmit(onPasswordSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your password"
              className="input input-bordered w-full lg:max-w-md  h-9 rounded-sm"
              {...register("password", {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/,
              })}
              required
            />
            {errors?.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must contain minimum eight characters, at least one
                uppercase letter, one lowercase letter, one number and one
                special character.
              </p>
            )}
            <input
              className="bg-purple-700 py-1 mt-3 rounded-md cursor-pointer lg:max-w-md "
              type="submit"
              value="Update password"
              aria-label="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
