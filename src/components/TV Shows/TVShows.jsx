    
    import * as React from "react";
    import { styled } from "@mui/material/styles";
    import Card from "@mui/material/Card";
    import CardContent from "@mui/material/CardContent";
    import CardActions from "@mui/material/CardActions";
    import IconButton from "@mui/material/IconButton";
    import Typography from "@mui/material/Typography";
    import FavoriteIcon from "@mui/icons-material/Favorite";
    import useGetMovies from "../hooks/useGetMovies";
    import { Link } from "react-router-dom";
    
    const TVShows = () => {
      const [Movies, loading, error] = useGetMovies();
    
      return (
        <div className="movies-List">
          <div className="card">
            {Movies.map((Movies) => {
                if (Movies.media_type == "tv") {
                    return (
                      <Card sx={{ maxWidth: 345 }} className="SingleCard">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${Movies.poster_path}`}
                          alt=""
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            <p className="truncate">{Movies.overview}</p>
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <Link
                            to={`/home/${Movies.media_type}/${Movies.id}`}
                            className="primary"
                          >
                            View details
                          </Link>
                        </CardActions>
                      </Card>
                    );
                }
            })}
          </div>
        </div>
      );
    };
    
    export default TVShows;
    
 

