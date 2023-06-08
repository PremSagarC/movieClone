import React, { useEffect } from 'react'
import './Home.scss'
import { useDispatch } from 'react-redux'

import MovieListing from '../Movie/MovieListing'

import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice'

const Home = () => {

  const dispatch = useDispatch()

  const moviesText = 'Star Trek'
  const seriesText = 'Friends'
  useEffect(() => {
    dispatch(fetchAsyncMovies(moviesText))
    dispatch(fetchAsyncShows(seriesText))
  }, [dispatch])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home