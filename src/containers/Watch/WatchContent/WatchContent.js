import React from "react";
import "./WatchContent.scss";
import { Video } from "../../../components/Video/Video";
import { VideoMetadata } from "../../../components/VideoMetadata/VideoMetadata";
import { VideoInfoBox } from "../../../components/VideoInfoBox/VideoInfoBox";
import { Comments } from "../../Comments/Comments";
import { RelatedVideos } from "../../../components/RelatedVideos/RelatedVideos";
import {
  getVideoById,
  getRelatedVideos,
  getAmountComments
} from "../../../store/reducers/videos";
import { connect } from "react-redux";
import { getChannel } from "../../../store/reducers/channels";
import { getCommentsForVideo } from "../../../store/reducers/comment";
import { InfiniteScroll } from "../../../components/InfiniteScroll/InfiniteScroll";

class WatchContent extends React.Component {
  render() {
    if (!this.props.videoId) {
      return <div />;
    }
    return (
      <InfiniteScroll
        bottomReachedCallback={this.props.bottomReachedCallback}
        showLoader={this.shouldShowLoader()}
      >
        <div className="watch-grid">
          <Video className="video" id={this.props.videoId} />
          <VideoMetadata video={this.props.video} />
          <VideoInfoBox
            className="video-info-box"
            video={this.props.video}
            channel={this.props.channel}
          />
          <Comments
            comments={this.props.comments}
            amountComments={this.props.amountComment}
          />
          <RelatedVideos
            className="relatedVideos"
            videos={this.props.relatedVideos}
          />
        </div>
      </InfiniteScroll>
    );
  }

  shouldShowLoader() {
    return !!this.props.nextPageToken;
  }
}

function mapStateToProps(state, props) {
  return {
    relatedVideos: getRelatedVideos(state, props.videoId),
    video: getVideoById(state, props.videoId),
    channel: getChannel(state, props.channelId),
    comments: getCommentsForVideo(state, props.videoId),
    amountComments: getAmountComments(state, props.videoId)
  };
}
export default connect(mapStateToProps, null)(WatchContent);
