import React, { useContext } from "react";
import { signInWithGooglePopup } from "../../utils/firebase.utils";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { UserContext } from "../../contexts/user.context";

const AuthProviders = () => {
  const { setLoading } = useContext(UserContext);

  const googleSignIn = () => {
    setLoading(true);
    signInWithGooglePopup();
  }
  
  return (
    <div className="flex flex-col w-full lg:flex-row mt-5">
      <div
        className="grid flex-grow card bg-base-300 rounded-box place-items-center cursor-pointer"
        onClick={googleSignIn}
      >
        <span className="flex items-center gap-2"><FaGoogle />Google</span>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="grid flex-grow card bg-base-300 rounded-box place-items-center cursor-pointer">
        <span className="flex items-center gap-2"><FaGithub />Github</span>
      </div>
    </div>
  );
};

export default AuthProviders;
