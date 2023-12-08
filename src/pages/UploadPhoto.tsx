import { useState } from "react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import InputForm from "../components/InputForm";
import FileInput from "../components/FileInput";
import SwiperCustom from "../components/SwiperCustom";
import { uploadPhoto, getCollectionByTitle } from "../api";
import useToastMessages from "../hooks/useToastMessages";

const UploadPhoto = () => {
  const [collectionTitle, setCollectionTitle] = useState("");
  const queryClient = useQueryClient();

  const getCollection = async () => {
    if (collectionTitle) {
      const { data } = await getCollectionByTitle(collectionTitle);
      return data;
    }
    return null;
  };

  const {
    data: collection,
  } = useQuery({
    queryKey: ["collection_upload", collectionTitle], 
    queryFn: () => getCollection(),
  });

  const mutation = useMutation({
    mutationFn: (files: File[]) => uploadPhoto(collectionTitle, files),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["collection_upload", collectionTitle] });
    },
  });

  const { showToast } = useToastMessages();
  if (mutation.isError) showToast("error", mutation.error.message);
  if (mutation.isSuccess) showToast("success", "Photo added successfully");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollectionTitle(event.target.value);
  };

  return (
    <div className="container mx-auto my-12 px-5">
      <InputForm
        collectionName={collectionTitle}
        handleInputChange={handleInputChange}
      />

      <div className="mt-10 flex justify-between gap-[25px]">
        <div className="w-[100%] min-h-[200px]">
          {collectionTitle ? (
            <FileInput collectionName={collectionTitle} mutation={mutation} />
          ) : (
            <p className="text-center">
              Please specify the name of the collection
            </p>
          )}
        </div>
        <div className="hidden md:block w-[300px]">
          {collection && <SwiperCustom photos={collection} />}
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
