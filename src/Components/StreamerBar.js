import React from 'react';
import "../App.css";


class StreamerBar extends React.Component {

    state = {
        streamers: [],
    }

    componentDidMount() {
        fetch(`http://localhost:6001/streamers`)
          .then(resp => resp.json())
          .then(arr => this.setState({ streamers: arr }))
      }

    render(){
        return (
            <div>
                {}
            </div>
        )
      }
}

export default StreamerBar;
