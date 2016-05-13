import React, { PropTypes } from "react";
import Fixed from "../Fixed";
import calculateChildrenLength from "../../utils/calculateChildrenLength";

const Flexible = ({ children, width = calculateChildrenLength(children) }) => {
  if (typeof children === "string") {
    children = new Array(width + 1).join(children).substring(0, width);
  }

  return (
    <Fixed width={width}>{children}</Fixed>
  );
};

Flexible.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  width: PropTypes.number
};

export default Flexible;
