import React from 'react'

const customTitle = (context) => {
  if(context ==="top5"){
    return <h2 className="section-title">Numero 1</h2>
  } else {
    return <h2 className="section-title">Sélection</h2>
  }
};

const VideoDetail = ({ title, description, context }) => {
    return (
      <div>
        {customTitle(context)}
        <dl className="row">
          <dt className="col-md-3 sub-title">Titre</dt>
          <dd className="col-md-9 movie-title">{title}</dd>
          <dt className="col-md-3 sub-title">Description</dt>
          <dd className="col-md-9 movie_overview movie_overview_lg">{description}</dd>
        </dl>
      </div>
    );
}

export default VideoDetail;