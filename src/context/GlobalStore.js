import React, { useState, useEffect } from "react";
import { getLocation } from "../services/geolocationService";
import { getWeather } from "../services/weatherService";

export const GlobalContext = React.createContext(null);

const GlobalStore = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <GlobalContext.Provider value={{ location, weather, isLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStore;
