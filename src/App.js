import React from 'react';
import "./App.css";
import ReactPlayer from 'react-player'
import Player from "./Components/Player"


class App extends React.Component {

  state = {
    urls: [],
    searchTerm: "",
    height: 500,
    width: 900,
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
    console.log(this.state.searchTerm)
    return (
      <div>
        <div className="defaultCenter">
          <form onSubmit={this.changeVidCode}>
            <input onChange={this.vidCodeFormChange}/>
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
      </div>
    )
  }

}
export default App;
