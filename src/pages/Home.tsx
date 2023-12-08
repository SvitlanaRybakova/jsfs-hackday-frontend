import Card from "../components/Card";

import { getCollections } from "../api";
import { useQuery } from "@tanstack/react-query";

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

  return (
    <>
      {collections &&
        collections.data.map((card: Photo) => (
          <Card title={card.collection} imagePath={card.url} />
        ))}
    </>
  );
};

export default Home;
