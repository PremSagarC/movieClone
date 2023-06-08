import React, { useEffect } from 'react'
import './MovieDetails.scss'

import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../redux/movies/movieSlice'

const MovieDetails = () => {

  const { imdbID } = useParams()
  const dispatch = useDispatch()


  const data = useSelector(getSelectedMovieOrShow)
  console.log(data)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID])

  return (
    <div className='details'>
      {Object.keys(data).length === 0 ?
        (
          <div className='loading'>
            Loading...
          </div>
        )
        :
        (
          <>
            <div className='items'>
              <div>
                <img src={data.Poster} alt="" />
              </div>
              <div className='info'>
                <h4>{data.Title}</h4>
                <div className='name-rating'>
                  <p>IMBD Rating: ⭐{data.imdbRating}</p>
                  <p>Type: {data.Type}</p>
                </div>
                <div className='dates'>
                  <div className='pHover'>
                    <p >Released On </p>:
                    <span>{data.Released}</span>
                  </div>
                  <div className='pHover'>
                    <p >Awards </p>:
                    <span>{data.Awards}</span>
                  </div >
                  <div className='pHover'>
                    <p >Length </p>:
                    <span>{data.Runtime}</span>
                  </div>
                  <div className='pHover'>
                    <p >Language </p>:
                    <span>{data.Language}</span>
                  </div>
                  <div className='pHover'>
                    <p>Cast </p>:
                    <span>{data.Actors}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='description'>
              <p>{data.Plot}</p>
            </div>
          </>
        )}

    </div>
  )
}

export default MovieDetails