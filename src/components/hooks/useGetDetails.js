import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const useGetDetails = () => {
  const [Movie, setMovie] = useState({});
  const { id , mediatype } = useParams();

  useEffect(() => {
    const getSingleMovie = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=14bdd69ce887376edfafb09f23f78fe9`);
        setMovie((prev) => {
          return { ...prev, ...res.data };
        });
      } catch (error) {
        console.log('error');
      }
    };
    getSingleMovie();
  }, [id]);

  return [Movie];
};

export default useGetDetails;

    