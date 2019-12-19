import React from "react";
import { shallow } from "enzyme";
import { VideoPreview } from "../VideoPreview";

test("renders VideoPreview", () => {
  const wrapper = shallow(<VideoPreview />);
  expect(wrapper).toMatchSnapshot();
});
