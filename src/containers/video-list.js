import React from 'react'

import VideoListItem from '../components/video-list-item'

const VideoList = (props) => {

  const { moviesList } = props;

  const recieveCallback = (movie) =>{
    props.callback(movie);
  };

  return (
    <div>
      <h2 className="section-title">Top 5</h2>
      <ul className="video-list-items">
        {
          moviesList.map(movie => {
            return <VideoListItem key={movie.id} movie={movie} callback={recieveCallback} />
          })
        }
      </ul>
    </div>
  );
}

export default VideoList;