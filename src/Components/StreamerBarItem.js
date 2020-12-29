import React from 'react';
import $ from 'jquery';
import "../App.css";

class StreamerBarItem extends React.Component {
    state = {

    }
// function StreamerBarItem(props){
    
    // componentDidMount(e) {
    //     e.preventDefault()
    //     fetch(`https://api.twitch.tv/helix/search/channels?query=${this.props.streamer.name}`, {
    //         headers: {
    //             'client-id': `${process.env.CLENTID}`
    //         }
    //     })
    //     .then(resp => resp.json())
    //     .then(data=>{console.log(data)})
    // } 

    // url: 'https://api.twitch.tv/helix/streams?user_login=Zhajn',

    componentDidMount(){
        $.ajax({
          url:`https://api.twitch.tv/helix/search/channels?query=${this.props.streamer.name}`,
          headers: {"Client-ID": `${process.env.CLENTID}`},
          dataType:'json',
          cache: false,
          success: function(arr){
            console.log(arr)
            this.setState({streamerInfo: arr.streamers});
          }.bind(this),
          error: function(xhr, status, err){
            console.log(err);
            alert(err);
          }
        });
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