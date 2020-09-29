import React from 'react';
import "./App.css";
import Player from "./Components/Player"
import StreamerBar from "./Components/StreamerBar"


class App extends React.Component {

  state = {
    urls: [],
    streamers: [],
    searchTerm: "",
    height: 500,
    width: 900,
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
      height: 719,
      width: 1261})
  }
  decreaseSize = () =>{
    this.setState({
      height: this.state.height * .9,
      width: this.state.width * .9})
  }

  render(){
    // console.log(this.state.streamers)
    return (
      <div className="divCont">
        <div>
          <StreamerBar streamers={this.state.streamers}/>
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
              <Player url={url} 
                height={this.state.height}
                width={this.state.width}/>)}
          </div>
          <div className="defaultCenter">
            <button onClick={this.decreaseSize}>-</button>
            <button onClick={this.resetSize}>Reset</button>
            <button onClick={this.increaseSize}>+</button>
          </div>
          <div className="searchBarDiv">
            <form onSubmit={this.changeVidCode}>
              <input className="searchBar" 
                onChange={this.vidCodeFormChange} 
                value={this.state.searchTerm}/>
            </form>
          </div>
        </div>
        
      </div>
    )
  }

}
export default App;
