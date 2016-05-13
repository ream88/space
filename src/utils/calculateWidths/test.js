import { assert } from "chai";
import calculateWidths from "./";

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

  it("2 fixed and 2 flexible sum up to 100", () => {
    assert.deepEqual([1, 49, 49, 1], calculateWidths([1, Infinity, Infinity, 1], 100));
  });

  it("2 fixed and 2 flexible sum up to 99", () => {
    assert.deepEqual([1, 49, 48, 1], calculateWidths([1, Infinity, Infinity, 1], 99));
  });

  it("splits the rest for all flexibles equaly", () => {
    assert.deepEqual([33, 1, 33, 1, 32], calculateWidths([Infinity, 1, Infinity, 1, Infinity], 100));
  });

  it("reduces flexible to 0 if necessary", () => {
    assert.deepEqual([3, 0, 8, 0, 3], calculateWidths([3, Infinity, 8, Infinity, 3], 14));
  });

  it("reduces fixed until they match", () => {
    assert.deepEqual([1, 0, 7, 0, 2], calculateWidths([3, Infinity, 8, Infinity, 3], 10));
  });
});
