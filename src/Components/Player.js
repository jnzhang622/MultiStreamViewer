import React from 'react';
import "../App.css";
import ReactPlayer from 'react-player'

function Player(props) {
  let {url, height, width, rotation} = props;

  return (
    <div className="vidCont">
      <div className="videoPlayer" 
        style={{transform: `rotate(${rotation}deg)`}}>
        <ReactPlayer
          url={url}
          height={width *0.5631188118811881}
          width={width}
          playing = {true}
          controls = {true}
        />
      </div>
      <button className="defaultButton" onClick={() => props.streamerItemClick(url)}>X</button>
    </div>
  )
}

// }

export default Player;