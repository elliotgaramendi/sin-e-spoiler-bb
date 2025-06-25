import { create } from "zustand";
import { getMovies } from "../services/movies.service";
import { adaptTmdbToMovie } from "../utils/movies.util";

export const useMoviesStore = create((set) => ({
  movies: [],
  getMovies: async () => {
    const movies = await getMovies();
    set({ movies: movies.map(adaptTmdbToMovie) });
  }
}));