import React, { useState, useEffect, useCallback } from "react";
import { getLocation } from "../services/geolocationService";
import { getWeather } from "../services/weatherService";

import { SELECT_OPTIONS_CITIES } from "../config/constants";

export const GlobalContext = React.createContext(null);

const GlobalStore = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState("current");

  useEffect(() => {
    async function getCurrentLocation() {
      setIsLoading(true);
      const { data: locationData } = await getLocation();
      const { data: weatherData } = await getWeather(
        locationData.lat,
        locationData.lon
      );
      setLocation(locationData);
      setWeather(weatherData);
      setIsLoading(false);
    }
    getCurrentLocation();
  }, []);

  const getCityWeather = useCallback(
    async (value) => {
      setIsLoading(true);
      if (value === SELECT_OPTIONS_CITIES[0].value) {
        const { data: weatherData } = await getWeather(
          location.lat,
          location.lon
        );
        setWeather(weatherData);
      } else {
        const { lat, lon } = SELECT_OPTIONS_CITIES.find(
          (city) => city.value === value
        );
        const { data: weatherData } = await getWeather(lat, lon);
        setWeather(weatherData);
      }
      setIsLoading(false);
    },
    [location]
  );

  const changeSelectedCity = useCallback(
    (value) => {
      if (value === selectedCity) return;
      setSelectedCity(value);
      getCityWeather(value);
    },
    [setSelectedCity, getCityWeather, selectedCity]
  );

  return (
    <GlobalContext.Provider
      value={{ location, weather, isLoading, selectedCity, changeSelectedCity }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStore;
