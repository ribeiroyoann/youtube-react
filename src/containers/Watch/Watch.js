import React from "react";
import "./Watch.scss";
import { Video } from "../../components/Video/Video";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import { RelatedVideos } from "../../components/RelatedVideos/RelatedVideos";
import { NextUpVideo } from "../../components/NextUpVideo/NextUpVideo";

export class Watch extends React.Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="u8bHjdljyLw" />
        <div
          className="metadata"
          style={{ width: "100%", height: "100px", background: "#F91112" }}
        >
          Metadata
        </div>
        <div
          className="video-info-box"
          style={{ width: "100%", height: "100px", background: "#BD10E0" }}
        >
          Video Info box
        </div>
        <div
          className="comments"
          style={{ width: "100%", height: "100px", background: "#9013FE" }}
        >
          Comments
        </div>
        <RelatedVideos className="relatedVideos" />
      </div>
    );
  }
}
