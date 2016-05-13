import { Children } from "react";

const calculateChildrenLength = children => Children.toArray(children).reduce((sum, child) => {
  switch (typeof child) {
  case "string":
    return sum + children.length;
  case "object":
    return sum + calculateChildrenLength(child.props.children);
  }
}, 0);

export default calculateChildrenLength;
