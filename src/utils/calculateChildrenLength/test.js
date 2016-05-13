import React from "react";
import { assert } from "chai";
import calculateChildrenLength from "./";

describe("calculateChildrenLength", () => {
  it("returns string length if string passed", () => {
    assert.equal(3, calculateChildrenLength(<span>foo</span>));
  });

  it("returns string length if nested strings passed", () => {
    assert.equal(6, calculateChildrenLength(
      <span>
        <span>foo</span>
        <span>bar</span>
      </span>
    ));
  });
});
