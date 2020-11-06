import React from 'react';
import "../App.css";
import ReactPlayer from 'react-player'

// class Player extends React.Component {
//       render(){


function Player(props) {
  let {url, height, width, rotation} = props;

  return (
    <div className="divCont">
      <div className="videoPlayer" 
        style={{transform: `rotate(${rotation}deg)`}}>
        <ReactPlayer
          url={url}
          height={height}
          width={width}
          playing = {true}
          controls = {true}
        />
      </div>
      <button onClick={() => props.streamerItemClick(url)}>X</button>
    </div>
  )
}

// }

export default Player;