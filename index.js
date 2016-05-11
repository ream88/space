import React from "react";
import ReactDOM from "react-dom";
import { Fixed, Flexible } from "./src/components";

ReactDOM.render((
  <pre>
    <Fixed width={100}>
      <Fixed>/* </Fixed>
      <Flexible>-</Flexible>
      <Fixed> space </Fixed>
      <Flexible>-</Flexible>
      <Fixed> */</Fixed>
    </Fixed>
  </pre>
), document.querySelector("main"));
