import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import Header from './header';

class Main extends React.Component {
  businessSearch(term){
    console.log(term);
  }

  render() {
    console.log(this.businessSearch);
    return (
      <div id='main' className='main-content'>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout }
          onSearchTermChange={ this.businessSearch } />
        <h1>gulp</h1>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);



// import _ from 'lodash';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import YTSearch from 'youtube-api-search';
//
// import SearchBar from './components/search_bar';
// import VideoList from './components/video_list';
// import VideoDetail from './components/video_detail';
//
// const API_KEY = 'AIzaSyD3UxNbOVMcjlHUPBD37eybsFYWFJGVJg0';
//
//
// class App extends Component {
//   constructor(props){
//     super(props);
//
//     this.state = {
//       videos: [],
//       selectedVideo: null
//     };
//
//     this.videoSearch('puppets');
//
//   }
//
//   videoSearch(searchTerm){
//     YTSearch(
//       {key: API_KEY, term: searchTerm},
//       (videos) => {
//         this.setState({
//           videos: videos,
//           selectedVideo: videos[0]
//         });
//        }
//     );
//   }
//
//   render() {
//     const videoSearch = _.debounce( searchTerm => {
//       this.videoSearch(searchTerm);
//     }, 300);
//
//     return (
//       <div>
//         <SearchBar onSearchTermChange={videoSearch}/>
//         <VideoDetail video={this.state.selectedVideo}/>
//         <VideoList
//           onVideoSelect={ selectedVideo => {
//             this.setState({selectedVideo});
//           }}
//           videos={this.state.videos}
//         />
//       </div>
//     );
//   }
// }
