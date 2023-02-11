import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios.js";

function Row({ title, fetchUrl }) {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div>
      <div>
        <h1 className=" font-bold text-white text-3xl p-3">{title}</h1>
      </div>
      <div className=" posters flex w-screen overflow-y-hidden overflow-x-scroll space-x-6 p-3">
        {movies.map((movie) => {
          return (
            <Link key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie.backdrop_path || movie.poster_path
                }`}
                alt={movie.name}
                className="img-original rounded text-white transition duration-500 hover:scale-110"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
