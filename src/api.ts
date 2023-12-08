import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

export const getCollections = async () => {
  const response = await axios.get(`${BASE_URL}/collections`);

  return response.data.groupedCollectionsArray;
};

export const getCollectionByTitle = async (title: string) => {
  const response = await axios.get(`${BASE_URL}/collections/${title}`);
  return response.data;
};

export const deletePhoto = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/collections/${id}`);
  return response.data;
};


export const uploadPhoto = async (title: string| undefined, files: Array<Blob | File>) => {
  
  if(!title) throw new Error("Title is required");
  try {
    const formData = new FormData();
    formData.append("title", title);

    files.forEach((file) => {
      formData.append("photos", file);
    });

    const response = await axios.post(`${BASE_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.uploadedUrls;
  } catch (error) {
    console.error("Error uploading photo:", error);
    throw new Error("Failed to upload photo");
  }
};
