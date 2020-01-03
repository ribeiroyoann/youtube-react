import React from "react";
import "./VideoMetadata.scss";
import { Divider, Button, Icon } from "semantic-ui-react";
import { Rating } from "../Rating/Rating";

export function VideoMetadata(props) {
  const videoCount = Number(props.viewCount).toLocaleString() || "";

  return (
    <div className="video-metadata">
      <h3>PNL BLANKA</h3>
      <div className="video-stats">
        <span>{videoCount}</span>
        <div className="video-actions">
          <Rating likeCount="1000" dislikeCount="1" />
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
