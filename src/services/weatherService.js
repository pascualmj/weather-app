import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/v1/forecast",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getWeather = (city = null) => {
  if (!city) return apiClient.get("/");
  return apiClient.get(`/${city}`);
};
