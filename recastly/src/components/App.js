import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import {fakeData} from "./fakeData"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos : fakeData,
      currVideo : fakeData[0]
    }
    this.handleClickOnTitle = this.handleClickOnTitle.bind(this);
  }

handleClickOnTitle(video){
  this.setState({
    currVideo : video
  })
}

render() {
  return (
    <div>
      <Nav />
      <div>
        <VideoPlayer video = {this.state.currVideo}/> 
      </div>
      <div>
        <VideoList handleClickOnTitle = {this.handleClickOnTitle} videos = {this.state.videos}/>
      </div>
    </div>
  )
}

}

export default App;
