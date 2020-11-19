import React from 'react';
import "../App.css";
import StreamerBarItem from "./StreamerBarItem";

// class StreamerBar extends React.Component {
//     render(){

function StreamerBar(props) {
    let reArrangedStreamers = props.streamers.sort((a,b) => a.name < b.name ? -1 : 1)

    return (
        <div className="streamerBar">
            {
            reArrangedStreamers.map(streamer => 
            <StreamerBarItem 
                renderedUrls={props.renderedUrls}
                streamer={streamer} 
                streamerItemClick={props.streamerItemClick}/>) 
            }
        </div>
    )
}

// }

export default StreamerBar;