import React from "react";

import CitySelection from "../components/CitySelection";
import WeatherToday from "../components/WeatherToday";
import WeatherForecast from "../components/WeatherForecast";

import { useGlobalStore } from "../hooks";

const Home = () => {
  const { isLoading } = useGlobalStore();

  return (
    <>
      <CitySelection />
      {isLoading ? (
        <p className="mt-6">Loading...</p>
      ) : (
        <>
          <WeatherToday className="mt-6" />
          <WeatherForecast className="mt-9" />
        </>
      )}
    </>
  );
};

export default Home;
