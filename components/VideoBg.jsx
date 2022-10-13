import React from 'react';

const VideoBg = () => {
  return (
    <div>
      <video
        src="/video/skymastering.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        width="100%"
      ></video>
    </div>
  );
};

export default VideoBg;
