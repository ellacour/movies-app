import React, { Component } from 'react'
import axios from 'axios'

import SearchBar from '../components/search-bar'
import VideoList from './video-list'

const API_KEY ="api_key=5895fdbccb756f8c7d6ef142b2c6acc9";
const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL="discover/movie?language=fr&include_adult=false&sort_by=popularity.desc&append_to_response=images"

class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  componentWillMount(){
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(Response => console.log(Response));
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  };
}

export default App;
