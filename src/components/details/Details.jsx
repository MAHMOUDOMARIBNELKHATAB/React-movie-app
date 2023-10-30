import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useGetDetails from "../hooks/useGetDetails";
import play from "../../img/play.svg";
import plus from "../../img/plus.svg";
import heart from "../../img/heart.svg";
import "./Details.css";

const Details = () => {
  const [Movie] = useGetDetails();
  console.log(Movie);

  return (
    <div
      className="details"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${Movie.backdrop_path})`,
      }}
    >
      <div className="overlay"></div>
      <Card sx={{ maxWidth: 345 }}>
        <img src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`} />
        <CardContent>
          <div className="parent-flex">
            <div className="top">
              <h3>{Movie.release_date}</h3>
              <h1>{Movie.title}</h1>
              <p>{Movie.overview}</p>
              <div className="play">
                <Button variant="text">
                  <img src={play} />
                  WATCH THE TRAILER
                </Button>
                <span>{Movie.release_date}</span>
                <span>{Movie.runtime}Min</span>
                <span>Rate : {Movie.vote_average}</span>
              </div>
            </div>
            <div className="out-bk">
              <div className="left">
                <h3>
                  {Movie.vote_average}
                  <span>IMDB</span>
                </h3>
                <div className="status">
                  <p className="status-type">status</p>
                  <p>{Movie.status}</p>
                </div>
              </div>
              <div className="right">
                <Button variant="outlined" className="black">
                  +
                </Button>
                <Button variant="outlined" className="white">
                  <img src={heart} alt="" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
