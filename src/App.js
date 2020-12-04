import React from 'react';
import "./App.css";
import Player from "./Components/Player";
import StreamerBar from "./Components/StreamerBar";


class App extends React.Component {

  state = {
    urls: [],
    streamers: [],
    searchTerm: "",
    height: "auto",
    width: "100%",
    // height: 453,
    // width: 808,
    rotation: 0,
    hideBar: true
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
  showHideBar = () => {
    this.setState({
      hideBar: !this.state.hideBar
    })
  }
  streamerItemClick = (e) =>{
    let checkUrl = (url) => {return url !== e}

    if (this.state.urls.includes(e) !== true){
      this.setState({urls: [...this.state.urls, e]})}
    else
      this.setState({urls: this.state.urls.filter(checkUrl)})
  }

  render(){
    return (
      <div>
        <div className={this.state.hideBar ? "hiddenSideBar" : "shownSidebarDiv"}>
            <div >
              <button className="showBarButton" onClick={this.showHideBar}>{this.state.hideBar ? "Show Sidebar" : "Hide Sidebar"}</button>
            </div>
            {(this.state.hideBar === false) ?
            <StreamerBar
              renderedUrls={this.state.urls} 
              streamers={this.state.streamers} 
              streamerItemClick={this.streamerItemClick}/> : null}
        </div> 
        <div>
          <div className="searchBarDiv">
              <form onSubmit={this.changeVidCode}>
                <input className="searchBar" 
                  onChange={this.vidCodeFormChange} 
                  value={this.state.searchTerm}
                  placeholder="Input Streamer URL Here"/>
              </form>
          </div>
          <div className="defaultCenter">
            <button className="defaultButton" onClick={this.decreaseSize}>-</button>
            <button className="defaultButton" onClick={this.resetSize}>Reset</button>
            <button className="defaultButton" onClick={this.increaseSize}>+</button>
          </div>
          <div className="playerContainer">
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