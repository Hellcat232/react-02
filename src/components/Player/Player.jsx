import { useRef } from "react";

const Player = ({ source }) => {
  const playerRef = useRef();

  const play = () => playerRef.current.play(HTMLMediaElement.play());
  const pause = () => playerRef.current.pause(HTMLMediaElement.pause());
  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
};

export default Player;
