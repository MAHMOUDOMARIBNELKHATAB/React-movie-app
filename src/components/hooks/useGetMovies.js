import { useEffect, useState } from "react";
import axios from "axios";

const useGetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9"
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
    getMovies();
  }, []);

  return [movies, loading, error];
};

export default useGetMovies;