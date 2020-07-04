import React, { useState } from "react";

import Select from "../commons/Select";
import Text from "../commons/Text";

import { SELECT_OPTIONS_CITIES } from "../../config/constants";

const CitySelection = () => {
  const [selectedOption, setSelectedOption] = useState("current");

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <section>
      <Text size="title" weight="bold" className="mb-2">
        What's the weather like in...
      </Text>
      <Select
        options={SELECT_OPTIONS_CITIES}
        value={selectedOption}
        onChange={handleChange}
      />
    </section>
  );
};

export default CitySelection;
