import React, {useState, useEffect} from 'react'
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { getMovies } from '../redux/features/movieSlice';

const Search = () => {
  const [keyword, setKeyword] = useState('Spider');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [keyword])
  
  return (
    <>
        <h2>Search</h2>
        <input placeholder="Search here..." value={keyword} onChange={event => setKeyword(event.target.value)} />
    </>

  )
}

export default Search