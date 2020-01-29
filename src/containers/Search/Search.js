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
import { withRouter } from "react-router-dom";

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

  componentDidMount() {
    if (!this.getSearchQuery()) {
      this.props.history.push("/");
    }
    console.log("SEARCH");
    this.searchForVideos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.youtubeApiLoaded !== this.props.youtubeApiLoaded) {
      this.searchForVideos();
    }
  }

  searchForVideos() {
    const searchQuery = this.getSearchQuery();
    if (this.props.youtubeApiLoaded) {
      this.props.searchForVideos(searchQuery);
    }
  }
}

function mapStateToProps(state, props) {
  return {
    youtubeApiLoaded: getYoutubeLibraryLoaded(state),
    searchResults: getSearchResults(state, props.location.search),
    nextPageToken: getSearchNextPageToken(state, props.location.search)
  };
}

function mapDispatchToProps(dispatch) {
  const searchForVideos = searchActions.forVideos.request;
  return bindActionCreators({ searchForVideos }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
