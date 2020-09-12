import React from 'react';
import "../App.css";
import ReactPlayer from 'react-player'


class Player extends React.Component {
    state={
        height: 600,
        width: 1100,
        searchTerm: "",
        rotation: 0,
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
      rotateButton = () =>{
        if (this.state.rotation >= 360){
          this.setState({rotation:0})
        }
        else this.setState({rotation: this.state.rotation + 90})
      }
    
    
      render(){
        return (
          <div className="divCont">
            <div>
              <div className="defaultCenter">
                {/* <form onSubmit={this.changeVidCode}>
                  <input onChange={this.vidCodeFormChange}/>
                </form> */}
              </div>
              <div className="defaultCenter">
                <button onClick={this.decreaseSize}>-</button>
                <button onClick={this.resetSize}>Reset</button>
                <button onClick={this.increaseSize}>+</button>
              </div>
              {/* <div className="defaultCenter">
                <button onClick={this.rotateButton}>Rotate</button>
              </div> */}
            </div>
            <div className="videoPlayer" 
              style={{transform: `rotate(${this.state.rotation}deg)`}}>
              <ReactPlayer
                url={`${this.props.url}`}
                height={this.state.height}
                width={this.state.width}
                playing = {true}
                controls = {true}
              />
            </div>
          </div>
        )
      }
}

export default Player;
