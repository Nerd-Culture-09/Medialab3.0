"use client";

import React from 'react';
import ReactPlayer from 'react-player/youtube';

interface VideoPlayerProps {
  videoUrl: string;
}

export function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const isYouTubeVideo = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

  const getValidYouTubeUrl = (url: string) => {
    if (url.includes("embed")) {
      return url.replace("/embed/", "/watch?v="); // Convert embed URL to watch URL
    }
    return url; // Return regular URLs as-is
  };

  return (
    <div className="video-container">
      {isYouTubeVideo ? (
        <ReactPlayer
          url={getValidYouTubeUrl(videoUrl)}
          controls={true}
          width="100%"
          height="100%"
        />
      ) : (
        <p>Invalid video URL</p>
      )}
    </div>
  );
}

export default VideoPlayer;
