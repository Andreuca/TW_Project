import { Player } from 'video-react';
import "video-react/dist/video-react.css"

function PresentationVideo() {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};

export default PresentationVideo