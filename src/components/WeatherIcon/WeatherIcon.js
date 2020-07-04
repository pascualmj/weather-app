import React from "react";
import PropTypes from "prop-types";

const WeatherIcon = ({ iconId, size = 21, description = "" }) => {
  return (
    <i
      class={`wi wi-owm-${iconId}`}
      style={{ fontSize: size }}
      {...(description && { title: description })}
    ></i>
  );
};

WeatherIcon.propTypes = {
  iconId: PropTypes.number.isRequired,
  size: PropTypes.number,
  description: PropTypes.string,
};

export default WeatherIcon;
