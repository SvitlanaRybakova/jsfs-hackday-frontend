import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { getCollections } from "../api";
import Cell from "../components/Cell";
import "react-toastify/dist/ReactToastify.css";

interface Photo {
  collection: string;
  created: Date;
  name: string;
  path: string;
  photoId: string;
  url: string;
}

const Home = () => {
  const {
    data: collections,
    error,
    isLoading,
    status,
  } = useQuery({ queryKey: ["collections"], queryFn: () => getCollections() });

  if (status === "error") toast.error(error.message);


  return (
    <div className="honeycomb-container">
      <ul className="honeycomb">
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
