import { v4 as uuidv4 } from "uuid";

import { useQuery } from "@tanstack/react-query";
import { getCollections } from "../api";
import Cell from "../components/Cell";
import Loader from "../components/Loader";
import { Photo } from "../interfaces";

import useToastMessages from "../hooks/useToastMessages";

const Home = () => {
  const {
    data: collections,
    error,
    isLoading,
    status,
  } = useQuery({ queryKey: ["collections"], queryFn: () => getCollections() });

  const { showToast } = useToastMessages();
  if (status === "error") showToast("error", error.message);

  return (
    <div className="honeycomb-container">
      {isLoading && <Loader />}

      <ul className="honeycomb">
        {collections?.length === 0 && <p>No collections</p>}
        {collections &&
          collections.map((cell: Photo[]) => (
            <Cell
              imagePath={cell[0].url}
              albumTitle={cell[0].collection}
              key={uuidv4()}
            />
          ))}
      </ul>
    </div>
  );
};

export default Home;
