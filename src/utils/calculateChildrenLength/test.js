import React from "react";
import { assert } from "chai";
import calculateChildrenLength from "./";

describe("calculateChildrenLength", () => {
  it("returns string length if string passed", () => {
    assert.equal(3, calculateChildrenLength("foo"));
  });

  it("returns string length if string passed inside an element", () => {
    assert.equal(3, calculateChildrenLength(<span>foo</span>));
  });

  it("returns string length if string passed inside nested elements", () => {
    assert.equal(3, calculateChildrenLength(
      <span>
        <span>foo</span>
      </span>
    ));
  });

  it("returns string length if multiple strings passed inside nested elements", () => {
    assert.equal(6, calculateChildrenLength(
      <span>
        <span>foo</span>
        <span>bar</span>
      </span>
    ));
  });

  it("combines multiple string lengths of various nesting levels", () => {
    assert.equal(6, calculateChildrenLength(
      <span>
        foo
        <span>bar</span>
      </span>
    ));
  });
});
