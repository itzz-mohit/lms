import React from "react";

const Video = () => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wRNinF7YQqQ?si=9T8ehY0U2vI8VBnC"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
