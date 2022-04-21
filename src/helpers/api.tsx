import axios from "axios";

const API_ENDPOINT: string = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

export const fetchMovie = async (movieName: string) => 
 await axios.get(`${API_ENDPOINT}&s=${movieName}`);
