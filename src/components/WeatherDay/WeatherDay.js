import React from "react";
import PropTypes from "prop-types";
import "./weatherDay.scss";

import Text from "../commons/Text";
import WeatherIcon from "../WeatherIcon";
import WeatherMinMax from "../WeatherMinMax";

const WeatherDay = ({
  day,
  iconId,
  min,
  max,
  description = "",
  className = "",
}) => {
  return (
    <article className={`weather-day ${className}`}>
      <Text weight="bold" uppercase>
        {day}
      </Text>
      <WeatherIcon iconId={iconId} description={description} />
      <WeatherMinMax min={min} max={max} />
    </article>
  );
};

WeatherDay.propTypes = {
  day: PropTypes.string.isRequired,
  iconId: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default WeatherDay;
