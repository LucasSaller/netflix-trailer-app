const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=us&sort_by=popularity.desc`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=us&sort_by=popularity.desc`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18&sort_by=popularity.desc`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc`,
};
export const rows = [
  {
    title: "Netflix Originals",
    request: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },
  {
    title: "Trending Now",
    request: requests.fetchTrending,
  },
  {
    title: "Top Rated",
    request: requests.fetchTopRated,
  },
  {
    title: "Action Movies",
    request: requests.fetchActionMovies,
  },
  {
    title: "Comedy Movies",
    request: requests.fetchComedyMovies,
  },
  {
    title: "Horror Movies",
    request: requests.fetchHorrorMovies,
  },
  {
    title: "Drama Movies",
    request: requests.fetchDramaMovies,
  },
  {
    title: "Documentaries",
    request: requests.fetchDocumentaries,
  },
];
