import React from "react";
import VideoListEntry from "./VideoListEntry";

const VideoList = (props) => (
    <div className="video-list media">
      {props.videos.map(element => 
        <VideoListEntry key = {element.id.videoId} video = {element} handleClickOnTitle = {props.handleClickOnTitle} />)}
    </div>
  );
  export default VideoList;