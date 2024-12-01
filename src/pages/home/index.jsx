import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import api from "../../api";
import MovieList from "./MovieList";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Home = () => {
  const [genres, setGenres] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/genre/movie/list?language=en")
      .then((res) => setGenres(res.data.genres))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <Hero />

      {error ? (
        <Error info={error} />
      ) : !genres ? (
        <Loader />
      ) : (
        <div>
          {genres?.map((i) => (
            <MovieList key={i.id} genre={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
