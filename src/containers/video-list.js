import React from 'react'

import VideoListItem from '../components/video-list-item'

const VideoList = (props) => {

  const { moviesList, context } = props;

  const recieveCallback = (movie) =>{
    props.callback(movie);
  };

  const customTitle = () => {
    if(context ==="top5"){
      return <h2 className="section-title video-list-title">Top 5</h2>
    } else {
      return <h2 className="section-title video-list-title">Films associés</h2>
    }
  }

  return (
    <div>
      {customTitle()}
      <ul className="list-group list-group-flush video-list-items">
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