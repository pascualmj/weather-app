import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_OPEN_WEATHER_API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getWeather = (lat, lon) => {
  return apiClient.get(
    `/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  );
};
