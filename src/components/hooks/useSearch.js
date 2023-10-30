import { useEffect, useState } from "react";
import axios from "axios";

const useSearch = (inputValue) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSearchMovies = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query${inputValue}`
         
        );
        console.log(res.data.results);
        setMovies((prev) => {
          return [...prev, ...res.data.results];
        });

        setLoading(false);
      } catch (error) {
        setError('Network server error');
        setLoading(false);
      }
    };
    getSearchMovies();
  }, [inputValue]);

  return [movies];
};

export default useSearch;
