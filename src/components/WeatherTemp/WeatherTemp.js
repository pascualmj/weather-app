import React from "react";
import PropTypes from "prop-types";
import "./weatherTemp.scss";

const WeatherTemp = ({ temp, size = "small", color = "full" }) => {
  return (
    <span className={`weather-temp color-${color} size-${size}`}>
      {temp}&deg;
    </span>
  );
};

WeatherTemp.propTypes = {
  temp: PropTypes.number.isRequired,
  size: PropTypes.oneOf(["small", "regular", "big"]),
  color: PropTypes.oneOf(["full", "primary", "alternative", "absence"]),
};

export default WeatherTemp;
