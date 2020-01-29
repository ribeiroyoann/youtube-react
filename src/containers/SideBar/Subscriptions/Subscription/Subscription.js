import React from "react";
import "./Subscription.scss";
import { Menu, Image, Icon } from "semantic-ui-react";
import avatar from "../../../../assets/images/avatar.png";

export function Subscription(props) {
  let rightElement = null;
  const { broadcasting, amountNewVideos } = props;
  if (broadcasting) {
    rightElement = <Icon name="signal" />;
  } else if (amountNewVideos) {
    rightElement = <span className="new-videos=count">{amountNewVideos}</span>;
  }

  return (
    <Menu.Item>
      <div className="subscription">
        <div>
          <Image src={avatar} avatar />
          <span>{props.label}</span>
        </div>
        {rightElement}
      </div>
    </Menu.Item>
  );
}

export default Subscription;
