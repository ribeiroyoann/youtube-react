import React from "react";
import "./VideoGrid.scss";
import { Divider } from "semantic-ui-react";
import { VideoPreview } from "../VideoPreview/VideoPreview";
import { VideoGridHeader } from "./VideoGridHeader/VideoGridHeader";

// PLACEHOLDER BEFORE API

// export function VideoGrid(props) {
//   const divider = props.hideDivider ? null : <Divider />;
//   return (
//     <React.Fragment>
//       <VideoGridHeader title={props.title} />
//       <div className="video-grid">
//         <VideoPreview />
//         <VideoPreview />
//         <VideoPreview />
//         <VideoPreview />
//         <VideoPreview />
//         <VideoPreview />
//         <VideoPreview />
//         <VideoPreview />
//         <VideoPreview />
//         <VideoPreview />
//         <VideoPreview />
//         <VideoPreview />
//       </div>
//       {divider}
//     </React.Fragment>
//   );
// }

export function VideoGrid(props) {
  if (!props.videos || !props.videos.length) {
    return <div />;
  }
  const gridItems = props.videos.map(video => {
    return <VideoPreview video={video} key={video.id} />;
  });

  const divider = props.hideDivider ? null : <Divider />;
  return (
    <React.Fragment>
      <VideoGridHeader title={props.title} />
      <div className="video-grid">{gridItems}</div>
      {divider}
    </React.Fragment>
  );
}
