import React from "react";
import PropTypes from "prop-types";
import "./list.scss";

import { renderListDivider } from "../../../functions";

const List = ({ items, renderItems, keyExtractor, divider = null }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>
          {renderItems(item)}
          {renderListDivider(index, items.length, divider)}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItems: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func.isRequired,
  divider: PropTypes.func,
};

export default List;
