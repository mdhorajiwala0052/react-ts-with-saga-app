import React, { FC, useState, useEffect, ChangeEvent} from 'react'
// import { TextField } from "@mui/material";
import { getMovies } from '../redux/features/movieSlice';
import { useAppSelector, useAppDispatch } from '../types/hooks'


const Search : FC = () => {
  const [keyword, setKeyword] = useState<string>('captain');

  const dispatch = useAppDispatch();
  
  // const {movieList: {Error: error}} = useSelector((state: any) => state.movie);
  const {movieList: {Error: error}} = useAppSelector((state: any) => ({...state.movie}));

  
  useEffect(() => {
    dispatch(getMovies(keyword));
  }, [keyword])
  
  return (
    <>
        <h2>Search</h2>
        <input placeholder="Search here..." value={keyword} onChange={(event: ChangeEvent<HTMLInputElement>) => setKeyword(event.target.value)} />
      {error && <div>
        {error === "Incorrect IMDb ID." ? "" : error}
      
      </div>}
    </>

  )
}

export default Search