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

