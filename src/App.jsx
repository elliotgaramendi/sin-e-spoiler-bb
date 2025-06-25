import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
            }
          }
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }
    fetchData();
  }, []);

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
