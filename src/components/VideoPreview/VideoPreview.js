import React from "react";
import "./VideoPreview.scss";
import { Image } from "semantic-ui-react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { abbrNum } from "../../services/number-format";
import { getVideoDurationString } from "../../services/duration-format";
import { Link } from "react-router-dom";

// PLACEHOLDER BEFORE API
// export class VideoPreview extends React.Component {
//   render() {
//     const horizontal = this.props.horizontal ? "horizontal" : null;
//     return (
//       <div className={["video-preview", horizontal].join(" ")}>
//         <div className="image-container">
//           <Image src="http://via.placeholder.com/210x118" />
//           <div className="time-label">
//             <span>05:22</span>
//           </div>
//         </div>
//         <div className="video-info">
//           <div className="semi-bold show-max-two-lines">Video Title</div>
//           <div className="video-preview-metadata-container">
//             <div className="channel-title">Channel Title</div>
//             <div>
//               <span>2.1M views • 2 days ago</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

export class VideoPreview extends React.Component {
  render() {
    const { video } = this.props; // ES6 destructuring
    const FormattedViewsTime = VideoPreview.getFormattedViewsAndTime(video);
    const FormattedDuration = getVideoDurationString(
      video.contentDetails.duration
    );
    const expanded = this.props.expanded ? "expanded" : null;
    const description = this.props.expanded ? video.snippet.description : null;

    if (!video) {
      return <div />;
    }
    const horizontal = this.props.horizontal ? "horizontal" : null;
    return (
      <Link to={{ pathname: this.props.pathname, search: this.props.search }}>
        <div className={["video-preview", horizontal, expanded].join(" ")}>
          <div className="image-container">
            <Image src={video.snippet.thumbnails.medium.url} />
            <div className="time-label">
              <span>{FormattedDuration}</span>
            </div>
          </div>
          <div className="video-info">
            <div
              className={["semi-bold", "show-max-two-lines", expanded].join(
                " "
              )}
            >
              {video.snippet.title}
            </div>
            <div className="video-preview-metadata-container">
              <div className="channel-title">{video.snippet.channelTitle}</div>
              <div className="view-and-time">{FormattedViewsTime}</div>
              <div className="show-max-two-lines">{description}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  static getFormattedViewsAndTime(video) {
    const date = new Date(video.snippet.publishedAt);
    const viewCount = video.statistics ? video.statistics.viewCount : null;

    if (viewCount) {
      const viewCountFormat = abbrNum(viewCount, 1);
      return `${viewCountFormat} views • ${timeAgo.format(date)}`;
    }
    return "";
  }
}
