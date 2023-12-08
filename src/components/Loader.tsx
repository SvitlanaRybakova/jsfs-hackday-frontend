import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2">
        <RingLoader color={"white"} />
      </div>
    </div>
  );
};

export default Loader;
