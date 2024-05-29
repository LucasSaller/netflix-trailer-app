"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Movie } from "../types/types";
import { requests } from "../lib/lib";
import instance from "../lib/axios";
const Banner = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      const randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomNumber]);
    }
    fetchData();
  }, []);

  const truncate = (str: string | null | undefined, number: number): string => {
    if (str == null) {
      return "";
    }
    return str.length > number ? str.substr(0, number - 1) + "..." : str;
  };
  return (
    <header
      className="text-white  object-contain"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* max-w-[330px] */}
      <div className="ml-8 pt-[380px] h-[190px] max-w-96">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl">
            {movie?.title || movie?.name || movie?.originalName}
          </h1>
          <h1>{truncate(movie?.overview, 150)}</h1>
        </div>
      </div>
      <div
        className="h-[28.4rem]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
        }}
      ></div>
    </header>
  );
};

export default Banner;
