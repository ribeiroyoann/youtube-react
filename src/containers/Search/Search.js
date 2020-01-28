import React from "react";
import "./Search.scss";
import { VideoList } from "../../components/VideoList/VideoList";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import {
  getSearchNextPageToken,
  getSearchResults
} from "../../store/reducers/search";
import * as searchActions from "../../store/actions/search";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getSearchParam } from "../../services/url";

class Search extends React.Component {
  render() {
    return (
      <VideoList
        bottomReachedCallback={this.bottomReachedCallback}
        showLoader={true}
        videos={this.props.searchResults}
      />
    );
  }

  getSearchQuery() {
    return getSearchParam(this.props.location, "search_query");
  }

  searchForVideos() {
    const searchQuery = this.getSearchQuery();
    if (this.props.youtubeApiLoaded) {
      this.props.searchForVideos(searchQuery);
    }
  }

  componentDidMount() {
    if (!this.getSearchQuery()) {
      this.props.history.push("/");
    }
    this.searchForVideos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.youtubeApiLoaded !== this.props.youtubeApiLoaded) {
      this.searchForVideos();
    }
  }
}

function mapStateToProps(state) {
  return {
    youtubeApiLoaded: getYoutubeLibraryLoaded(state),
    searchResults: getSearchResults(state),
    nextPageToken: getSearchNextPageToken(state)
  };
}

function mapDispatchToProps(dispatch) {
  const searchForVideos = searchActions.forVideos.request;
  return bindActionCreators({ searchForVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
