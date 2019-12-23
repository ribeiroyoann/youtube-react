import React from "react";
import { Video } from "../Video";
import { shallow } from "enzyme";

test("renders video component correctly", () => {
  const wrapper = shallow(<Video id="BtyHYIpykN0" />);
  expect(wrapper).toMatchSnapshot();
});

test("renders null if no video id", () => {
  const wrapper = shallow(<Video />);
  expect(wrapper).toMatchSnapshot();
});
