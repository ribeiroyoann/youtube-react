import React from "react";
import "./VideoInfoBox.scss";
import { Image, Button } from "semantic-ui-react";
import Linkify from "react-linkify";
import { getPublishedAtDateString } from "../../services/date-format";
import { abbrNum } from "../../services/number-format";

export class VideoInfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  render() {
    if (!this.props.video || !this.props.channel) {
      return <div />;
    }

    const descriptionParagraphs = this.getDescriptionParagraphs();
    const { descriptionTextClass, buttonTitle } = this.getConfig();
    const publishedAtDate = getPublishedAtDateString(
      this.props.video.snippet.publishedAt
    );

    const { channel } = this.props;
    const subscriberCount = abbrNum(channel.statistics.subscriberCount, 1);
    console.log(channel);

    return (
      <div className="video-info-box">
        <Image
          className="channel-image"
          src={channel.snippet.thumbnails.medium.url}
          circular
        />
        <div className="video-info">
          <div className="channel-name"> {channel.snippet.title}</div>
          <div className="video-publication-date">{publishedAtDate}</div>
        </div>
        <Button color="youtube">
          Subscribe {subscriberCount.toUpperCase()}
        </Button>
        <div className="video-description">
          <div className={descriptionTextClass}>{descriptionParagraphs} </div>
          <Button compact onClick={this.onToggleCollapseButtonClick}>
            {buttonTitle}
          </Button>
        </div>
      </div>
    );
  }

  getConfig() {
    let descriptionTextClass = "collapsed";
    let buttonTitle = "Show More";
    if (!this.state.collapsed) {
      descriptionTextClass = "expanded";
      buttonTitle = "Show Less";
    }
    return {
      descriptionTextClass,
      buttonTitle
    };
  }

  getDescriptionParagraphs() {
    const videoDescription = this.props.video.snippet
      ? this.props.video.snippet.description
      : null;
    if (!videoDescription) {
      return null;
    }
    return videoDescription.split("\n").map((paragraph, index) => (
      <p key={index}>
        <Linkify>{paragraph}</Linkify>
      </p>
    ));
  }

  onToggleCollapseButtonClick = () => {
    this.setState(prevState => {
      return {
        collapsed: !prevState.collapsed
      };
    });
  };
}
