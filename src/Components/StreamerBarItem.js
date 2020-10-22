import React from 'react';
import "../App.css";

// class StreamerBarItem extends React.Component {
//     render(){
    
function StreamerBarItem(props){
    return (
        <div className={props.renderedUrls.includes(props.streamer.url) ? 
            "renderedStreamerBarItem": "defaultStreamerBarItem"}>

            <p onClick={() => props.streamerItemClick(props.streamer.url)}>
                {props.streamer.name}</p>

        </div>
    )
}

// }

export default StreamerBarItem;