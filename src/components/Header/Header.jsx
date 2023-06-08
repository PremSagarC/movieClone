import React, { useState } from 'react'
import './Header.scss'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import userImage from '../../images/user.png'

import { AiOutlineSearch } from 'react-icons/ai'
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice'

const Header = () => {

  const [term, setTerm] = useState('')
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === '') return alert('Enter the required Movie or Show')
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('')
  }

  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>
          <h1>Movie App</h1>
        </div>
      </Link>
      <div className='userImage'>
        <div className='search-bar'>
          <form onSubmit={submitHandler} className='input'>
            <input type="text" value={term}
              placeholder='Search Movies or Shows'
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type='submit'>
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        <img src={userImage} alt="user image" />
      </div>
    </div>
  )
}

export default Header