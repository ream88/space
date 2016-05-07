import { assert } from "chai";

const calculateWidths = (widths, totalWidth) => {
  const fixed = widths.filter(width => width > 0);
  const flexible = widths.filter(width => width === 0);

  totalWidth = totalWidth - fixed.reduce((sum, width) => sum + width, 0);

  let factor = parseInt(totalWidth / flexible.length);
  let rest = totalWidth - factor * flexible.length;

  return widths
    .map(width => {
      if (width === 0) {
        width = factor + rest;
        rest = 0;
      }
      return width;
    });
};

describe("calculateWidths", () => {
  it("1 flexible gets the whole", () => {
    assert.deepEqual([100], calculateWidths([0], 100));
  });

  it("2 flexibles get 50% each", () => {
    assert.deepEqual([50, 50], calculateWidths([0, 0], 100));
  });

  it("2 flexibles get nearly 50% each", () => {
    assert.deepEqual([50, 49], calculateWidths([0, 0], 99));
  });

  it("1 fixed gets its desired width", () => {
    assert.deepEqual([1], calculateWidths([1], 100));
  });

  it("2 fixed get their desired widths", () => {
    assert.deepEqual([1, 1], calculateWidths([1, 1], 100));
  });

  it("1 fixed and 1 flexible sum up to 100", () => {
    assert.deepEqual([1, 99], calculateWidths([1, 0], 100));
  });

  it("2 fixed and 1 flexible sum up to 100", () => {
    assert.deepEqual([1, 98, 1], calculateWidths([1, 0, 1], 100));
  });
});
