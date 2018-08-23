import React, { Component } from 'react'
import axios from 'axios'

import SearchBar from '../components/search-bar'
import VideoDetail from '../components/video-detail'
import Video from '../components/video'
import CustomFooter from '../components/footer'

import VideoList from './video-list'

const API_KEY = "api_key=5895fdbccb756f8c7d6ef142b2c6acc9";
const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&include_adult=false&sort_by=popularity.desc&append_to_response=images"
const SEARCH_URL = "search/movie?language=fr&include_adult=false"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { moviesList: {}, currentMovie: {} }
  }
  componentWillMount() {
    this.initMovies();
  };

  initMovies() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function (response) {
      this.setState({
        moviesList: response.data.results.slice(1, 6),
        currentMovie: response.data.results[0]
      }, function () {
        this.applyVideoToCurrentMovie();
      });
    }.bind(this));
  }

  applyVideoToCurrentMovie() {
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function (response) {
      const youtubeKey = response.data.videos.results[0].key;
      let newCurrentMovieState = this.state.currentMovie;
      newCurrentMovieState.videoId = youtubeKey;
      this.setState({ currentMovie: newCurrentMovieState });
      scroll(0, 0);
    }.bind(this));
  }

  onClickListItem(movie) {
    this.setState({ currentMovie: movie }, function () {
      this.applyVideoToCurrentMovie();
    })
  }

  onClickCurrentMovie(searchText) {
    axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(function (response) {
      if (response.data && response.data.results[0]) {
        if (response.data.results[0].id != this.state.currentMovie.id) {
          this.setState({
            currentMovie: response.data.results[0]
          }, () => {
            this.applyVideoToCurrentMovie();
          });
        }
      }
    }.bind(this));
  }

  render() {

    const renderVideoList = () => {
      if (this.state.moviesList.length >= 5) {
        return <VideoList moviesList={this.state.moviesList} callback={this.onClickListItem.bind(this)} />
      }
    }

    return (
      <div>
        <div className='row'>
          <div className='col-md-10 mx-auto text-center'>
            <h1 className='app-title' >My little movie app</h1>
          </div>
        </div>
        <div className='search-bar-section'>
          <SearchBar callback={this.onClickCurrentMovie.bind(this)} />
        </div>
        <div className='video-section'>
          <Video videoId={this.state.currentMovie.videoId} />
        </div>
        <div className='video-detail-section'>
          <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} />
        </div>
        <div className='video-list-section'>
          {renderVideoList()}
        </div>
        <CustomFooter />
      </div>
    );
  };
}

export default App;
