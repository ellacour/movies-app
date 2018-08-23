import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const VideoListItem = (props) => {
  const { movie } = props;
  const playMovie = () => props.callback(movie);

  return <li className='row video-list-item' onClick={playMovie}>
    <div className='col-md-2 video-list-image-wrapper'>
      <image className='video-list-image rounded' src={`${IMAGE_BASE_URL}${movie.poster_path}`}></image>
    </div>
    <dl className='col-md-10'>
      <dt className='video-list-item-title'>{movie.title}</dt>
      <dd className="movie_overview">{movie.overview}</dd>
    </dl>
  </li>;
}

export default VideoListItem;