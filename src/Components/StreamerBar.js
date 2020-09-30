import React from 'react';
import "../App.css";
import StreamerBarItem from "./StreamerBarItem";

class StreamerBar extends React.Component {

    state = {
    }

    

    render(){
        // console.log(this.props.streamers)
        return (
            <div >
                {
                this.props.streamers.map(streamer => 
                <StreamerBarItem 
                    streamer={streamer} 
                    streamerItemClick={this.props.streamerItemClick}/>) 
                }
            </div>
        )
      }
}

export default StreamerBar;
