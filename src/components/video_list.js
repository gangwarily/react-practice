import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    return (<ul className="col-md-4 list-group">
                {props.videos.map(function(video) { return <VideoListItem key={video.etag} video={video}/>;})}
            </ul>);
};

export default VideoList;