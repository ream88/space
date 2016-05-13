import React from "react";
import { assert } from "chai";
import { shallow, mount } from "enzyme";
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

  it("renders multiple deep nested Fixed's with a width prop", () => {
    const wrapper = mount((
      <Fixed>
        <Fixed>
          <Fixed>b</Fixed>
          <Fixed>a</Fixed>
          <Fixed>r</Fixed>
        </Fixed>
      </Fixed>
    ));

    assert(wrapper.contains(<Fixed width={1}>b</Fixed>));
    assert(wrapper.contains(<Fixed width={1}>a</Fixed>));
    assert(wrapper.contains(<Fixed width={1}>r</Fixed>));
  });

  it("renders mixed children properly", () => {
    const wrapper = mount((
      <Fixed> <Fixed>bar</Fixed> </Fixed>
    ));

    assert.equal(" bar ", wrapper.text());
  });
});
