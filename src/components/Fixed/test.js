import React from "react";
import { assert } from "chai";
import { shallow } from "enzyme";
import Fixed from "./";

describe("Fixed", () => {
  it("renders a string when passed", () => {
    assert(shallow(<Fixed>foo</Fixed>).contains("foo"));
  });

  it("renders a string when passed alongside a particular width", () => {
    assert(shallow(<Fixed width={5}>foo</Fixed>).contains("foo"));
  });

  it("renders a shortened string when necessary", () => {
    assert.isNotOk(shallow(<Fixed width={2}>foo</Fixed>).contains("foo"));
  });

  it("renders nested Fixed with a width prop", () => {
    assert(shallow((
      <Fixed>
        <Fixed>foo</Fixed>
      </Fixed>
    )).contains(<Fixed width={3}>foo</Fixed>));
  });

  it("renders multiple nested Fixed's with a width prop", () => {
    const wrapper = shallow((
      <Fixed>
        <Fixed>foo</Fixed>
        <Fixed>bar</Fixed>
      </Fixed>
    ));

    assert(wrapper.contains(<Fixed width={3}>foo</Fixed>));
    assert(wrapper.contains(<Fixed width={3}>bar</Fixed>));
  });
});
