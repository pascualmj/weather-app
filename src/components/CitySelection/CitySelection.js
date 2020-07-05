import React from "react";

import Select from "../commons/Select";
import Text from "../commons/Text";

import { useGlobalStore } from "../../hooks";
import { SELECT_OPTIONS_CITIES } from "../../config/constants";

const CitySelection = () => {
  const { selectedCity, changeSelectedCity } = useGlobalStore();

  const handleChange = (value) => {
    changeSelectedCity(value);
  };

  return (
    <section>
      <Text size="title" weight="bold" className="mb-2">
        What's the weather like in...
      </Text>
      <Select
        options={SELECT_OPTIONS_CITIES}
        value={selectedCity}
        onChange={handleChange}
      />
    </section>
  );
};

export default CitySelection;
