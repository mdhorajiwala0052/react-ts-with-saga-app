import React, {useState, useEffect} from 'react'
// import { TextField } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { getMovies } from '../redux/features/movieSlice';

const Search : React.FC = () => {
  const [keyword, setKeyword] = useState<string>('captain');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(keyword));
  }, [keyword])

  // const {movieList: {Error: error}} = useSelector((state: any) => state.movie);
  const {movieList: {Error: error}} = useSelector((state: any) => ({...state.movie}));
  
  return (
    <>
        <h2>Search</h2>
        <input placeholder="Search here..." value={keyword} onChange={event => setKeyword(event.target.value)} />
      {error && <div>
        {error === "Incorrect IMDb ID." ? "" : error}
      
      </div>}
    </>

  )
}

export default Search