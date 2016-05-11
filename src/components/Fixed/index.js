import React, { cloneElement, PropTypes, Children } from "react";
import Flexible from "../Flexible";
import calculateWidths from "../../utils/calculateWidths";

const Fixed = ({ children, width = children.length }) => {
  if (typeof children === "string") {
    return <span>{children.substring(0, width)}</span>;
  }

  children = Children.toArray(children); // 😩

  let widths = calculateWidths(children.map(child => {
    switch (child.type) {
    case Fixed:
      return child.props.children.length;
    case Flexible:
      return Infinity;
    }
  }), width);

  children = children.map((child, i) => {
    if (typeof child === "object") {
      return cloneElement(child, { key: i, width: widths[i] });
    }
  });

  return (
    <span>{children}</span>
  );
};

Fixed.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  width: PropTypes.number
};

export default Fixed;
