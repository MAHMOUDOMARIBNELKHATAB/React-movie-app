import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useGetMovies from "../hooks/useGetMovies";
import Loader from "../loader/loader";
import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./home.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Home = () => {
  const [Movies, loading, error] = useGetMovies();
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const getInputValue = () => {
    const inputValue = inputRef.current.value;

    setInputValue(inputValue.toLowerCase());
  };

  useEffect(() => {
    getInputValue();
  }, [inputValue]);

  return (
    <>
      <div className="selector">
        <Form className="w-100" noValidate>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Search..."
              ref={inputRef}
              onChange={getInputValue}
            />
          </Form.Group>
        </Form>
      </div>
      {/* <Loader loading={loading} error={error}> */}
      <div className="card">
        {Movies.map((Movies) => {
          return (
            <Card sx={{ maxWidth: 345 }} className="SingleCard">
              <img
                src={`https://image.tmdb.org/t/p/w500/${Movies.poster_path}`}
                alt=""
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <p className="title">{Movies.title}</p>
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
        })}
      </div>
      {/* </Loader> */}
    </>
  );
};

export default Home;
