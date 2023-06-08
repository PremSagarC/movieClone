import './App.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

// Routes
import Home from './components/Home/Home.jsx'
import MovieDetails from './components/MovieDetails/MovieDetails.jsx'
import PageNotFound from './components/PageNotFound/PageNotFound.jsx'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:imdbID' element={<MovieDetails />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
