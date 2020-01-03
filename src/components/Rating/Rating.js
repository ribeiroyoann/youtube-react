import React from "react";
import "./Rating.scss";
import { Icon, Progress } from "semantic-ui-react";

export function Rating(props) {
  let progress = null;

  if (props.likeCount && props.dislikeCount) {
    const percent =
      (100 * Number(props.likeCount)) /
      (Number(props.likeCount) + Number(props.dislikeCount));
    console.log(percent);
    progress = <Progress className="progress" percent={percent} size="tiny" />;
  }
  return (
    <div className="rating">
      <div className="thumbs-up">
        <Icon name="thumbs outline up"></Icon>
        <span>{props.likeCount}</span>
      </div>
      <div className="thumbs-down">
        <Icon name="thumbs outline down"></Icon>
        <span>{props.dislikeCount}</span>
      </div>
      {progress}
    </div>
  );
}
