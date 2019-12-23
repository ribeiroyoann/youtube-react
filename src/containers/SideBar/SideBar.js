import React from "react";
import { Menu, Divider } from "semantic-ui-react";
import SideBarItem from "./SideBarItem/SideBarItem";
import "./SideBar.scss";
import SideBarHeader from "./SideBarHeader/SideBarHeader";
import SideBarFooter from "./SideBarFooter/SideBarFooter";
import { Subscriptions } from "./Subscriptions/Subscriptions";

const str = 'Vidéos "J\'aime"'; // to replace

export class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed="left" className="side-nav">
        <SideBarItem highlight={true} label="Acceuil" icon="home" />
        <SideBarItem label="Tendances" icon="fire" />
        <SideBarItem label="Abonnements" icon="spy" />
        <Divider />
        <SideBarHeader title="Bibliothèque" />
        <SideBarItem label="Historique" icon="history" />
        <SideBarItem label="À regarder plus tard" icon="clock" />
        <SideBarItem label={str} icon="thumbs up" />
        <Divider />
        <Subscriptions />
        <SideBarHeader title="Autre contenus youtubes" />
        <SideBarItem label="Films et TV" icon="film" />
        <Divider />
        <SideBarItem label="Historique des signalements" icon="flag" />
        <SideBarItem label="Aide" icon="help circle" />
        <SideBarItem label="Envoyer des commentaires" icon="comment" />
        <Divider />
        <SideBarFooter />
      </Menu>
    );
  }
}

export default SideBar;
