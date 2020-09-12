import React from 'react';
import "./App.css";
import ReactPlayer from 'react-player'
import Player from "./Components/Player"


class App extends React.Component {

  state = {
    urls: [],
    searchTerm: "",
  }

  changeVidCode = (e) =>{
    e.preventDefault()
    this.setState({urls: [...this.state.urls, this.state.searchTerm], searchTerm: ""})
  }

  vidCodeFormChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render(){
    console.log(this.state.searchTerm)
    return (
      <div>
        <div className="defaultCenter">
          <form onSubmit={this.changeVidCode}>
            <input onChange={this.vidCodeFormChange}/>
          </form>
        </div>
        <div className="defaultCenter">
          {this.state.urls.map(url => <Player url={url}/>)}
        </div>
      </div>
    )
  }

}
export default App;
