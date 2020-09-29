import React from 'react';
import "../App.css";

class StreamerBarItem extends React.Component {

    state = {
    }

    

    render(){
        console.log(this.props.streamer)
        return (
            <div className="streamerBarItem">
                <p>{this.props.streamer.name}</p>
            </div>
        )
      }
}

export default StreamerBarItem;
