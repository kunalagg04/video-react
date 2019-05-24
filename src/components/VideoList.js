import React from "react";
import VideoItem from "./VideoItem";
import { tsPropertySignature } from "@babel/types";

/* const VideoList = props => {
  const renderedList = props.videos.map(video => {
    return <VideoItem />;
  }); 

Here we are accessing only videos of props hence instead of passing props to functional comp we can pass videos. 
Mapping is done over all elem of videos array.  */

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
