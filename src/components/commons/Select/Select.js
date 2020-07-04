import React, { useState } from "react";
import PropTypes from "prop-types";
import "./select.scss";

import Text from "../Text";

const Select = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (value) => {
    return () => {
      onChange(value);
      setIsOpen(false);
    };
  };

  return (
    <div className="select">
      <div className="option-selected" onClick={handleToggle}>
        <Text>{options.find((opt) => opt.value === value).label}</Text>
        <span className="material-icons">unfold_more</span>
      </div>
      <ul className={`options ${isOpen ? "active" : ""}`}>
        {options.map((opt) => (
          <li
            key={opt.value}
            className={opt.value === value ? "selected" : ""}
            onClick={handleClick(opt.value)}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
