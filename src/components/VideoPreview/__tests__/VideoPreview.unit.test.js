import React from "react";
import { shallow } from "enzyme";
import { VideoPreview } from "../VideoPreview";

test("renders VideoPreview vertically", () => {
  const wrapper = shallow(<VideoPreview />);
  expect(wrapper).toMatchSnapshot();
});

test("renders VideoPreview horizontally", () => {
  const wrapper = shallow(<VideoPreview horizontal={true} />);
  expect(wrapper).toMatchSnapshot();
});
