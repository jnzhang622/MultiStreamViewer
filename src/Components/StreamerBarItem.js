import React from 'react';
import "../App.css";

class StreamerBarItem extends React.Component {

    
// function StreamerBarItem(props){
    
    componentDidMount() {
        // e.preventDefault()
        fetch(`https://api.twitch.tv/helix/search/channels?query=${this.props.streamer.name}`, {
            headers: {
                'client-id': `${process.env.CLENTID}`
            }
        })
        .then(resp => resp.json())
        .then(data=>{console.log(data)})
    } 

    render(){
        return (
            <div className={this.props.renderedUrls.includes(this.props.streamer.url) ? 
                "renderedStreamerBarItem": "defaultStreamerBarItem"}>

                <p onClick={() => this.props.streamerItemClick(this.props.streamer.url)}>
                    {this.props.streamer.name}</p>

            </div>
        )
    }
}

export default StreamerBarItem;