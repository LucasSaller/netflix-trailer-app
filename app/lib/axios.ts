import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
instance.defaults.headers.common = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
};
export default instance;
