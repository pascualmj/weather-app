import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_GEOLOCATION_API,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getLocation = () => {
  return apiClient.get("/");
};
