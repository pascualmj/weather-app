const getForecastCopy = (dailyForecast, daysLength) => {
  return [...dailyForecast].slice(1, daysLength + 1);
};

export default getForecastCopy;
