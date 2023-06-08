import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' >
      <Link to='/' className='logo'>
        <h1>Movie App</h1>
      </Link>
      <p>
        ©2023, Movie, Inc. or its affiliates
      </p>
    </div>
  )
}

export default Footer