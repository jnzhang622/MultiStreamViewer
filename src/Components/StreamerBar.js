import React from 'react';
import "../App.css";
import StreamerBarItem from "./StreamerBarItem";

// class StreamerBar extends React.Component {
//     render(){

function StreamerBar(props) {
    let reArrangedStreamers = props.streamers.sort((a,b) => a.name < b.name ? -1 : 1)
    
    liveCheck = (e) => {
        e.preventDefault()
        fetch(`https://api.twitch.tv/helix/search/channels?query=`, {
            headers: {
                'client-id': `${process.env.CLENTID}`,
                Accept: 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data=>{this.props.handleNewPlaylist(data)}, this.setState({name: ""}))
    }
    
    return (
        <div>
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