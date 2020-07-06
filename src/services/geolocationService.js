import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/v1/location",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getLocation = () => {
  return apiClient.get("/");
};
