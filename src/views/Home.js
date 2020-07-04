import React from "react";

import CitySelection from "../components/CitySelection";
import WeatherToday from "../components/WeatherToday";
import WeatherForecast from "../components/WeatherForecast";

const Home = () => {
  return (
    <>
      <CitySelection />
      <WeatherToday className="mt-6" />
      <WeatherForecast className="mt-9" />
    </>
  );
};

export default Home;
