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
    <div className="video-container flex justify-center w-full lg:ml-10 ml-2">
      {isYouTubeVideo ? (
        <div className="responsive-player">
          <ReactPlayer
            url={getValidYouTubeUrl(videoUrl)}
            controls={true}
            width="100%"
            height="100%"
            className="react-player"
          />
        </div>
      ) : (
        <p>Invalid video URL</p>
      )}
    </div>
  );
}

export default VideoPlayer;
