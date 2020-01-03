import React from "react";
import "./Comments.scss";
import { CommentsHeader } from "./CommentsHeader/CommentsHeader";
import { AddComment } from "./AddComment/AddComment";
import { Comment } from "./Comment/Comment";
import { Divider } from "semantic-ui-react";

export class Comments extends React.Component {
  render() {
    return (
      <div>
        <Divider />
        <CommentsHeader amountComments={this.props.amountComments} />
        <AddComment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}
