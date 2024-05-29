"use client";
import React, { useEffect, useState } from "react";
import { RowProps, Movie } from "../types/types";
import axios from "axios";
import instance from "../lib/axios";
import YouTube from "react-youtube";
import Image from "next/image"; // Importing Next.js Image component

const NEXT_PUBLIC_YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row: React.FC<RowProps> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<(Movie | null)[]>([null]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie: Movie | null): Promise<void> => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerRequest = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${
          movie?.title || movie?.name || movie?.originalName
        }+trailer&type=video&key=${NEXT_PUBLIC_YOUTUBE_API_KEY}`
      );
      setTrailerUrl(trailerRequest.data.items[0].id.videoId);
    }
  };
  return (
    <div className="ml-5 ">
      <h1 className="text-white text-2xl">{title}</h1>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5 scroll  [&::-webkit-scrollbar]:hidden ">
        {movies &&
          movies.map(
            (movie, index) =>
              ((isLargeRow && movie?.poster_path) ||
                (!isLargeRow && movie?.backdrop_path)) && (
                <Image
                  onClick={() => handleClick(movie)}
                  className={`max-h-[150px] h-full mr-5 w-full object-contain transition-transform duration-[450ms] hover:scale-105 ${
                    isLargeRow && "max-h-[250px] hover:scale-[1.09]"
                  }`}
                  src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name || "movie"}
                  width={isLargeRow ? 342 : 192} // Define el ancho según el tamaño de la fila
                  height={isLargeRow ? 513 : 108} // Define el alto según el tamaño de la fila
                  key={index}
                />
              )
          )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
