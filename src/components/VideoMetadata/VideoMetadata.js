import React from "react";
import "./VideoMetadata.scss";
import { Divider, Button, Icon } from "semantic-ui-react";
import { Rating } from "../Rating/Rating";

export function VideoMetadata(props) {
  if (!props.video || !props.video.statistics) {
    return <div />;
  }
  const videoCount =
    Number(props.video.statistics.viewCount).toLocaleString() || "";

  return (
    <div className="video-metadata">
      <h3>{props.video.snippet.title}</h3>
      <div className="video-stats">
        <span>{videoCount}</span>
        <div className="video-actions">
          <Rating
            likeCount={props.video.statistics.likeCount}
            dislikeCount={props.video.statistics.dislikeCount}
          />
          <Button basic icon labelPosition="left">
            <Icon name="share" />
            Share
          </Button>
          <Button basic icon>
            <Icon name="add circle" />
          </Button>
          <Button basic icon>
            <Icon name="ellipsis horizontal" />
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
}
