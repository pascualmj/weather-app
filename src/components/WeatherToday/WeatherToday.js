import React from "react";
import PropTypes from "prop-types";
import "./weatherToday.scss";

import Text from "../commons/Text";
import WeatherTemp from "../WeatherTemp";
import WeatherMinMax from "../WeatherMinMax";

const WeatherToday = ({ className = "" }) => {
  return (
    <article className={`weather-today ${className}`}>
      <Text
        color="secondary"
        size="smaller"
        weight="bold"
        uppercase
        className="day"
      >
        Friday
      </Text>
      <Text weight="bold" size="subtitle">
        Buenos Aires
      </Text>
      <Text color="secondary" size="big" className="mb-1">
        Clear sky
      </Text>
      <WeatherTemp size="big" temp={21} />
      <WeatherMinMax min={8} max={32} variant="extended" />
    </article>
  );
};

WeatherToday.propTypes = {
  className: PropTypes.string,
};

export default WeatherToday;
