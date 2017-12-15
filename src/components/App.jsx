// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div id="search">
//           <div><h5><em>search <Search/></em></h5></div>
            
//         </div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div id="player"><h5><VideoPlayer video={window.exampleVideoData[0]}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div id="list">
//           <VideoList videos={window.exampleVideoData}/>
//         </div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  
  constructor(props) {
    super(props); // 
    this.state = {
      videos: exampleVideoData,
      extraVideos: window.youTubeVideoData,
      video: exampleVideoData[0],
    };
  }
  
  displaySearchResult(youTubeVideos) {
    this.setState({
      video: youTubeVideos[0],
      videos: youTubeVideos
    });
  }
  
  handleVideoClick(value) {
    
    this.setState({
      video: value,
    });
  }
  
  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div id="search">
              <div><h5><em>search <Search handleSearch={this.displaySearchResult.bind(this)}/></em></h5></div>
                
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div id="player"><h5><VideoPlayer video={this.state.video}/></h5></div>
          </div>
          <div className="col-md-5">
            <div id="list">
              <h5><VideoList videos={this.state.videos} onClick={this.handleVideoClick.bind(this)} /></h5>
            </div>
          </div>
        </div>
      </div>
    
    );
  }
}
 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//AIzaSyCZI8rHy4F1uSsxbG8y6JVn4qXw_s0hC28