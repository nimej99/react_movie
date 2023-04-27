import React from 'react';
import ProtoTypes from 'prop-types';

function Movie({poster, title, year, genres, summary}) {
  return (
    <div className='article'>
      <img src={poster} alt={title} />
      {/* medium_cover_image */}
      <div>
        <h3>{title}</h3>
      {/* title */}
        <p>{year}</p>
      {/* year */}       
        <ul>
          <li>{genres}</li>
      {/* genres  */}
        </ul>
        <p>{summary}</p>
      {/* summary */}        
      </div>
    </div>
  );
}

Movie.ProtoTypes={
  id:ProtoTypes.number.isRequired,
  year:ProtoTypes.number.isRequired,
  title:ProtoTypes.string.isRequired,
  summary:ProtoTypes.string.isRequired,
  poster:ProtoTypes.string.isRequired,
  genres:ProtoTypes.arrayOf(ProtoTypes.string).isRequired
}

export default Movie;