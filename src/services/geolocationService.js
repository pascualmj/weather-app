import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://ip-api.com/json",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getLocation = () => {
  return apiClient.get("/");
};
