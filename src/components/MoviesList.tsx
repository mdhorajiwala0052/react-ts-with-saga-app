import React from 'react'
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import noImage from '../assets/images/noimage.jpg'

// import noImage from "../../src/assets/images/noimage.jpg";


const MoviesList: React.FC = () => {

    const {movieList: {Search: list}} = useSelector((state: any) => ({...state.movie}));
  return (
    <>
        <Grid sx={{flexGrow: 1 }}  container>
            <Grid item xs={12}>
                <Grid container justifyContent="Center" spacing={3}>
                {list?.map((item: any, index:number) =>(
                    <Grid item key={index}>
                        <Card sx={{maxWidth: "350"}} > 
                            <Link to={`movie/${item.imdbID}`}>
                                <CardMedia 
                                    component="img"
                                    alt={item.Title}
                                    image={item.Poster === 'N/A' ? noImage: item.Poster}
                                    title={item.Title}
                                    height="350"
                                />

                                <CardContent>
                                    <Typography  variant="body2" color="blue">
                                        {item.Title}
                                        </Typography>

                                        <Typography  variant="body2" color="blue">
                                        {item.Year}
                                        </Typography>
                                </CardContent>

                            </Link>
                        </Card>
                        </Grid>
                ))}
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}

export default MoviesList






// Grid sxa({ fleNGrow: 1 )} containar
// corid iten xs-(12))
// CGrid container justifyCentent="center" spacing=(3}>
// (moviestist?.search?.nap((iten, index) -> (
// corid key-(index) iten
// Card sx-{{ naxiwidth: "350" }}>
// <Link tos /novie/(iten.indb>
// <CardModia
// conponent-"ing"
// height="35e
// inage-(iten. Poster)
// alt-(iten. Title)
// <CardContent>
// <Typography variant="body2" colore"text.prinary">
// (iten. Titie)
// </Typography>
// Typography varianta"body2" colora"text.prinary"
// ((iten.Year})
// </Typography>
// </Cardcontert>
// </Link
// /Card
// </Grid
