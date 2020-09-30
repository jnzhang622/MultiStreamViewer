import React from 'react';
import "../App.css";

class StreamerBarItem extends React.Component {

    state = {
        rendered: false
    }

    renderedState = () => {
        this.setState({rendered: !this.state.rendered})
    }

    

    render(){
        // console.log(this.props.streamer)
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
