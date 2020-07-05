import React from "react";
import PropTypes from "prop-types";

import List from "../commons/List";
import Divider from "../commons/Divider";
import WeatherDay from "../WeatherDay";

import { getWeekDay, getForecastCopy } from "../../functions";
import { useGlobalStore } from "../../hooks";

const WeatherForecast = ({ className = "" }) => {
  const { weather } = useGlobalStore();

  if (!weather) return null;

  return (
    <section className={className}>
      <List
        items={getForecastCopy(weather.daily, 5)}
        keyExtractor={(item) => item.dt}
        renderItems={(item) => (
          <WeatherDay
            day={getWeekDay(item.dt)}
            iconId={item.weather[0].id}
            min={parseInt(item.temp.min, 10)}
            max={parseInt(item.temp.max, 10)}
            description={item.weather[0].description}
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
