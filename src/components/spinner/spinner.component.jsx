import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="mt-16 flex justify-center py-48">
      <InfinitySpin width="200" color="#4fa94d" className="mx-auto">
        <span className="invisible ">Loading...</span>
      </InfinitySpin>
    </div>
  );
};

export default Spinner;
