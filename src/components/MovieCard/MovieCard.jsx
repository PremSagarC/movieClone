import React from 'react'
import './MovieCard.scss'

import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  const { data } = props
  return (
    <div className='card-item' >
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt="" />
          </div>
          <div className='card-info'>
            <h4>
              {data.Title}
            </h4>
            <p>
              {data.Year}
            </p>
          </div>
          <div className='click'>CLICK FOR MORE DETAILS</div>
        </div>
      </Link>
    </div >
  )
}

export default MovieCard