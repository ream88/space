import React from "react";
import ReactDOM from "react-dom";
import { Fixed, Flexible } from ".";

ReactDOM.render((
  <pre>
    <Fixed width={100}>
      <Fixed>/* </Fixed>
      <Flexible>-</Flexible>
      <Fixed> spaced </Fixed>
      <Flexible>-</Flexible>
      <Fixed> */</Fixed>
    </Fixed>
  </pre>
), document.querySelector("main"));
