import React, { useEffect, useState } from "react";
import api from "../../api";
import Error from "../../components/error";
import Loader from "../../components/loader";
import { Link } from "react-router-dom";
import { baseImgUrl } from "../../constants";

const Hero = () => {
  const [movie, setMovies] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get("/movie/popular")
      .then((res) => {
        const movies = res.data.results;

        const i = Math.floor(Math.random() * movies.length);

        setMovies(movies[i]);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <Error info={error} />;
  if (!movie) return <Loader />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-start text-gray-300">{movie.overview}</p>
        <p>
          <span>IMDB</span>
          <span className="text-yellow-400 ms-2 font-semibold">
            {movie.vote_average.toFixed(2)}
          </span>
        </p>

        <div className="flex gap-5">
          <Link
            className="py-2 px-4 bg-red-600 rounded transition hover:bg-red-700 "
            to={`/movie/${movie.id}`}
          >
            Watch Film
          </Link>

          <button className="py-2 px-4 bg-blue-600 rounded transition hover:bg-blue-700 ">
            Save
          </button>
        </div>
      </div>

      <div>
        <img
          className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)]my-4 object-contain rounded max-h-[300px]"
          src={baseImgUrl + movie.backdrop_path}
        />
      </div>
    </div>
  );
};

export default Hero;
