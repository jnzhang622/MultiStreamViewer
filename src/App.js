import React from 'react';
import "./App.css";
import Player from "./Components/Player"
import StreamerBar from "./Components/StreamerBar"


class App extends React.Component {
  // height: 315
  // width: 560,

  // height: 550
  // width: 750

  state = {
    urls: [],
    streamers: [],
    searchTerm: "",
    height: 421,
    width: 750,
    rotation: 0,
  }

  componentDidMount() {
    fetch(`http://localhost:3001/streamers`)
      .then(resp => resp.json())
      .then(arr => this.setState({ streamers: arr }))
  }

  changeVidCode = (e) =>{
    e.preventDefault()
    this.setState({urls: [...this.state.urls, this.state.searchTerm], searchTerm: ""})
  }

  vidCodeFormChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }
    
  increaseSize = () =>{
    this.setState({
      height: this.state.height * 1.1,
      width: this.state.width * 1.1})
  }
  resetSize = () =>{
    this.setState({
      height: 421,
      width: 750})
  }
  decreaseSize = () =>{
    this.setState({
      height: this.state.height * 0.9,
      width: this.state.width * 0.9})
  }
  streamerItemClick = (e) =>{
    let updateUrls = []
    if (this.state.urls.includes(e) !== true){
      this.setState({urls: [...this.state.urls, e]})}
    else
      {this.state.urls.map(url => {
        if (url !== e)
        updateUrls = [...updateUrls, url]})
        this.setState({urls: updateUrls})}
  }

  render(){
    return (
      <div>
        <div className="streamerBar">
          <StreamerBar 
            renderedUrls={this.state.urls} 
            streamers={this.state.streamers} 
            streamerItemClick={this.streamerItemClick}/>
        </div>

        <div>
          <div className="searchBarDiv">
            <form onSubmit={this.changeVidCode}>
              <input className="searchBar" 
                onChange={this.vidCodeFormChange} 
                value={this.state.searchTerm}/>
            </form>
          </div>
          <div className="defaultCenter">
            <button onClick={this.decreaseSize}>-</button>
            <button onClick={this.resetSize}>Reset</button>
            <button onClick={this.increaseSize}>+</button>
          </div>
          <div className="defaultCenter">
            {this.state.urls.map(url => 
              <Player 
                url={url} 
                rotation= {this.state.rotation}
                height={this.state.height}
                width={this.state.width}
                streamerItemClick={this.streamerItemClick}/>)}
          </div>
        </div>

      </div>
    )
  }

}
export default App;