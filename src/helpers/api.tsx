import axios from "axios";

const API_ENDPOINT: string = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const fetchMovie = async (movieName) => 
 await axios.get(`${API_ENDPOINT}&s=${movieName}`);
