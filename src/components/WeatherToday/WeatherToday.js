import React from "react";
import PropTypes from "prop-types";
import "./weatherToday.scss";

import Text from "../commons/Text";
import WeatherTemp from "../WeatherTemp";
import WeatherMinMax from "../WeatherMinMax";

import { getWeekDay } from "../../functions";
import { useGlobalStore } from "../../hooks";
import { SELECT_OPTIONS_CITIES } from "../../config/constants";

const WeatherToday = ({ className = "" }) => {
  const { location, weather, selectedCity } = useGlobalStore();

  if (!weather || !location) return null;

  return (
    <article className={`weather-today ${className}`}>
      <Text
        color="secondary"
        size="smaller"
        weight="bold"
        uppercase
        className="day"
      >
        {getWeekDay(weather.current.dt)}
      </Text>
      <Text weight="bold" size="subtitle">
        {selectedCity === SELECT_OPTIONS_CITIES[0].value
          ? location.city
          : SELECT_OPTIONS_CITIES.find((city) => city.value === selectedCity)
              .label}
      </Text>
      <Text color="secondary" size="big" className="mb-1">
        {weather.current.weather[0].description}
      </Text>
      <WeatherTemp size="big" temp={parseInt(weather.current.temp, 10)} />
      <WeatherMinMax
        min={parseInt(weather.daily[0].temp.min, 10)}
        max={parseInt(weather.daily[0].temp.max, 10)}
        variant="extended"
      />
    </article>
  );
};

WeatherToday.propTypes = {
  className: PropTypes.string,
};

export default WeatherToday;
