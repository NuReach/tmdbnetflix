import axios from "../axios.js";
import React, { useEffect, useState } from "react";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr() + "..." : string;
  };
  return (
    <div>
      <div
        className="banner "
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          backgroundPosition: "center center ",
        }}
      ></div>
      <div className="dec text-white absolute top-36 left-12 space-y-3 ">
        <h1 className=" font-bold text-6xl w-full">
          {movie.name || movie.title}
        </h1>
        <div className=" space-x-3">
          <button className=" bg-gray-800  pr-9 pl-9 pt-1 pb-1">Play</button>
          <button className=" bg-gray-800  pr-9 pl-9 pt-1 pb-1">My list</button>
        </div>
        <div className=" dec break-words">
          {truncate(`${movie.overview}`, 100)}
        </div>
      </div>
    </div>
  );
}

export default Banner;
