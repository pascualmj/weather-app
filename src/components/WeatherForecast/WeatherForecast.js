import React from "react";
import PropTypes from "prop-types";

import List from "../commons/List";
import Divider from "../commons/Divider";
import WeatherDay from "../WeatherDay";

const items = [
  {
    day: "Monday",
    description: "Sunny day",
    iconId: 800,
    min: 8,
    max: 17,
  },
  {
    day: "Tuesday",
    description: "Cloudy day",
    iconId: 802,
    min: 6,
    max: 14,
  },
];

const WeatherForecast = ({ className = "" }) => {
  return (
    <section className={className}>
      <List
        items={items}
        keyExtractor={(item) => item.day}
        renderItems={({ day, description, iconId, min, max }) => (
          <WeatherDay
            day={day}
            iconId={iconId}
            min={min}
            max={max}
            description={description}
            className="mb-2"
          />
        )}
        divider={() => <Divider />}
      />
    </section>
  );
};

WeatherForecast.propTypes = {
  className: PropTypes.string,
};

export default WeatherForecast;
