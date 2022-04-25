import React, {FC} from 'react'
import Search from '../components/Search'
import MoviesList from '../components/MoviesList'
const Home: FC  = () =>{
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