import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../types/hooks'
import { Typography, Button } from '@mui/material';
import { getMovieDetail } from '../redux/features/movieSlice';
import noImage from '../assets/images/noimage.jpg'

const MovieDetail: React.FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const {movieDetail} = useAppSelector((state: any) => ({...state.movie}));

    useEffect(() => {
        if (id) {
            dispatch(getMovieDetail(id));
        }
    }, [id])
  return (
    <>
        <section>
            <img src={movieDetail?.Poster === 'N/A' ? noImage: movieDetail?.Poster}  alt={movieDetail?.Title} height="350" width="350"/>
            <div>
                <Typography align='left' variant="h3" gutterBottom component="h2">
                    {movieDetail?.Title === 'N/A' ? '--': movieDetail?.Title}
                </Typography>
                <Typography align='left' variant="h5" gutterBottom component="h5">
                    Year: {movieDetail?.Year === 'N/A' ? '--': movieDetail?.Year }
                </Typography>
                <Typography align='left' variant="body1" gutterBottom component="p">
                    {movieDetail?.Plot === 'N/A' ? '--': movieDetail?.Plot }
                </Typography>
                <Typography align='left' variant="h6" gutterBottom component="h6">
                    Director: {movieDetail?.Director === 'N/A' ? '--': movieDetail?.Director}
                </Typography>

                <Button variant="contained" onClick={() => navigate('/')} >
                    Go Back
                </Button>
            </div>
        </section>
    </>
  )
}

export default MovieDetail