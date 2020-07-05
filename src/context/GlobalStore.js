import React, { useState, useEffect, useCallback } from "react";
import { getLocation } from "../services/geolocationService";
import { getWeather } from "../services/weatherService";

import { SELECT_OPTIONS_CITIES } from "../config/constants";

export const GlobalContext = React.createContext(null);

const GlobalStore = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedCity, setSelectedCity] = useState(
    SELECT_OPTIONS_CITIES[0].value
  );

  useEffect(() => {
    async function getCurrentLocation() {
      setIsLoading(true);
      try {
        const { data: locationData } = await getLocation();
        const { data: weatherData } = await getWeather(
          locationData.lat,
          locationData.lon
        );
        setLocation(locationData);
        setWeather(weatherData);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    }
    getCurrentLocation();
  }, []);

  const getCityWeather = useCallback(
    async (value) => {
      setIsLoading(true);
      try {
        let latLon = { lat: location.lat, lon: location.lon };
        if (value !== SELECT_OPTIONS_CITIES[0].value) {
          latLon = SELECT_OPTIONS_CITIES.find((city) => city.value === value);
        }
        const { data: weatherData } = await getWeather(latLon.lat, latLon.lon);
        setWeather(weatherData);
      } catch (error) {
        setError(true);
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
      value={{
        location,
        weather,
        isLoading,
        error,
        selectedCity,
        changeSelectedCity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStore;
