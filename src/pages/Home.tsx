import React from 'react'
import Search from '../components/Search'
import MoviesList from '../components/MoviesList'
const Home: React.FC  = () =>{
  return (
    <div>
        <Search/>
        <br></br>
        <br></br>
          <MoviesList/>
    </div>
  )
}

export default Home