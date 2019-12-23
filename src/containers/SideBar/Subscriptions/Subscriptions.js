import React from "react";
import Subscription from "./Subscription/Subscription";
import { SideBarHeader } from "../SideBarHeader/SideBarHeader";
import { Divider } from "semantic-ui-react";

export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title="Abonnements" />
        <Subscription label="PNL" amountNewVideos={3} />
        <Subscription label="Agathe" amountNewVideos={1} broadcasting />
        <Divider />
      </React.Fragment>
    );
  }
}

export default Subscriptions;
