import React from "react";
import "./Comments.scss";
import { CommentsHeader } from "./CommentsHeader/CommentsHeader";
import { AddComment } from "./AddComment/AddComment";
import { Comment } from "./Comment/Comment";
import { Divider } from "semantic-ui-react";

export class Comments extends React.Component {
  render() {
    if (!this.props.comments) {
      return <div />;
    }

    const comments = this.props.comments.map(comment => {
      return <Comment comment={comment} key={comment.id} />;
    });
    return (
      <div>
        <Divider />
        <CommentsHeader amountComments={this.props.amountComments} />
        <AddComment key="add-comment" />
        {comments}
      </div>
    );
  }
}
