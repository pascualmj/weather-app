import React from "react";

import CitySelection from "../components/CitySelection";
import WeatherForecast from "../components/WeatherForecast";

const Home = () => {
  return (
    <>
      <CitySelection />
      <WeatherForecast />
    </>
  );
};

export default Home;
