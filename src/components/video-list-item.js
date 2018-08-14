import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const VideoListItem = ({movie}) => {
  return <li className='row video-list-item-section'>
    <div className='col-md-2 video-list-image-wrapper'>
      <image className='video-list-image rounded' src={`${IMAGE_BASE_URL}${movie.poster_path}`}></image>
    </div>
    <dl className='col-md-10 video-list-item-details'>
    <dt>{movie.title}</dt>
    <dd>{movie.overview}</dd>
    </dl>
    </li>;
}

export default VideoListItem;