import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

import useToastMessages from "../hooks/useToastMessages";
import { getCollectionByTitle } from "../api";
import { Photo } from "../interfaces";
import Loader from "../components/Loader";
import Card from "../components/Card";

const SharedCollection = () => {
  const { title } = useParams();

  const getCollection = async () => {
    if (title) {
      const { data } = await getCollectionByTitle(title);
      return data;
    }
    return null;
  };

  const {
    data: collection,
    error,
    isLoading,
    status,
  } = useQuery({ queryKey: ["collection"], queryFn: () => getCollection() });

  const { showToast } = useToastMessages();
  if (status === "error") showToast("error", error.message);

  return (
    <div className="container mx-auto my-12 px-5">
      <div className="flex flex-wrap gap-10 justify-center">
        {isLoading && <Loader />}
        {collection &&
          collection.map((photo: Photo) => (
            <Card src={photo.url} key={photo.photoId}>
              <div
                aria-label="button"
                className="text-3xl text-slate-600 cursor-pointer hover:text-primery_pointer">
                <AiOutlineHeart size={"24px"} />
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default SharedCollection;
