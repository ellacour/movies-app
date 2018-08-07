import React from 'react'
import uuidv4 from 'uuid/v4'

import VideoListItem from '../components/video-list-item'

const movies = ['film1', 'film2', 'film3', 'film4', 'film5'];

const VideoList = () => {
  return (
    <div>
      <ul>
        {
          movies.map(movie => {
            return <VideoListItem key={uuidv4()} movie={movie} />
          })
        }
      </ul>
    </div>
  );
}

export default VideoList;