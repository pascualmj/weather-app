import React from "react";

import CitySelection from "../components/CitySelection";
import WeatherToday from "../components/WeatherToday";
import WeatherForecast from "../components/WeatherForecast";
import Preloader from "../components/Preloader";
import Alert from "../components/commons/Alert";

import { useGlobalStore } from "../hooks";

const Home = () => {
  const { isLoading, error } = useGlobalStore();

  return (
    <>
      <CitySelection />
      {isLoading ? (
        <Preloader text="Checking the weather..." className="mt-6" />
      ) : error ? (
        <Alert
          text="Something went wrong! Try again later..."
          type="error"
          className="mt-6"
        />
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
