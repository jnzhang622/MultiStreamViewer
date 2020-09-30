import React from 'react';
import "../App.css";

class StreamerBarItem extends React.Component {

    state = {
    }

    

    render(){
        // console.log(this.props.streamer)
        return (
            <div className="streamerBarItem">
                <a onClick={e => this.props.streamerItemClick(this.props.streamer.url)}>
                    {this.props.streamer.name}</a>
            </div>
        )
      }
}

export default StreamerBarItem;
