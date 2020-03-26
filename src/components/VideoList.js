import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map( video => { return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>});
 
  if (renderedList) {
  return (<div className="ui relaxed divided list" style={{backgroundColor:'white', padding: '30px'}}>{ renderedList }</div>)
}};

export default VideoList;