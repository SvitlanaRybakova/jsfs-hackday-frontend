import { useQuery } from "@tanstack/react-query";
import GalleryItem from "../components/GalleryItem";
import { v4 as uuidv4 } from "uuid";
import { getCollections } from "../api";
import { Photo } from "../interfaces";
import Loader from "../components/Loader";
import useToastMessages from "../hooks/useToastMessages";

const Gallery = () => {
  const {
    data: collections,
    error,
    isLoading,
    status,
  } = useQuery({
    queryKey: ["collections_gallery"],
    queryFn: () => getCollections(),
  });

  const { showToast } = useToastMessages();

  if (status === "error") showToast("error", error.message);
  
  return (
    <div className="container mx-auto px-20">
      {isLoading && <Loader />}
      {collections &&
        collections.map((collection: Photo[]) => (
          <GalleryItem key={uuidv4()} collectionName={collection} />
        ))}
    </div>
  );
};

export default Gallery;
