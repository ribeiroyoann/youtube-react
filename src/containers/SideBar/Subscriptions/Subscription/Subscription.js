import React from "react";
import "./Subscription.scss";
import { Menu, Image } from "semantic-ui-react";
import avatar from "../../../../assets/images/adkhey.png";

export function Subscription(props) {
  return (
    <Menu.Item className="sidebar-sub">
      <div className="sidebar-item-alignment-container">
        <span>
          {" "}
          <Image src={avatar} avatar />{" "}
        </span>
        <span>{props.label}</span>
        <span>{props.live}</span>
      </div>
    </Menu.Item>
  );
}

export default Subscription;
