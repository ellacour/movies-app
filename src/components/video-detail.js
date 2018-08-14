import React from 'react'

const VideoDetail = ({ title, description }) => {
  return (
    <div>
      <h2 className="section-title">Numero 1</h2>
      <dl className="row">
        <dt className="col-md-2 sub-title">Titre</dt>
        <dd className="col-md-10 movie-title">{title}</dd>
        <dt className="col-md-2 sub-title">Description</dt>
        <dd className="col-md-10">{description}</dd>
      </dl>
    </div>
  );
}

export default VideoDetail;