import React from "react";
import { assert } from "chai";
import { shallow, mount } from "enzyme";
import Flexible from "./";

describe("Flexible", () => {
  it("renders a string when passed", () => {
    assert(shallow(<Flexible width={3}>foo</Flexible>).contains("foo"));
  });

  it("renders a repeated string when passed alongside a particular width", () => {
    assert(shallow(<Flexible width={5}>-</Flexible>).contains("-----"));
  });

  it("renders a shortened string when necessary", () => {
    assert.isNotOk(shallow(<Flexible width={2}>foo</Flexible>).contains("foo"));
  });

  it("renders nested Flexible", () => {
    const wrapper = mount((
      <Flexible width={3}>
        <Flexible>foo</Flexible>
      </Flexible>
    ));

    assert(wrapper.contains(<Flexible width={3}>foo</Flexible>));
  });

  it("renders multiple nested Flexible's", () => {
    const wrapper = mount((
      <Flexible width={6}>
        <Flexible>foo</Flexible>
        <Flexible>bar</Flexible>
      </Flexible>
    ));

    assert(wrapper.contains(<Flexible width={3}>foo</Flexible>));
    assert(wrapper.contains(<Flexible width={3}>bar</Flexible>));
  });
});
