import React from "react";
import PropTypes from "prop-types";
import "./weatherMinMax.scss";

import WeatherTemp from "../WeatherTemp";
import Text from "../commons/Text";

const WeatherMinMax = ({ min, max, className = "", variant = "reduced" }) => {
  return (
    <div className={`weather-min-max ${variant} ${className}`}>
      <div>
        <Text>min</Text>
        <WeatherTemp temp={min} />
      </div>
      <div>
        <Text>max</Text>
        <WeatherTemp temp={max} />
      </div>
    </div>
  );
};

WeatherMinMax.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(["reduced", "extended"]),
  className: PropTypes.string,
};

export default WeatherMinMax;
