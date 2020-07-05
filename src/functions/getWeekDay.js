import { WEEK_DAYS } from "../config/constants";

const getWeekDay = (unixTimestamp) => {
  const day = new Date(unixTimestamp * 1000).getDay();
  return WEEK_DAYS[day];
};

export default getWeekDay;
