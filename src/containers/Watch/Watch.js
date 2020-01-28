import React from "react";
import WatchContent from "./WatchContent/WatchContent";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import * as watchActions from "../../store/actions/watch";
import * as commentActions from "../../store/actions/comment";
import { withRouter } from "react-router-dom";
import { getSearchParam } from "../../services/url";
import { getChannelId } from "../../store/reducers/videos";
import { getCommentNextPageToken } from "../../store/reducers/comment";

export class Watch extends React.Component {
  render() {
    const videoId = this.getVideoId();
    return (
      <WatchContent
        videoId={videoId}
        channelId={this.props.channelId}
        bottomReachedCallback={this.fetchMoreComments}
        nextPageToken={this.props.nextPageToken}
      />
    );
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  fetchMoreComments = () => {
    if (this.props.nextPageToken) {
      this.props.fetchCommentThread(
        this.getVideoId(),
        this.props.nextPageToken
      );
    }
  };

  getVideoId() {
    return getSearchParam(this.props.location, "v");
  }

  fetchWatchContent() {
    const videoId = this.getVideoId();
    if (!videoId) {
      this.props.history.push("/");
    }
    console.log(videoId, this.props.channelId);
    this.props.fetchWatchDetails(videoId, this.props.channelId);
  }

  fetchMoreComments = () => {
    if (this.props.nextPageToken) {
      this.props.fetchCommentThread(
        this.getVideoId(),
        this.props.nextPageToken
      );
    }
  };
}

function mapStateToProps(state, props) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    channelId: getChannelId(state, props.location, "v"),
    nextPageToken: getCommentNextPageToken(state, props.location)
  };
}

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  const fetchCommentThread = commentActions.thread.request;
  return bindActionCreators(
    { fetchWatchDetails, fetchCommentThread },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));
