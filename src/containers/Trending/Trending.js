import React from "react";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import {
  getMostPopularVideos,
  allMostPopularVideosLoaded,
  getMostPopularVideosNextPageToken
} from "../../store/reducers/videos";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as videoActions from "../../store/actions/video";
import { VideoList } from "../../components/VideoList/VideoList";

export class Trending extends React.Component {
  render() {
    const loaderActive = this.shouldShowLoader();

    return (
      <VideoList
        bottomReachedCallback={this.fetchMoreVideos}
        showLoader={loaderActive}
        videos={this.props.videos}
      />
    );
  }

  shouldShowLoader() {
    return !this.props.allMostPopularVideosLoaded;
  }

  getVideoPreviews() {
    return this.props.videos.map(video => (
      <VideoPreview
        horizontal={true}
        expanded={true}
        video={video}
        key={video.id}
        pathname={"/watch"}
        search={`?v='` + video.id}
      />
    ));
  }

  bottomReachedCallback = () => {
    if (this.props.nextPageToken) {
      this.props.searchForVideos(
        this.getSearchQuery(),
        this.props.nextPageToken,
        25
      );
    }
  };

  fetchTrendingVideos() {
    if (this.props.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos(20, true);
    }
  }

  fetchMoreVideos = () => {
    const { nextPageToken } = this.props;
    console.log(nextPageToken);

    if (this.props.youtubeLibraryLoaded && nextPageToken) {
      console.log("fetch");
      this.props.fetchMostPopularVideos(1, true, nextPageToken);
    }
  };

  componentDidMount() {
    this.fetchTrendingVideos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.youtubeLibradyLoaded !== this.props.youtubeLibraryLoaded) {
      this.fetchTrendingVideos();
    }
  }
}

function mapStateToProps(state) {
  return {
    videos: getMostPopularVideos(state),
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    nextPageToken: getMostPopularVideosNextPageToken(state),
    allMostPopularVideosLoaded: allMostPopularVideosLoaded(state)
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  return bindActionCreators({ fetchMostPopularVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
