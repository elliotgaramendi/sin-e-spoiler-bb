import { useEffect } from "react";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useMoviesStore } from "./store/movies.store";

function App() {
  const movies = useMoviesStore((state) => state.movies);
  const getMovies = useMoviesStore((state) => state.getMovies);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <h2>Las mejores películas de la historia</h2>
            <CardList data={movies} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
