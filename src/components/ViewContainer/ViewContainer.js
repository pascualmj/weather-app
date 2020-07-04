import React from "react";
import PropTypes from "prop-types";
import "./viewContainer.scss";

const ViewContainer = ({ children }) => {
  return <main className="view-container">{children}</main>;
};

ViewContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ViewContainer;
