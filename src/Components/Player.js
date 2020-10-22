import React from 'react';
import "../App.css";
import ReactPlayer from 'react-player'

class Player extends React.Component {
      render(){
        let {url, height, width, rotation} = this.props;
  // function Player() {

        return (
          <div className="divCont">
            <div>
              <div className="defaultCenter">
              </div>
            </div>
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
            <button onClick={() => this.props.streamerItemClick(url)}>X</button>
          </div>
        )
      }
}

export default Player;
