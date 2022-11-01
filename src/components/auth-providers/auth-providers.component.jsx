import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";

import { UserContext } from "../../contexts/user.context";
import {
  signInWithGooglePopup,
  signInWithGithubPopup,
} from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";

const AuthProviders = ({ from, categoryId, courseId }) => {
  const { setLoading } = useContext(UserContext);
  const navigate = useNavigate();

  const googleSignIn = () => {
    setLoading(true);
    signInWithGooglePopup()
      .then(() => {
        navigate(from, { state: { categoryId, courseId } });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.code);
      });
  };

  const githubSignIn = () => {
    setLoading(true);
    signInWithGithubPopup()
      .then(() => {
        navigate(from, { state: { categoryId, courseId } });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.code);
      });
  };

  return (
    <div className="flex flex-col w-full lg:flex-row mt-5">
      <div
        className="grid flex-grow card p-4 btn-accent font-semibold place-items-center cursor-pointer rounded-lg"
        onClick={googleSignIn}
      >
        <span className="flex items-center gap-2">
          <FaGoogle />
          Google
        </span>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div
        className="grid flex-grow card p-4 btn-accent font-semibold place-items-center cursor-pointer rounded-lg"
        onClick={githubSignIn}
      >
        <span className="flex items-center gap-2">
          <FaGithub />
          Github
        </span>
      </div>
    </div>
  );
};

export default AuthProviders;
