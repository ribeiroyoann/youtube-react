import React from "react";
import { shallow } from "enzyme";
import { SideBarItem } from "../SideBarItem";

describe("SideBarItem", () => {
  test("renders empty SideBarItem", () => {
    const wrapper = shallow(<SideBarItem />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders highlighted SideBarItem that navigates to /feed/trending", () => {
    const wrapper = shallow(
      <SideBarItem highlighted icon="fire" label="Trending" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("renders SideBarItem to history", () => {
    const wrapper = shallow(<SideBarItem icon="history" label="History" />);
    expect(wrapper).toMatchSnapshot();
  });
});
