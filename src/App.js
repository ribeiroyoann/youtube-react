import React, { Component } from "react";
import Home from "./containers/Home/Home";
import Watch from "./containers/Watch/Watch";
import Trending from "./containers/Trending/Trending";
import Search from "./containers/Search/Search";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { Route, Switch, withRouter } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { youtubeLibraryLoaded } from "./store/actions/api";

// const API_KEY = "AIzaSyB_-44Oi7PewAjru_WbP6umtH3JjIDoTRg";
const API_KEY = "AIzaSyAQ6lDwRhCwlxKtdV7QEw_N_o0mzmsD4Fg";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/feed/trending" component={Trending} />
          <Route
            path="/results"
            render={() => <Search key={this.props.location.key} />}
          />
          <Route
            path="/watch"
            render={() => <Watch key={this.props.location.key} />}
          />
          <Route path="/" component={Home} />
        </Switch>
      </AppLayout>
    );
  }
  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load("youtube", "v3", () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));
