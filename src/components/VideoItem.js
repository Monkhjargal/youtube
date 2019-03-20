import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.default.url} className="ui image" alt={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;