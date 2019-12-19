import React from "react";
import { shallow } from "enzyme";
import { VideoGridHeader } from "../VideoGridHeader";

describe("VideoGridHeader", () => {
  test("renders VideoGridHeader no props", () => {
    const wrapper = shallow(<VideoGridHeader />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders VideoGridHeader empty title", () => {
    const wrapper = shallow(<VideoGridHeader title="" />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders VideoGridHeader with title", () => {
    const wrapper = shallow(<VideoGridHeader title="header" />);
    expect(wrapper).toMatchSnapshot();
  });
});
