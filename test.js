import { assert } from "chai";
import calculateWidths from "./calculateWidths";

describe("calculateWidths", () => {
  it("1 flexible gets the whole", () => {
    assert.deepEqual([100], calculateWidths([Infinity], 100));
  });

  it("2 flexibles get 50% each", () => {
    assert.deepEqual([50, 50], calculateWidths([Infinity, Infinity], 100));
  });

  it("2 flexibles get nearly 50% each", () => {
    assert.deepEqual([50, 49], calculateWidths([Infinity, Infinity], 99));
  });

  it("1 fixed gets its desired width", () => {
    assert.deepEqual([1], calculateWidths([1], 100));
  });

  it("2 fixed get their desired widths", () => {
    assert.deepEqual([1, 1], calculateWidths([1, 1], 100));
  });

  it("1 fixed and 1 flexible sum up to 100", () => {
    assert.deepEqual([1, 99], calculateWidths([1, Infinity], 100));
  });

  it("2 fixed and 1 flexible sum up to 100", () => {
    assert.deepEqual([1, 98, 1], calculateWidths([1, Infinity, 1], 100));
  });
});
