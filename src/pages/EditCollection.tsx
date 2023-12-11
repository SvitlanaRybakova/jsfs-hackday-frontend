import { useState, ChangeEvent } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { saveAs } from "file-saver";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdCloudDownload } from "react-icons/md";

import clsx from "clsx";
import axios from "axios";

import { getCollectionByTitle, deletePhoto, uploadPhoto } from "../api";
import useHandleModal from "../hooks/useHandleModal";
import Card from "../components/Card";
import Modal from "../components/Modal";
import FileInput from "../components/FileInput";
import InputForm from "../components/InputForm";
import Loader from "../components/Loader";
import { Photo } from "../interfaces";
import useToastMessages from "../hooks/useToastMessages";

const EditCollection = () => {
  const { title } = useParams();
  const queryClient = useQueryClient();

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

  const mutationDelete = useMutation({
    mutationFn: deletePhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["collection"] });
    },
  });
  
   const mutationUpload = useMutation({
    mutationFn: (files: File[]) => uploadPhoto(collectionName, files),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["collection"] });
    },
  });

  const { showToast } = useToastMessages();
  const { handleModalShow, showModal, handleModalClose } = useHandleModal();

  const [collectionName, setCollectionName] = useState(title);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCollectionName(event.target.value);
  };

  const handleDownloadClick = async (event: React.SyntheticEvent, url: string) => {
    event.preventDefault();
    
    // ToDo fix cors with firebase
    try {
      const response = await axios.get(url, {
        responseType: "blob",
      });
      saveAs(response.data, "image.jpg");
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  const handleDelete = (event: React.SyntheticEvent, id: string) => {
    event.preventDefault();
    mutationDelete.mutate(id);
  };

  if (mutationDelete.isError) showToast("error", mutationDelete.error.message);
  if (mutationDelete.isSuccess) showToast("success", "Photo deleted successfully");
  if (status === "error") showToast("error", error.message);
  if (mutationUpload.isError) showToast("error", mutationUpload.error.message);
  if (mutationUpload.isSuccess) showToast("success", "Photo added successfully");
  return (
    <div className="container mx-auto my-12 px-5">
      {isLoading && <Loader />}
      <div className="text-right">
        <button
          type="button"
          className={clsx(
            "text-gray-900  border border-gray-300 rounded-lg",
            "focus:outline-none  focus:ring-4 focus:ring-gray-200",
            "font-medium  text-sm",
            "px-5 py-2.5 me-2 mb-2",
            !collectionName
              ? "bg-gray-200 hover:bg-gray-200"
              : "bg-bg_button_add hover:bg-bg_button_add_hover"
          )}
          disabled={!collectionName}
          onClick={handleModalShow}>
          Add photo
        </button>
      </div>

      <InputForm
        collectionName={collectionName}
        handleInputChange={handleInputChange}
      />
      <div className="flex flex-wrap gap-10 justify-center mt-12">
        {collection &&
          collection.map((photo: Photo) => (
            <Card src={photo.url} key={photo.photoId}>
              <div
                aria-label="button"
                className="text-3xl text-slate-600 cursor-pointer hover:text-primery_pointer"
                onClick={(e) => handleDownloadClick(e, photo.url)}>
                <MdCloudDownload size={"24px"} />
              </div>
              <div
                aria-label="button"
                className="text-3xl text-slate-600 cursor-pointer hover:text-primery_pointer pl-5"
                onClick={(e) => handleDelete(e, photo.photoId)}>
                <RiDeleteBin6Fill size={"22px"} />
              </div>
            </Card>
          ))}
      </div>
      <Modal showModal={showModal} handleModalClose={handleModalClose}>
        <FileInput collectionName={collectionName} mutation={mutationUpload}/>
      </Modal>
    </div>
  );
};

export default EditCollection;
