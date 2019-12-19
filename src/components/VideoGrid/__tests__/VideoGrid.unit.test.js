import React from "react";
import { shallow } from "enzyme";
import { VideoGrid } from "../VideoGrid";

describe("VideoGrid", () => {
  test("renders VideoGrid no props", () => {
    const wrapper = shallow(<VideoGrid />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders VideoGrid with title", () => {
    const wrapper = shallow(<VideoGrid title="title" />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders VideoGrid no divider", () => {
    const wrapper = shallow(<VideoGrid hideDivider={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
